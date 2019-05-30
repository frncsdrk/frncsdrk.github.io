#!/usr/bin/env bash
#
# publish
npm run build
printf '%s\n' "BUILT"
git subtree push --prefix public origin master
printf '%s\n' "PUBLISHED"
