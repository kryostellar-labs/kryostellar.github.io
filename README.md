# Kryostellar Docs

Public documentation site for [kryostellar.com](https://kryostellar.com), served at [docs.kryostellar.com](https://docs.kryostellar.com).

This Angular app hosts publicly available product and platform documentation. There is no authentication; all published content is intended to be openly readable.

This project is based on the [Angular webapp template](https://github.com/kryostellar-labs/template-angular) (Angular CLI 22) and keeps a `template` remote so upstream improvements can be merged over time.

## Prerequisites

- Node.js 24
- npm

Install dependencies with:

```shell
npm install
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `npm run ng -- generate component component-name` to generate a new component. You can also use `npm run ng -- generate directive|pipe|service|class|guard|interface|enum`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Vitest](https://vitest.dev) (`@angular/build:unit-test`). Tests run with watch mode disabled and code coverage enabled.

## Linting

Run `npm run lint` to execute the Angular lint check.

## Pull request checks

Pull request checks use Node.js 24 and run the commands defined in `.github/workflows/__call__checks.yaml`:

```shell
npm clean-install
npm install
npm run lint
npm run build
npm test
```

Run these checks locally before opening or updating a pull request.

## Further help

To get more help on the Angular CLI, run `npm run ng -- help` or see the [Angular CLI documentation](https://angular.dev/tools/cli).

## Run this project locally

To create a container image:

```shell
docker build -t docs-kryostellar-com .
```

To start the container:

```shell
docker run -d -p 8000:80 --name docs-kryostellar-com docs-kryostellar-com
```

Alternatively you can use docker-compose:

```shell
docker-compose up -d
```

When you are done with local development inspection, stop the container:

```shell
docker-compose down
```

## DevOps Features

This repository includes DevOps automation from the template, implemented as GitHub Actions workflows:

- **Auto-merge Dependabot PRs** - Automatically merges Dependabot pull requests when all checks pass
  - Intelligent mergeable status checking with retry logic
  - Validates PR author and workflow completion before merging
  - Prevents infinite loops with maximum retry attempts

- **Pull Request Checks** - Automated validation workflow that runs on pull requests to main branch

- **Dependabot Configuration** - Automated dependency updates for npm and GitHub Actions

## Auto-Merge Workflow

The auto-merge workflow automatically merges Dependabot pull requests when:

- All checks have passed successfully
- The PR is from `dependabot[bot]`
- The PR is mergeable (with intelligent retry logic)

The workflow includes:
- **Smart Retry Logic**: Waits up to 60 seconds (12 attempts × 5 seconds) for GitHub to calculate mergeability
- **Early Exit**: Stops checking as soon as mergeable status is determined
- **Error Handling**: Provides detailed error messages if mergeability cannot be determined

## Template Merging Process

This repository maintains git history so template updates can be merged and adopted. When updating with template changes:

1. Update your local main branch
2. Fetch all remotes (including the template remote)
3. Create a feature branch for the template update
4. Merge changes from the template remote's main branch into your feature branch
5. Resolve conflicts according to the guidelines:
   - Keep project-specific dependencies but adopt version numbers from the template
   - Preserve project-specific customizations (including the absence of MSAL auth for this public docs site)
   - Ask for help when unsure about conflict resolution
6. Run the pull request checks locally with Node.js 24:
   - `npm clean-install`
   - `npm install`
   - `npm run lint`
   - `npm run build`
   - `npm test`
7. Push the feature branch and open a pull request
8. After merge, switch back to main and clean up the feature branch

See [merge-instructions.md](.github/merge-instructions.md) for detailed steps.

## Dependabot

Dependabot is configured to:
- Check for npm and GitHub Actions updates daily
- Automatically create pull requests for updates
- Auto-merge PRs when checks pass (via auto-merge workflow)

## Code Ownership

Code ownership is managed via `.github/CODEOWNERS`. All changes require approval from the code owners before merging.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is part of Kryostellar Labs.

## Support

For issues, questions, or contributions, please open an issue or contact the code owners.
