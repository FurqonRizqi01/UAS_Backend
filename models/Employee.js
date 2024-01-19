// import database
const db = require("../config/database");

// make Employee model
class Employee {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM employees";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data Pegawai yang baru diinsert.
  */

    // promise 1
    static async create(Employee) {
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO employees SET ?";
            db.query(sql, Employee, (err, results) => {
                resolve(results.insertId);
            });
        });


        // promise 2
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    // Mengambil data berdasarkan ID
    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE employees SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });
      
        // select data by id
        const employee = await this.find(id);
        return employee;
      }
      //Menghapus data
    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM employees WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    // Mengambil data berdasarkan nama
    static find(Nama_Pegawai) {
        // lakukan promise, select by nama
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE Nama_Pegawai = ?`;
            db.query(sql, Nama_Pegawai, (err, results) => {
                resolve(results[0]);
            });
        });
    }

}

// export model
module.exports = Employee;