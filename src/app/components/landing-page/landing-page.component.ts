import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  /** When true, corner pieces sit in the pane center and copy is hidden. */
  readonly converged = signal(false);

  /** Shared rotation of both pieces around their combined center (0 / 180 / 360). */
  readonly rotationDeg = signal(0);

  /** When false, rotation jumps with no CSS transition (used to reset 360 → 0). */
  readonly rotateTransition = signal(true);

  ngOnInit(): void {
    if (this.prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    const timers = new Set<number>();

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => {
          timers.delete(id);
          resolve();
        }, ms);
        timers.add(id);
      });

    const idleMs = 9000;
    const moveMs = 780;
    const spinMs = 650;
    const spinPauseMs = 350;
    const holdMs = 3200;

    const runCycle = async () => {
      while (!cancelled) {
        await wait(idleMs);
        if (cancelled) {
          return;
        }

        // Move to center + fade text
        this.converged.set(true);
        await wait(moveMs);
        if (cancelled) {
          return;
        }

        // First 180°
        this.rotationDeg.set(180);
        await wait(spinMs + spinPauseMs);
        if (cancelled) {
          return;
        }

        // Second 180° (to 360°)
        this.rotationDeg.set(360);
        await wait(spinMs);
        if (cancelled) {
          return;
        }

        // Brief beat at full turn, then return home
        await wait(Math.min(holdMs, 400));
        if (cancelled) {
          return;
        }

        this.converged.set(false);
        await wait(moveMs);
        if (cancelled) {
          return;
        }

        // Snap rotation back to 0 without a visible rewind
        this.rotateTransition.set(false);
        this.rotationDeg.set(0);
        await wait(32);
        if (cancelled) {
          return;
        }
        this.rotateTransition.set(true);
      }
    };

    void runCycle();

    this.destroyRef.onDestroy(() => {
      cancelled = true;
      for (const id of timers) {
        window.clearTimeout(id);
      }
      timers.clear();
    });
  }

  private prefersReducedMotion(): boolean {
    return typeof matchMedia === 'function'
      && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
