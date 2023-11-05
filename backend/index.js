const express = require('express');
const cors = require('cors');
const router = require('./src/routes/tasks.router');

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.static('www'));//使用静态文件目录解决node运行前端的问题
app.use('/api',router);

const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})