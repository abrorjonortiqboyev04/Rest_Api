const { Router }=require('express')
const { addPost, allPost } = require('../controller/post.controller')

const router=Router()

router.post('/add', addPost)
router.get('/all', allPost)
   
module.exports=router 