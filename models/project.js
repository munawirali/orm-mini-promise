const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.db')

class project {
  constructor() {

  }
  static getAll(){
    let promise = new Promise ((resolve,reject)=>{
      db.all(`SELECT * FROM project`,(err,rows)=>{
        if (!err) {
          resolve(rows);
        } else {
          reject(err);
        }
      })
    })
    return promise;
  }
  static add(params){
    let promise = new Promise ((resolve,reject)=>{
      db.run(`insert into project(nama,status) values('${params.nama}','${params.status}')`,(err,rows)=>{
        if (!err) {
          resolve('Data Berhasil disimpan');
        } else {
          reject(err);
        }
      })
    })
    return promise;
  }
}

module.exports = project;
