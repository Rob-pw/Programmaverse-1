#!/bin/bash
npm install
cd ./plugins/front-end/
cd src/                            
node ../../../node_modules/bower/bin/bower install
cd ../ 
cd development-tasks/                             
node ../../../node_modules/gulp/bin/gulp.js     
cd ../../../
node server-up.js