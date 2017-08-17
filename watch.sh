#!/usr/bin/env bash

# This script requires `fswatch`: `brew install fswatch`

BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

while [ true ]
do
	echo 'Exit: Ctrl + Z'

	fswatch -1 ${BASEDIR}/src ${BASEDIR}/css

	${BASEDIR}/build.sh
	echo "Finished rebuilding"
	osascript -e 'on run {t}' -e "display notification \"${d##*/}\" with title \"Finished rebuilding\"" -e end title
done