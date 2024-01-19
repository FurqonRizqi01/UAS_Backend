// import Model Employee
const Employee = require("../models/Employee")

// buat class EmployeeController
class EmployeeController {
// buat fungsi
  async index(req, res) {
      // TODO 4: Tampilkan data employee
      const employee = await Employee.all();

      const data = {
          message: "Menampilkan data pegawai",
          data: employee
      };

      res.status(200).json(data);
  }

  async store(req, res) {
      /**
       * memanggil method create.
       * Method create mengembalikan data yang baru diinsert.
       * Mengembalikan response dalam bentuk json.
       */

      const employee = await Employee.create(req.body);
      const data = {
          message: "Menambahkan data pegawai",
          data: employee,
      };

      res.status(201).json(data);
  }


  async update(req, res) {
      /**
       * check id employee
       * jika ada, lakukan update
       * jika tidak, kirim data tidak ada
       */
      const { id } = req.params;

      const employee = await Employee.find(id);

      if (employee) {
          // update data
          const employeeUpdated = await Employee.update(id, req.body);
          const data = {
              message: "Mengupdate data pegawai",
              data: employeeUpdated,
          };

          res.status(200).json(data);
      }
      else {
          // kirim data tidak ada
          const data = {
              message: "Data tidak ada",
          };

          res.status(404).json(data);
      }
  }

  async destroy(req, res) {
      const { id } = req.params;

      /**
       * cari id
       * jika ada, hapus data
       * jika tidak, kirim data tidak ada
       */

      const employee = await Employee.find(id);

      if (employee) {
          // Menghapus data
          await Employee.delete(id);
          const data = {
              message: "Menghapus data pegawai",
          };

          res.status(200).json(data);
      }
      else {
          // data tidak ditemukan
          const data = {
              message: "Data tidak ditemukan",
          };

          res.status(404).json(data);
      }
  }

  async show(req, res) {
      /**
       * cari id
       * jika ada, kirim datanya
       * jika tidak, kirim data tidak ada
       */
      const { id } = req.params;

      const employee = await Employee.find(id);

      if (employee) {
          const data = {
              message: "Menampilkan detail data pegawai",
              data: employee,
          };

          res.status(200).json(data);
      }
      else {
          const data = {
              message: "Data tidak ada",
          };

          res.status(404).json(data);
      }

  }

  async search(req, res) {
    /**
     * cari id
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const { Nama_Pegawai } = req.params;

    const employee = await Employee.find(Nama_Pegawai);

    if (employee) {
        const data = {
            message: "Menampilkan detail data pegawai berdasarkan nama",
            data: employee,
        };

        res.status(200).json(data);
    }
    else {
        const data = {
            message: "Data tidak ditemukan",
        };

        res.status(404).json(data);
    }

}

  
}


// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
