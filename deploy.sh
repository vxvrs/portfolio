#!/bin/bash

set -e

npm run build

cp -R ./public/ ../vxvrs.github.io/

cd ../vxvrs.github.io

git commit -am "New version"
git push origin build
