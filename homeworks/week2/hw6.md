``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
### Step 1 執行第一個 for 迴圈
```js
for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
```
1. 設定 i = 0 ， 判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[0] 是否 <= 0 ，否
2. 第一圈迴圈結束，跑回第一行，i++，i 變成 1，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[1] 是否 <= 0 ，否
3. 第二圈迴圈結束，跑回第一行，i++，i 變成 2，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[2] 是否 <= 0 ，否
4. 第三圈迴圈結束，跑回第一行，i++，i 變成 3，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[3] 是否 <= 0 ，否
5. 第四圈迴圈結束，跑回第一行，i++，i 變成 4，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[4] 是否 <= 0 ，否
6. 第五圈迴圈結束，跑回第一行，i++，i 變成 5，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[5] 是否 <= 0 ，否
7. 第六圈迴圈結束，跑回第一行，i++，i 變成 6，判斷 i 是否 < arr.length，否，離開迴圈

### Step 2 執行第二個 for 迴圈
```js
for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
```
1. 設定 i = 2 ， 判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[2] 是否不等於 arr[1] + arr[0] ，否
2. 第一圈迴圈結束，跑回第一行，i++，i 變成 3，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[3] 是否不等於 arr[2] + arr[1] ，否
3. 第二圈迴圈結束，跑回第一行，i++，i 變成 4，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[4] 是否不等於 arr[3] + arr[2] ，否
4. 第三圈迴圈結束，跑回第一行，i++，i 變成 5，判斷 i 是否 < arr.length，是，進入迴圈
判斷 arr[5] 是否不等於 arr[4] + arr[3] ，否
5. 第四圈迴圈結束，跑回第一行，i++，i 變成 6，判斷 i 是否 < arr.length，否，離開迴圈

### Step 3 
```js
return 'valid'
```
回傳 valid