#!/usr/bin/env python3
"""
Fix code block language identifiers in Jekyll posts.
Converts ``` plaintext/plain/text blocks containing shell commands → ```bash
Run from your site root: python3 fix_codeblocks.py
"""

import os
import re
import glob

POSTS_DIR = "_posts"

# Shell command patterns that indicate a bash block
SHELL_PATTERNS = [
    r"^\s*(sudo|apt|apt-get|yum|dnf|pacman|brew)\s",
    r"^\s*(systemctl|journalctl|service)\s",
    r"^\s*(ls|cd|cp|mv|rm|mkdir|chmod|chown|touch|cat|grep|find|sed|awk|sort|uniq|head|tail|wc)\s",
    r"^\s*(git|docker|kubectl|helm|terraform|ansible)\s",
    r"^\s*(python|python3|pip|pip3|node|npm|npx|yarn)\s",
    r"^\s*(virsh|qemu|virt-|libvirt)\S*\s",
    r"^\s*(bundle|jekyll|gem|ruby)\s",
    r"^\s*(ssh|scp|rsync|curl|wget)\s",
    r"^\s*(export|source|echo|printf|read|set|unset)\s",
    r"^\s*\$\s+",          # lines starting with $
    r"^\s*#!(/bin|/usr)",  # shebangs
]

def looks_like_shell(code):
    for line in code.splitlines():
        for pattern in SHELL_PATTERNS:
            if re.search(pattern, line):
                return True
    return False

def fix_codeblocks(content):
    changed = False

    def replacer(m):
        nonlocal changed
        lang = m.group(1).strip().lower() if m.group(1) else ""
        code = m.group(2)

        # Already has a real language tag (not plaintext/plain/text/empty)
        if lang and lang not in ("plaintext", "plain", "text", ""):
            return m.group(0)

        if looks_like_shell(code):
            changed = True
            return f"```bash{code}```"

        return m.group(0)

    result = re.sub(r"```([^\n]*)\n(.*?)```", replacer, content, flags=re.DOTALL)
    return result, changed

def main():
    posts = glob.glob(os.path.join(POSTS_DIR, "*.md"))
    if not posts:
        print(f"No .md files found in {POSTS_DIR}/")
        return

    fixed = 0
    for filepath in sorted(posts):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        new_content, changed = fix_codeblocks(content)

        if changed:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  ✓ Fixed: {os.path.basename(filepath)}")
            fixed += 1

    print(f"\nDone. {fixed}/{len(posts)} posts updated.")

if __name__ == "__main__":
    main()
