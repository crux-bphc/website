# CRUx Website

The new repo for the cruX website

**NOTE:** Before contributing changes, we recommend you read the [Contributing Guide](./CONTRIBUTING.md)

## Steps for setup

1. Install [nvm](https://github.com/nvm-sh/nvm), and install Node v20.10.0 LTS using `nvm install v20.10.0`. If you're using a different node version manager, do the equivalent.
2. Activate Node v20.10.0 using `nvm use v20.10.0`
3. Install pnpm, using `npm i -g pnpm`
4. Install the packages in this repo by running `pnpm i` in the the root of this repository.

## Getting it up and running

This project does not use docker for its containerization; instead, it will use Vercel or GitHub pages for its deployment. The DNS settings on the `crux-bphc.com` domain will be adjusted accordingly.

As of now, this site will **NOT** be hosted on any of our servers, and we recommend shifting it to our servers **only** if this site gets a backend in the future for whatever reason.

We use [Astro](https://astro.build/) as the framework for this project, with [Svelte](https://svelte.dev/) as a library to write our components.

### Dev

`pnpm run dev`: Starts local dev server at `localhost:4321`

`pnpm run astro ...`: Run CLI commands like `astro add`, `astro check`

### Prod

`npm run build`: Build your production site to `./dist/`

`pnpm run dev`: Preview your build locally, before deploying

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
