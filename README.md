# Seam React Components

[![npm](https://img.shields.io/npm/v/@seamapi/react.svg)](https://www.npmjs.com/package/@seamapi/react)
[![GitHub Actions](https://github.com/seamapi/react/actions/workflows/check.yml/badge.svg)](https://github.com/seamapi/react/actions/workflows/check.yml)

Seam React component library.

## Description

Zero-backend beautiful drop-in pre-built components
with everything you need to get started with [Seam].

Play with them live in the [Storybook]!

[Seam]: https://www.seam.co/
[Storybook]: https://react.seam.co/

## Installation

Add this as a dependency to your project using [npm] with

```
$ npm install @seamapi/react
```

[npm]: https://www.npmjs.com/

## Usage

> Check out the [full example apps](./examples)!

1. Obtain a publishable key from the [Seam Console].
2. Wrap your app with the `SeamProvider`.
3. Drop in Seam components.

```ts
import { SeamProvider, DeviceTable } from '@seamapi/react'

export const App = () => {
  return (
    <SeamProvider publishableKey='your_publishable_key'>
      <main>
        <h1>My App</h1>
        <DeviceTable />
      </main>
    </SeamProvider>
  )
}
```

[Seam Console]: https://console.seam.co/

### Styles

> CSS is automatically included unless using `<SeamProvider disableCssInjection />`.

Components are styled with plain Cascading Style Sheets (CSS).
All styles are prefixed with `seam-` to avoid name collisions.

By default, the `SeamProvider` will inject a link tag into the document head to load the CSS.
If you prefer to manually load the CSS,
this behavior may be disabled with the `disableCssInjection` prop.
Then, either import the CSS using a supported bundler with

```ts
import '@seamapi/react/index.css'
```

or place the following in the `<head>` tag:

> You must match the version string below with the exact version of this package used by your application.

```html
<link rel="stylesheet" href="https://react.seam.co/v/1.0.0/index.min.css" />
```

### Fonts

> Fonts are automatically included unless using `<SeamProvider disableFontInjection />`.

The components are optimized for use with [Source Sans Pro], but will fallback to other system sans-serif fonts.

By default, the `SeamProvider` will inject a link tag into the document head to load the font.
If you prefer to manually provide the font,
this behavior may be disabled with the `disableFontInjection` prop.
Then, load it from Google Fonts by placing the following in the `<head>` tag:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
/>
```

[Source Sans Pro]: https://fonts.google.com/specimen/Source+Sans+Pro

### Content Security Policy (CSP)

By self hosting the recommended fonts (or choosing not to use them),
and proxying the Seam API endpoint, the components are compatible with this strict CSP:

```
default-src 'self'; connect-src 'self' https://connect.getseam.com; img-src 'self' https://connect.getseam.com https://seam.co https://www.seam.co https://devicedb.seam.co
```

The `img-src` is required as some components display device images from the Seam API,
and `connect-src` is required to use components that query the Seam Device Database.

When using the default endpoint, extend `connect-src` with

```
connect-src 'self' https://connect.getseam.com https://devicedb.seam.co
```

When serving the fonts from Google Fonts, include `font-src` and `style-src` with

```
font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com
```

## Development and Testing

### Quickstart

```
$ git clone https://github.com/seamapi/react.git
$ cd react
$ nvm install
$ npm install
$ npm start
```

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run`.
View them with

```
$ npm run
```

### Source code

The [source code] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:seamapi/react.git
```

[source code]: https://github.com/seamapi/react

### Requirements

You will need [Node.js] with [npm] and a [Node.js debugging] client.
Alternately, develop in the cloud with [Codespaces].

[codespaces]: https://github.com/features/codespaces

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

Set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[Node.js debugging]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/creationix/nvm

### Storybook

Develop components with [Storybook].

Run Storybook in development mode with

```
$ npm start
```

The Storybook is deployed in docs mode.
Develop the Storybook in docs mode with

```
$ npm run docs:start
```

[Storybook]: https://storybook.js.org/

### Fake Seam Connect

This project uses a [fake version of Seam Connect](https://github.com/seamapi/fake-seam-connect)
to have deterministic responses for rendering views. You can edit the seed data
for the fake, or find ids that could be useful for testing components in
[seed-fake.js](.storybook/seed-fake.js).

### Previews

Every pull request deploys the Storybook with the examples
in a [Vercel Preview Deployment]
where you may [comment directly on the preview][Vercel Comments].

[Vercel Preview Deployment]: https://vercel.com/docs/concepts/deployments/preview-deployments
[Vercel Comments]: https://vercel.com/docs/concepts/deployments/comments

### Tests

Write tests with [Jest].

[Jest]: https://jestjs.io/

### Examples

Find fully working examples apps under `examples/`.
Each example app is built and deployed along with the Storybook documentation.

Run and develop the examples with,

```
$ npm run examples
```

### SVG Icon Components

The React components under `src/lib/icons` are generated from `assets/icons`.
To add a new icon:

1. Place or update the SVG icon in `assets/icons`.
2. Run `npm run generate`.
3. Import with

```ts
import { SeamIcon } from 'lib/icons/SeamIcon.js'
```

### Publishing

#### Automatic

New versions are released automatically with [semantic-release]
as long as commits follow the [Angular Commit Message Conventions].

[Angular Commit Message Conventions]: https://semantic-release.gitbook.io/semantic-release/#commit-message-format
[semantic-release]: https://semantic-release.gitbook.io/

#### Manual

Publish a new version by triggering a [version workflow_dispatch on GitHub Actions].
The `version` input will be passed as the first argument to [npm-version].

This may be done on the web or using the [GitHub CLI] with

```
$ gh workflow run version.yml --raw-field version=<version>
```

[GitHub CLI]: https://cli.github.com/
[npm-version]: https://docs.npmjs.com/cli/version
[version workflow_dispatch on GitHub Actions]: https://github.com/seamapi/react/actions?query=workflow%3Aversion

## GitHub Actions

_GitHub Actions should already be configured: this section is for reference only._

The following repository secrets must be set on [GitHub Actions]:

- `NPM_TOKEN`: npm token for installing and publishing packages.
- `GH_TOKEN`: A personal access token for the bot user with
  `packages:write` and `contents:write` permission.
- `GIT_USER_NAME`: The GitHub bot user's real name.
- `GIT_USER_EMAIL`: The GitHub bot user's email.
- `GPG_PRIVATE_KEY`: The GitHub bot user's [GPG private key].
- `GPG_PASSPHRASE`: The GitHub bot user's GPG passphrase.
- `CHROMATIC_PROJECT_TOKEN`: The Chromatic project token.

The following repository variables must be set on [GitHub Actions]:

- `STORYBOOK_SEAM_ENDPOINT`: The Seam endpoint to use with Storybook.
- `STORYBOOK_SEAM_PUBLISHABLE_KEY`: The Seam publishable key to use with Storybook.
- `STORYBOOK_SEAM_USER_IDENTIFIER_KEY`: The Seam user identifer key to use with Storybook.

[GitHub Actions]: https://github.com/features/actions
[GPG private key]: https://github.com/marketplace/actions/import-gpg#prerequisites

## Vercel

_Vercel should already be configured: this section is for reference only._

The following environment variables must be set on [Vercel]:

- `SEAM_PUBLISHABLE_KEY`: The Seam publishable key to use with the examples.
- `SEAM_USER_IDENTIFIER_KEY`: The Seam user identifer key to use with the examples..
- `STORYBOOK_SEAM_ENDPOINT`: The Seam endpoint to use with Storybook.
- `STORYBOOK_SEAM_PUBLISHABLE_KEY`: The Seam publishable key to use with Storybook.
- `STORYBOOK_SEAM_USER_IDENTIFIER_KEY`: The Seam user identifer key to use with Storybook.

[Vercel]: https://vercel.com/seamapi/react

## Contributing

> If using squash merge, edit and ensure the commit message follows the [Angular Commit Message Conventions] specification.
> Otherwise, each individual commit must follow the [Angular Commit Message Conventions] specification.

1. Create your feature branch (`git checkout -b my-new-feature`).
2. Make changes.
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create a new draft pull request.
6. Ensure all checks pass.
7. Mark your pull request ready for review.
8. Wait for the required approval from the code owners.
9. Merge when ready.

[Angular Commit Message Conventions]: https://semantic-release.gitbook.io/semantic-release/#commit-message-format

## License

This npm package is licensed under the [MIT license].

[MIT license]: https://github.com/seamapi/react/blob/main/LICENSE.txt

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
