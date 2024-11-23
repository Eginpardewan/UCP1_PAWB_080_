import express from "express";

// Buat instance dari express.Router
const router = express.Router();

// Data bibit
const bibit = [
    {
        id: 1,
        name: "Bibit Mangga",
        type: "Buah",
        category: "Buah-Buahan",
    },
    {
        id: 2,
        name: "Bibit Padi",
        type: "Bahan Pangan",
        category: "Tanaman Pangan",
    },
    {
        id: 3,
        name: "Bibit Jagung",
        type: "Buah dan Sayur",
        category: "Tanaman Pangan",
    },
    {
        id: 4,
        name: "Bibit Kelapa",
        type: "Buah",
        category: "Pohon Tinggi",
    },
];

// Route GET untuk mendapatkan semua bibit
router.get("/", (req, res) => {
    res.json(bibit); 
});

// POST Method untuk menambah data bibit baru
router.post("/", (req, res) => {
    const { name, type, category } = req.body;
    if (!name || !type || !category) {
        return res.status(400).json({ message: "Semua field wajib diisi." });
    }
    const id = bibit.length ? bibit[bibit.length - 1].id + 1 : 1;
    const newBibit = { id, name, type, category };
    bibit.push(newBibit);

    res.status(201).json(newBibit);
});

// DELETE Method untuk menghapus data bibit berdasarkan id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = bibit.findIndex((b) => b.id === parseInt(id));

    if (index !== -1) {
        const deletedBibit = bibit.splice(index, 1);
        res.json(deletedBibit[0]);
    } else {
        res.status(404).json({ message: "Bibit tidak ditemukan" });
    }
});

// PUT Method untuk memperbarui data bibit berdasarkan id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, type, category } = req.body;
    const bibitToUpdate = bibit.find((b) => b.id === parseInt(id));

    if (bibitToUpdate) {
        bibitToUpdate.name = name;
        bibitToUpdate.type = type;
        bibitToUpdate.category = category;
        res.json(bibitToUpdate);
    } else {
        res.status(404).json({ message: "Bibit tidak ditemukan" });
    }
});

export default router;