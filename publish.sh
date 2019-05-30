#!/usr/bin/env bash
#
# publish
npm run build
printf '%s\n' "BUILT"
git subtree push --prefix public origin gh-pages
printf '%s\n' "PUBLISHED"
