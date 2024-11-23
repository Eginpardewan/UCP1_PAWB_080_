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

// Route POST untuk menambah data pupuk baru
router.post("/", (req, res) => {
    const { name, jumlah, satuan } = req.body;
    const id = dataPupuk.length ? dataPupuk[dataPupuk.length - 1].id + 1 : 1;
    const newPupuk = { id, name, jumlah, satuan };
    dataPupuk.push(newPupuk);
    res.status(201).json(newPupuk);
});

// Route DELETE untuk menghapus data pupuk berdasarkan id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = dataPupuk.findIndex((p) => p.id === parseInt(id));

    if (index !== -1) {
        const deletedPupuk = dataPupuk.splice(index, 1);
        res.json(deletedPupuk[0]);
    } else {
        res.status(404).json({ message: "Pupuk tidak ditemukan" });
    }
});

