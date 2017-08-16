#!/usr/bin/env bash

twig 'src/**/*.html' --root src/ --output dist/
less-cli ./css

rm ./index.html

find ./dist ./static -type f -name "*.html"|while read fname; do
  echo "<a href='$fname'>$fname</a><br>" >> ./index.html
done