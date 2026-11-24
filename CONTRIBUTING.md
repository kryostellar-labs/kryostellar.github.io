# Contributing

Thank you for your interest in contributing to Kryostellar Docs! This repository powers the public documentation site for [kryostellar.com](https://kryostellar.com) at [docs.kryostellar.com](https://docs.kryostellar.com).

Content and features here are meant for public consumption. Do not add authentication, private APIs, or other gated access unless that decision is explicitly revisited for the project.

## How to Contribute

To contribute improvements, follow the traditional fork-based workflow:

1. **Fork the repository on GitHub**
   - Navigate to the repository on GitHub
   - Click the "Fork" button in the top-right corner
   - This creates a copy of the repository under your GitHub account

2. **Clone your fork locally**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kryostellar.github.io.git
   cd kryostellar.github.io
   ```

3. **Add the original repository as upstream**
   ```bash
   git remote add upstream https://github.com/kryostellar-labs/kryostellar.github.io.git
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**
   - Follow the existing code style and patterns
   - Ensure your changes align with hosting public Kryostellar documentation
   - Update documentation if needed
   - Use Node.js 24 when installing dependencies or running checks
   - Do not use `--legacy-peer-deps`; resolve peer dependency conflicts by aligning package versions

6. **Install dependencies and run local checks**
   ```bash
   npm install
   npm run lint
   npm run build
   npm test
   ```

7. **Commit and push to your fork**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin feature/your-feature-name
   ```

8. **Open a pull request on GitHub**
   - Navigate to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch to merge into the original repository's main branch
   - Provide a clear description of your changes
   - Reference any related issues

9. **Ensure pull request checks pass**
   - The repository includes automated pull request checks (see `.github/workflows/pull-request-check.yaml`)
   - **All checks must pass without errors** before the pull request can be merged
   - You can mirror the reusable checks in `.github/workflows/__call__checks.yaml` locally before pushing:
     ```bash
     npm clean-install
     npm install
     npm run lint
     npm run build
     npm test
     ```
   - If checks fail, address the issues and push additional commits to update the pull request

10. **Wait for code owner approval**
   - All changes require approval from code owners (defined in `.github/CODEOWNERS`)
   - Address any feedback or requested changes
   - Once approved and all checks pass, your pull request will be merged

### Keeping Your Fork Up to Date

Before starting new work, sync your fork with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

This ensures your fork has the latest changes from the original repository.

## Pull Request Checks

This project includes automated pull request checks that run on every pull request:

- **Pull Request Checks Workflow** (`.github/workflows/pull-request-check.yaml`) - Validates pull requests to the main branch
- **Reusable Checks** (`.github/workflows/__call__checks.yaml`) - Executes test and validation workflows

**Important**: All pull request checks must complete successfully without errors before a pull request can be merged. Make sure to:
- Run checks locally with Node.js 24 before pushing
- Address any failing checks
- Ensure all automated tests pass

## Template Updates

This site is derived from `template-angular`. When merging template changes, preserve public-docs customizations (no MSAL authentication) and keep documentation focused on kryostellar.com.

## Code of Conduct

- Be respectful and considerate in all interactions
- Provide constructive feedback
- Follow the project's coding standards and guidelines

## Questions?

If you have questions or need help, please:
- Open an issue for discussion
- Contact the code owners
- Review the [README.md](README.md) for more information about the project
