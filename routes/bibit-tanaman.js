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
    const id = bibit.length ? bibit[bibit.length - 1].id + 1 : 1;
    const newBibit = { id, name, type, category };
    bibit.push(newBibit);
    res.status(201).json(newBibit);
});

