import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.converged()).toBe(false);
    expect(component.rotationDeg()).toBe(0);
  });

  it('should render elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.landing__brand')?.textContent)
      .toContain('Kryostellar');
    expect(compiled.querySelector('.sf-wordmark__main')?.textContent)
      .toContain('Kryo');
    expect(compiled.querySelector('.sf-wordmark__accent')?.textContent)
      .toContain('stellar');
    expect(compiled.querySelector('.landing__message')?.textContent)
      .toContain('Coming soon');
    expect(compiled.querySelector('.landing__pane')).toBeTruthy();
    expect(compiled.querySelector('.landing__piece--tl')).toBeTruthy();
    expect(compiled.querySelector('.landing__piece--br')).toBeTruthy();
    expect(compiled.querySelectorAll('.landing__piece').length).toBe(2);
    expect(compiled.querySelector('.landing__stroke')).toBeTruthy();
  });

});
