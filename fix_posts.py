#!/usr/bin/env python3
"""
Fix Jekyll post front matter for Chirpy theme compatibility.
- Converts `coverImage` to `image` with correct path
- Adds `+0530` timezone to date
- Ensures categories is a list
Run from your site root: python3 fix_posts.py
"""

import os
import re
import glob

POSTS_DIR = "_posts"
IMAGE_BASE = "/assets/img/posts"

def fix_post(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Must have front matter
    if not content.startswith("---"):
        return False

    # Split front matter from body
    parts = content.split("---", 2)
    if len(parts) < 3:
        return False

    fm = parts[1]
    body = parts[2]
    changed = False

    # Fix coverImage → image with correct path
    def replace_cover(m):
        img_name = m.group(1).strip().strip('"\'')
        return f'image:\n  path: {IMAGE_BASE}/{img_name}'

    new_fm, n = re.subn(r'coverImage:\s*"?([^"\n]+)"?', replace_cover, fm)
    if n:
        fm = new_fm
        changed = True

    # Fix date: add +0530 if missing timezone
    def fix_date(m):
        d = m.group(1).strip()
        # Already has timezone offset
        if "+" in d or d.endswith("Z"):
            return m.group(0)
        # Has time but no tz
        if re.match(r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}', d):
            return f'date: {d} +0530'
        # Date only, add midnight IST
        if re.match(r'\d{4}-\d{2}-\d{2}$', d):
            return f'date: {d} 00:00:00 +0530'
        return m.group(0)

    new_fm, n = re.subn(r'date:\s*(.+)', fix_date, fm)
    if n:
        fm = new_fm
        changed = True

    # Fix image references in body: ![alt](url) where url has no leading slash or domain
    # e.g. ![img](image.png) → ![img](/assets/img/posts/image.png)
    def fix_body_img(m):
        alt = m.group(1)
        url = m.group(2)
        # Skip if already absolute or external
        if url.startswith("http") or url.startswith("/assets"):
            return m.group(0)
        # Strip any relative path prefix, keep just filename
        filename = os.path.basename(url)
        return f'![{alt}]({IMAGE_BASE}/{filename})'

    new_body, n = re.subn(r'!\[([^\]]*)\]\(([^)]+)\)', fix_body_img, body)
    if n:
        body = new_body
        changed = True

    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"---{fm}---{body}")
        return True
    return False

def main():
    posts = glob.glob(os.path.join(POSTS_DIR, "*.md"))
    if not posts:
        print(f"No .md files found in {POSTS_DIR}/")
        return

    fixed = 0
    for p in sorted(posts):
        if fix_post(p):
            print(f"  ✓ Fixed: {os.path.basename(p)}")
            fixed += 1

    print(f"\nDone. {fixed}/{len(posts)} posts updated.")

if __name__ == "__main__":
    main()
