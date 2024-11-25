import express from "express";

// Buat instance dari express.Router
const router = express.Router();

// Data pupuk
const dataPupuk = [
    {
        id: 1,
        name: "Urea",
        jumlah: "50",
        satuan: "kg",
    },
    {
        id: 2,
        name: "NPK",
        jumlah: "50",
        satuan: "kg",
    },
    {
        id: 3,
        name: "Pupuk Kompos",
        jumlah: "50",
        satuan: "kg",
    },
    {
        id: 4,
        name: "Pupuk Kandang",
        jumlah: "50",
        satuan: "kg",
    },
];

// Route GET untuk mendapatkan semua pupuk
router.get("/", (req, res) => {
    res.json(dataPupuk);
});

// Menambahkan pupuk baru
router.post("/", (req, res) => {
    const { name, jumlah, satuan } = req.body;
  
    if (!name || !jumlah || !satuan) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }
  
    const newPupuk = {
      id: pupuk.length + 1, // ID otomatis
      name,
      jumlah,
      satuan,
    };
  
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk);
  });
  
  // Mengupdate pupuk berdasarkan ID
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, jumlah, satuan } = req.body;
  
    const index = pupuk.findIndex((item) => item.id === parseInt(id));
  
    if (index === -1) {
      return res.status(404).json({ message: "Pupuk tidak ditemukan" });
    }
  
    if (!nama_pupuk || !nutrisi || !tipe_pupuk) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }
  
    // Update data
    pupuk[index] = { ...pupuk[index], nama_pupuk, nutrisi, tipe_pupuk };
    res.json(pupuk[index]);
  });
  
  // Menghapus pupuk berdasarkan ID
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = pupuk.findIndex((item) => item.id === parseInt(id));
  
    if (index === -1) {
      return res.status(404).json({ message: "Pupuk tidak ditemukan" });
    }
  
    // Hapus data dari array
    pupuk.splice(index, 1);
    res.status(204).send(); // Tidak ada konten yang dikembalikan
  });
  
  export default router;