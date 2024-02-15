const sqlite=require('sqlite3').verbose()
const path=require('path')

const db = new sqlite.Database(path.resolve(__dirname, '..', 'database', 'salom.db'),
 sqlite.OPEN_READWRITE, err=>{
    if(err) throw err
})

const addPost = (req,res)=>{
    db.run(`insert into post(title, post) values (?, ?)`, [req.body.title, req.body.post])
    res.send("Malumot qo'shildi")
}

const allPost = (req, res)=>{
    const data = db.all(`select * from post`, [], (err, rows)=>{
        if(err) throw err
        res.json(rows)
    })
}



module.exports = {
    addPost,
    allPost
}