# npmx-redirect

A userscript that automatically redirects npmjs.com links to npmx.dev for faster package browsing.

## Features

- Instant redirects from npmjs.com → npmx.dev
- Preserves URLs, paths, and query parameters
- Lightweight and fast
- Fully tested

## Installation

### Direct Install

[📥 **Click here to install**](data:application/x-javascript;base64,KCgpPT17InVzZSBzdHJpY3QiO2xldCBuPXdpbmRvdy5sb2NhdGlvbi5ocmVmO2lmKG4uaW5jbHVkZXMoIm5wbWpzLmNvbSIpKXtsZXQgYz1uLnJlcGxhY2UoIm5wbWpzLmNvbSIsIm5wbXguZGV2Iik7d2luZG93LmxvY2F0aW9uLmhyZWY9Y31dfSkoKTs=)

Or manually install:

1. Make sure you have a userscript manager installed:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
   - [Greasemonkey](https://www.greaseyfork.org/en) (Firefox)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

2. Click the install button above, or download the latest [index.js](https://github.com/justinregulier/npmx-redirect/releases/latest/download/index.js)

3. Paste the script into your userscript manager

4. Visit any npmjs.com URL and enjoy faster package browsing on npmx.dev! 🎉

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Commands

- **Build**: `pnpm build` - Compiles TypeScript and bundles the userscript
- **Test**: `pnpm test` - Runs VM-based tests to verify redirects work correctly
- **Lint**: `pnpm lint` - Checks code quality

### Testing

The project includes VM-based tests that:

- Load the built userscript from `dist/index.js`
- Execute it in a Node.js VM with mocked browser APIs
- Verify redirects happen correctly

```bash
pnpm test
```

## Project Structure

```bash
npmx-redirect/
├── src/
│   └── index.ts          # Userscript source
├── test/
│   └── tests.test.ts     # VM-based tests
├── dist/
│   └── index.js          # Built userscript (generated)
├── scripts/
│   └── build.ts          # Build script
└── package.json
```

## License

MIT