## 請以自己的話解釋 API 是什麼
API(Application Programming Interface)，又稱為應用程式編譯介面，是用來讓不同軟體之間可以相互取得彼此資料的方式，舉個例子說明好了，有 A 軟體和 B 軟體，A 軟體想要取得 B 軟體的資料，這時候就需要 B 軟體提供一份文件給 A 軟體，告訴 A 軟體該如何透過固定格式的寫法來取得 B 軟體的資料，而這份文件我們就給他一個名字，就叫做API。

這麼做的好處在於，B 軟體可以把想要的隱私資料保存起來，只將部分資訊透露出去給別的軟體使用，並且之後如果有 C、D、E 軟體也想來取的 B 軟體的資料，可以使用同一份文件就好，不用再花費心思製作不一樣的。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
為求完整性，我將課堂上的有提到的都列出來。藍色字體為對這題的回答。

### 資訊回應
:star:100 Continue
此臨時回應表明，目前一切狀態良好，而用戶端應當繼續完成請求、或是在己完成請求的強況下，忽略此訊息。

### 成功回應
200 OK
請求成功，即依照 HTTP 方法而定。
GET : 資源成功獲取並於訊息主體(body)中發送
HEAD : entity 標題已於訊息主體中
POST : 以傳送 body 中的 resource
TRACE : Server 已接收 body 中內含的 response

204 No Content
對於尋訪沒有任何內容回應。

### 重定向訊息
300 Multiple Choice
請求擁有一個以上的回應。用戶代理或使用者。

301 Moved Permanently
網址永久遷移，在下一次尋訪時，會自動詢問新的網址。

302 Found
網址暫時遷移，因此在下一次尋訪時，依舊會重複詢問舊網址。

### 用戶端錯誤回應
400 Bad Request
此回應意味伺服器因為收到無效語法，而無法理解請求。

:star:401 Unauthorized
需要授權以回應請求。

:star:403 Forbidden
用戶端並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。不同於 401，伺服端知道用戶端的身份。

404 Not Found
伺服器找不到請求的資源。


### 伺服器端錯誤回應
500 Internal Server Error
伺服器端發生未知或無法處理的錯誤。

503 Servoce Unavilable
伺服器無法回應請求，最常發生的原因是請求太多導致伺服器不勝負荷。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Url : https://fastdeliver.com
|說明|Method|path|參數|範例|
|:-:|:-:|:-:|:-:|:-:|
|所有餐廳資料|GET|/restaurants|_all|/restaurants_all|
|單一餐廳資料|GET|/restaurants/:id||/restaurants/17|
|刪除餐廳|DELETE|/restaurants/:id||/restaurants/17|
|新增餐廳|POST|/restaurants|name : 店名||
|更改餐廳|PATCH|/restaurants/:id|New name :新店名|/restaurants/17|