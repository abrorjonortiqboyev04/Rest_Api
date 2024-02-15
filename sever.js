const express=require('express')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/post', require('./router/post.router'))


app.listen(3001,()=>{
    console.log(`Server running on port: 3001`)
})