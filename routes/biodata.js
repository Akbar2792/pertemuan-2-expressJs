const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
 const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
 if (!nama || !tempatLahir || !tanggalLahir || !alamat) {
  return res.status(400).send('Semua field harus diisi');
 }

 return res.status(200).send({ nama, tempatLahir, tanggalLahir, alamat });
});

router.get('/', (req, res) => {
 const { nama, tempatLahir, tanggalLahir, alamat } = req.query;
 if (!nama || !tempatLahir || !tanggalLahir || !alamat) {
  return res.status(400).send('Harap lengkapi parameter URL');
 }

 const biodata = { nama, tempatLahir, tanggalLahir, alamat };

 return res.status(200).send(biodata);
});

module.exports = router;