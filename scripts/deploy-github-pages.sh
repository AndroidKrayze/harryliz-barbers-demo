#!/usr/bin/env bash
# Deploy Harryliz Barbers demo to GitHub Pages.
# Requires: GH_TOKEN with repo + pages write on AndroidKrayze/harryliz-barbers-demo
set -euo pipefail
REPO="https://x-access-token:${GH_TOKEN}@github.com/AndroidKrayze/harryliz-barbers-demo.git"
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

npm ci
npm run build
cp -f public/.nojekyll out/.nojekyll

# Push full source to main
git remote remove github 2>/dev/null || true
git remote add github "$REPO"
git push github HEAD:main

# Force-push out/ as orphan gh-pages
WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT
cp -a out/. "$WORKDIR/"
cd "$WORKDIR"
git init
git checkout -b gh-pages
git add -A
git -c user.email='cursoragent@cursor.com' -c user.name='Cursor Agent' commit -m "Deploy Harryliz Barbers static site"
git push --force "$REPO" gh-pages

# Enable Pages from gh-pages / root
curl -sS -X POST \
  -H "Authorization: Bearer ${GH_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/AndroidKrayze/harryliz-barbers-demo/pages \
  -d '{"build_type":"legacy","source":{"branch":"gh-pages","path":"/"}}' \
  || curl -sS -X PUT \
  -H "Authorization: Bearer ${GH_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/AndroidKrayze/harryliz-barbers-demo/pages \
  -d '{"build_type":"legacy","source":{"branch":"gh-pages","path":"/"}}'

echo "Live: https://androidkrayze.github.io/harryliz-barbers-demo/"
