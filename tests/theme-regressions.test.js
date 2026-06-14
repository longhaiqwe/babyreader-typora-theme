const fs = require("fs");
const path = require("path");
const assert = require("assert");

const css = fs.readFileSync(path.join(__dirname, "..", "babyreader.css"), "utf8");

function ruleFor(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`(?:^|\\n)${escaped}\\s*\\{([\\s\\S]*?)\\}`));
  assert(match, `Missing rule for ${selector}`);
  return match[1];
}

assert.match(ruleFor(".md-plain"), /color:\s*var\(--br-text\)/);
assert.match(ruleFor("#write"), /padding:\s*56px 40px;/);
assert.match(ruleFor(".typora-export #write"), /padding:\s*48px 40px;/);
assert.match(css, /@media \(max-width: 800px\)[\s\S]*#write\s*\{[\s\S]*padding:\s*56px 24px;/);
assert.match(
  ruleFor("#write blockquote .md-plain,\n.typora-export blockquote .md-plain"),
  /color:\s*var\(--br-text-muted\)/
);
assert.match(ruleFor("#write blockquote,\n.typora-export blockquote"), /margin:\s*18px 0;/);
assert.match(ruleFor("#write blockquote,\n.typora-export blockquote"), /padding:\s*16px 22px;/);
assert.match(ruleFor("#write blockquote p,\n.typora-export blockquote p"), /margin-bottom:\s*8px;/);
assert.match(
  ruleFor("#write blockquote a,\n.typora-export blockquote a"),
  /border-bottom-color:\s*var\(--br-accent\)/
);
assert.match(
  ruleFor("#write blockquote .md-link .md-plain,\n#write blockquote .md-link .md-underlined-text,\n#write blockquote .md-url,\n.typora-export blockquote .md-link .md-plain,\n.typora-export blockquote .md-link .md-underlined-text,\n.typora-export blockquote .md-url"),
  /text-decoration:\s*underline/
);
assert.match(ruleFor(".md-link,\n.md-url"), /color:\s*var\(--br-text-muted\)/);
assert.match(
  ruleFor(".md-link .md-plain,\n.md-link .md-underlined-text,\n.md-url"),
  /color:\s*var\(--br-accent\)/
);
assert.match(ruleFor("#write img,\n.typora-export img"), /margin:\s*0/);

const fenceLineRule = ruleFor("#write .md-fences pre,\n.typora-export .md-fences pre");
assert.match(fenceLineRule, /margin:\s*0/);
assert.match(fenceLineRule, /padding:\s*0/);
assert.match(fenceLineRule, /border:\s*0/);
assert.match(fenceLineRule, /background:\s*transparent/);

assert.match(ruleFor(".md-image > .md-meta"), /caret-color:\s*var\(--br-text-strong\)/);
assert.match(ruleFor(".md-image > .md-meta"), /color:\s*inherit/);
assert.doesNotMatch(ruleFor(".md-image > .md-meta"), /background:/);
assert.match(ruleFor(".mac-os #write"), /caret-color:\s*var\(--br-accent\)/);

console.log("theme regressions ok");
