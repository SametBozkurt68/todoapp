import express from 'express';

const app =express()
import dbBaglan from './db.js';

app.get('/todolist' ,async function(req,res){
    const db=await dbBaglan()
    db.query("SELECT * FROM todo",function (error,results,fields){
        res.send(JSON.stringify(results))
    })

})
app.listen(3000)