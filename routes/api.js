// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
//menampilkan data
router.get("/employee", EmployeeController.index);
//menambah data
router.post("/employees", EmployeeController.store);
//menngupdate data
router.put("/employees/:id", EmployeeController.update);
//menghapus data
router.delete("/employees/:id", EmployeeController.destroy);
//menampikan data berdasarkan id
router.get("/employees/:id", EmployeeController.show);
// Mengambil data berdasarkan nama
router.get('/employees/search/:name', EmployeeController.search);
// Mencarai data berdasarkan status active
router.get("/employees/status/:Status", EmployeeController.status);


// export router
module.exports = router;