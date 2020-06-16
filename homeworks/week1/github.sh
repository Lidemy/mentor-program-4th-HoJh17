#!/bin/bash

### pseudo code
#  
# 從參數得到使用者的名字
# 抓取使用者的相關資料
# 將想知道得資料擷取下來輸入到 show.txt 檔案
# 顯示 show.txt 
#
###
curl https://api.github.com/users/$1 > user.txt
grep '\<name\>' user.txt | cut -d '"' -f4 > show.txt
grep '\<bio\>' user.txt | cut -d '"' -f4 >> show.txt
grep '\<location\>' user.txt | cut -d '"' -f4 >> show.txt
grep '\<blog\>' user.txt | cut -d '"' -f4 >> show.txt
cat show.txt
