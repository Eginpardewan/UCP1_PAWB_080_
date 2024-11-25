import express from "express";
import { type } from "os";

// Buat instance dari express.Router
const router = express.Router();

// Data bibit
const bibit = [
    {
        id: 1,
        name: "Bibit Mangga",
        tipe: "Buah",
        category: "Buah-Buahan",
    },
    {
        id: 2,
        name: "Bibit Padi",
        tipe: "Bahan Pangan",
        category: "Tanaman Pangan",
    },
    {
        id: 3,
        name: "Bibit Jagung",
        tipe: "Buah dan Sayur",
        category: "Tanaman Pangan",
    },
    {
        id: 4,
        name: "Bibit Kelapa",
        tipe: "Buah",
        category: "Pohon Tinggi",
    },
];

// Route GET untuk mendapatkan semua bibit
router.get("/", (req, res) => {
    res.json(bibit); 
});

// Menambahkan bibit baru
router.post("/", (req, res) => {
    const { name, tipe, category } = req.body;
  
    if (!name || !tipe || !category) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }
  
    const newBibit = {
      id: bibit.length + 1, // ID otomatis
      name,
      tipe,
      category,
    };
  
    bibit.push(newBibit);
    res.status(201).json(newBibit);
  });
  
  // Mengupdate bibit berdasarkan ID
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, tipe, category } = req.body;
  
    const index = bibit.findIndex((item) => item.id === parseInt(id));
  
    if (index === -1) {
      return res.status(404).json({ message: "Bibit tidak ditemukan" });
    }
  
    if (!name || !tipe || !category) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }
  
    // Update data
    bibit[index] = { ...bibit[index], name, tipe, category };
    res.json(bibit[index]);
  });
  
  // Menghapus bibit berdasarkan ID
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    const index = bibit.findIndex((item) => item.id === parseInt(id));
  
    if (index === -1) {
      return res.status(404).json({ message: "Bibit tidak ditemukan" });
    }
  
    // Hapus data dari array
    bibit.splice(index, 1);
    res.sendStatus(204);
  });
  
  export default router;