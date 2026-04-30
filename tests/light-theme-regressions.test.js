const fs = require("fs");
const path = require("path");
const assert = require("assert");

const css = fs.readFileSync(path.join(__dirname, "..", "babyreader-light.css"), "utf8");

function ruleFor(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`(?:^|\\n)${escaped}\\s*\\{([\\s\\S]*?)\\}`));
  assert(match, `Missing rule for ${selector}`);
  return match[1];
}

assert.match(css, /--br-bg:\s*#fbfaf7/);
assert.match(css, /--br-paper:\s*#ffffff/);
assert.match(css, /--br-accent:\s*#c4a06a/);
assert.match(ruleFor("#write"), /max-width:\s*720px/);
assert.match(ruleFor("#write"), /padding:\s*56px 40px;/);
assert.match(ruleFor("#write"), /background:\s*var\(--br-paper\)/);
assert.match(ruleFor(".typora-export #write"), /padding:\s*48px 40px;/);
assert.match(css, /@media \(max-width: 800px\)[\s\S]*#write\s*\{[\s\S]*padding:\s*56px 24px;/);
assert.match(ruleFor(".md-plain"), /color:\s*var\(--br-text\)/);
assert.match(
  ruleFor("#write blockquote .md-plain,\n.typora-export blockquote .md-plain"),
  /color:\s*var\(--br-text-muted\)/
);

const fenceLineRule = ruleFor("#write .md-fences pre,\n.typora-export .md-fences pre");
assert.match(fenceLineRule, /margin:\s*0/);
assert.match(fenceLineRule, /padding:\s*0/);
assert.match(fenceLineRule, /border:\s*0/);
assert.match(fenceLineRule, /background:\s*transparent/);

console.log("light theme regressions ok");
