#!/bin/bash

cd ./plugins/front-end/development-tasks/ && gulp;
cd ../../../ && npm install;
node server-up.js
