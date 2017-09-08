const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.db')

// db.serialize(function () {
//   db.run(`CREATE TABLE suvervisor (id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARHCAR(100), email VARCHAR(100))`,(err)=>{
//     console.log('tabel project berhasil dibuat');
//   })
// })
db.serialize(function () {
  db.run(`CREATE TABLE project (id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARHCAR(100), status VARCHAR(50))`,(err)=>{
    console.log('table suvervisor berhasil dibuat');
  })
})
// db.serialize(function () {
//   db.run(`CREATE TABLE engineer (id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARHCAR(100), email VARCHAR(100))`,(err)=>{
//     console.log('table engineer berhasil dibuat');
//   })
// })
