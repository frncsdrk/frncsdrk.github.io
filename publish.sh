#!/usr/bin/env bash
#
# publish
git subtree push --prefix public gh master
printf '%s\n' "PUBLISHED"
