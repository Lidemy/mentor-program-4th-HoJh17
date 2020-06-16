## 跟你朋友介紹 Git

Git，目的是用來進行版本控制，利用 CLI 的操作介面來執行，因此也有相對應的指令要熟悉，常見指令如下

|指令|意義|用法|
|:-:|:-:|:-:|
|git add|將檔案加入暫存區|git add 檔案名稱|
|git commit|將暫存區檔案傳到儲存區|git commit -m "名稱"|
|git status|檢視暫存區的狀態||
|git log|檢視儲存區的狀態||
||以7碼亂碼檢視儲存區的狀態|git log - - oneline|
|git merge|將分支合併到主線中|git merge <branch name>|
||將分支合併到另一分支中|git <branch name> merge <branch name>|
|git diff|檢視目前和上一次 commit 內容的差異||
|git push|上傳儲存區的檔案|git push origin <branch name>|
|git pull|下載 Github repo 內的檔案|git pull origin <branch name>|
|git clone|複製 repo 的檔案並下載到本地端|git clone 網址|
|git init|開始進行版本管控|在資料夾內使用|
|git branch|開一個新的分支||
||檢視分支|git branch -v |
||刪除分支|git branch -d |
|git checkout|切換到分支上|
|git remote add origin|讓 terminal 與取名為 origin 的遠端進行連線||
|git push -u origin master|上傳 master 檔案到叫 origin 的 repo 上|-u 固定連到叫 origin 的 repo 上|

在開始進行操作之前，要介紹幾個核心概念，一開始我們可以將電腦內部分成三種區塊，
工作區(Working Directory)、暫存區(Staging Area)、儲存區(Repository)，
三個區塊的關係如下圖所示

                               git add                            git commit  
                工作區         -------->          暫存區          ------------>          儲存區
        (Working Directory)                  (Staging Area)                          (Repository)


工作區就是你目前正在編輯檔案地方，當檔案編輯完成後，可以執行 git add 指令將檔案從工作區送往暫存區。
當暫存區中的檔案累積至一定數目，就可以執行 git commit 指令 將檔案送往儲存區。
一定都要先 add 再 commit，或是可以使用指令 git commit -am 同時間執行也是可以。

在使用 add 和 commit 指令的同時，會搭配其他指令來檢視目前工作區和暫存區的狀況
git status  為檢視暫存區的狀態，看看有那些檔案還留在工作區，尚未 add，那些檔案已經在暫存區內，等待 commit
git log     為列出 commit 的歷史紀錄，如果要看更詳細的檔案內容，需要加上一些參數，例如 git log -p

上述動作都是在本地電腦端執行，如果我們今天要在另一台電腦內對同一份檔案進行版本控制或是想分享給其他人的時候，將檔案從電腦 A 移動到電腦 B 上，顯然是一個很麻煩且複雜的動作，於是我們透過 GitHub 這個網站幫我們做檔案傳輸的動作，可以想像成下列圖示

                                              git push
                本地端(User)        <----------------------->         遠端(GitHub)
                                              git pull 

透過 git push & git pull 來將本地端和遠端的檔案進行同步動作，於是如果今天想要換一台電腦，可以直接從 GitHub 上將檔案拉到新的本地端，就不需要用 USB 來傳輸檔案了。

有了上述概念，就可以開始對笑話進行版本控制，步驟如下:
1. 新開資料夾並且開始進行版本控制 git init。
2. 開始編輯笑話檔案 laugh.txt。
3. 將完成檔案送入至暫存區 git add laugh.txt。
4. 將累積一定數量笑話的暫存區內檔案送入儲存區 git commit -m "version1"
5. 重複 2 ~ 4 。即可實現版本控制


參考資料 : https://gitbook.tw/chapters/using-git/working-staging-and-repository.html