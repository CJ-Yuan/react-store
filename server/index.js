const express = require('express');
// 解决跨域
const cors = require("cors")
const app = express();
const router = require('./roudex')

app.use(cors())

app.use("/api",router)

app.listen(5566,()=>{
    console.log('服务器运行在5566端口')
})