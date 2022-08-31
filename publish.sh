#!/usr/bin/env bash
#
# publish
git subtree push --prefix public gh main
printf '%s\n' "PUBLISHED"
