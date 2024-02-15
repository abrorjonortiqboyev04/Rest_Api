const sqlite = require('sqlite3').verbose()
const path = require('path')

const db = new sqlite.Database('./salom.db',  sqlite.OPEN_READWRITE, (error)=>{
    if(error) throw error
})

const table = `
CREATE TABLE post(
    id integer primary key,
    title varchar(50), 
    post varchar(50)
)
` 

db.run(table)