#!/bin/bash
set -eu

rm -rf dist
npm run generate
cd dist
git init
git add -A
git commit -m "deploy"
git remote add origin git@github.com:popstas/voice-list.git
git push --force origin master:gh-pages
cd ..
