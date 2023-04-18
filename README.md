# Finance Tracker - Server

## Introduction
Finance Tracker 是家庭財務紀錄小幫手。使用者可以將支出項目與金額紀錄在此系統上，系統會進行金額統計。

本專案採前後分離的方式進行開發，後端使用 Node.js 搭配 Express 框架進行開發，資料庫為 MongoDB (NoSQL Database)。
- [API 文件連結]()
- [前端 repo 連結](https://github.com/rubylo718/finance-tracker-client)。

## Demo
[Live Demo 連結]()

### 現有功能
#### 使用者認證
- 使用者可用 email 註冊帳號。
- 註冊後使用 email 與密碼進行登入。
- 登入後使用 jwt 進行認證，token 有效期間內不需重複登入。
- 登出。

#### 記錄
- 使用者可以新增支出紀錄，包含項目名稱與金額。
- 使用者可看到目前資料庫內所有記錄，以及總金額。
- 使用者可以刪除記錄。RE

### 開發中
#### 記錄
- 使用者變更帳號名稱、密碼。
- 使用者更新支出記錄。
- 支出記錄可依類別進行統計。

#### 管理者
- 管理者可以看到維護支出類別清單。

#### 其他
- 支出類別、操作選項 icon 美化。
- 導入 chart.js 產出統計圖表。

## Built with
- Runtime Environment: Node.js @16.14.2
- Back-end Framework: Express @4.18.2
- Database: MongoDB, mongoose
- Authorization: Passport, Passport-jwt, jsonwebtoken
- Environment Variables Management: dotenv
- API docs: Swagger-autogen, Swagger-ui-express

## Author
Ruby Lo