#!/usr/bin/env bash
#
# publish
git subtree push --prefix public origin main
printf '%s\n' "PUBLISHED"
