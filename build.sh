#!/usr/bin/env bash

BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

(cd ${BASEDIR}; twig "src/**/*.html" --root src/ --output dist/)
lessc ${BASEDIR}/css/global.less ${BASEDIR}/css/global.css --include-path=${BASEDIR}/css --source-map

rm ./index.html

find ./dist ./static -type f -name "*.html"|while read fname; do
  echo "<a href='$fname'>$fname</a><br>" >> ./index.html
done