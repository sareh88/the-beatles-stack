# Remix Indie Stack

![The Remix Beatles Stack](https://github.com/sareh88/the-beatles-stack)

```
npx create-remix --template sareh88/the-beatles-stack
```

## What's in the stack

- [Netlify app deployment]
- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

## Development

- Initial setup: _If you just generated this project, this step has been done for you._

- Start dev server:

  ```sh
  npm run dev
  ```

### Relevant code:

This is a pretty simple starter template,

- new remix project with tailwind.

## Deployment

coming soon

## GitHub Actions

We use GitHub Actions for continuous integration and deployment. Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging.

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
