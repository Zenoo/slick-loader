#!/usr/bin/env bash
npx babel src -o slick-loader.min.js && jsdoc . -R README.md -c docs/jsdoc-conf.json && git add * && git commit -m "Babel & JSDoc generation"
echo $?
