import { describe, test, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';

describe("Userscript VM", () => {
  const userscriptPath = join(process.cwd(), "dist", "index.user.js");
  const userscriptSource = readFileSync(userscriptPath, "utf8");

  const runUserscript = (startUrl: string) => {
    let redirectedUrl: string | null = null;
    const window = {
      location: {
        get href() {
          return startUrl;
        },
        set href(value: string) {
          redirectedUrl = value;
        }
      }
    };

    const context = vm.createContext({ window });
    vm.runInContext(userscriptSource, context);

    return redirectedUrl;
  };

  test("userscript redirects npmjs.com to npmx.dev", () => {
    const result = runUserscript("https://www.npmjs.com/package/lodash");
    expect(result).toBe("https://www.npmx.dev/package/lodash");
  });

  test("userscript preserves path and query", () => {
    const result = runUserscript("https://npmjs.com/package/lodash?tab=readme");
    expect(result).toBe("https://npmx.dev/package/lodash?tab=readme");
  });

  test("userscript does nothing for non-npmjs URLs", () => {
    const result = runUserscript("https://github.com/sindresorhus/awesome");
    expect(result).toBeNull();
  });
});