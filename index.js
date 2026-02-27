require('dotenv').config();
const express=require('express');
const path=require('path');
const pug=require('pug');
const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/all',(req, res)=>{
    const subjects=['DevOps','Cloud Computing','SPM','RES','CNS','Garo'];
    res.render('sample.pug', {sub:subjects});
});
module.exports=app;