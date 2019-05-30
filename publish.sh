#!/usr/bin/env bash
#
# publish
git subtree push --prefix public origin master
printf '%s\n' "PUBLISHED"
