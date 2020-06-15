#!/bin/bash

### pseudo code
#  
# 從參數得到使用者的名字
# 抓取使用者的相關資料
# 將想知道得資料擷取下來輸入到 show.txt 檔案
# 顯示 show.txt 
#
###

curl https://api.github.com/users/$1 | grep '"name"'  > show.txt
curl https://api.github.com/users/$1 | grep '"bio"' >> show.txt
curl https://api.github.com/users/$1 | grep '"location"' >> show.txt
curl https://api.github.com/users/$1 | grep '"blog"' >> show.txt
clear
cat show.txt
