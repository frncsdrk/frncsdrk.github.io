#!/usr/bin/env bash
mkdir -p ./app/vendor/spectre.css/dist
cp -r ./node_modules/spectre.css/dist/* ./app/vendor/spectre.css/dist
echo "DONE"
