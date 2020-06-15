#!/bin/bash

### pseudo code
# 
# for (var i = 1 ; i <= n ; i++)
#   產生{i}.js
#
#
###


for i in $(seq 1 $1);
do
    touch $i.js
done
