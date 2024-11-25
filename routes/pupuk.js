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
        id: dataPupuk.length + 1, // ID otomatis
        name,
        jumlah,
        satuan,
    };

    dataPupuk.push(newPupuk); // Tambahkan ke dataPupuk
    res.status(201).json(newPupuk);
});

// Mengupdate pupuk berdasarkan ID
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, jumlah, satuan } = req.body;

    const index = dataPupuk.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Pupuk tidak ditemukan" });
    }

    if (!name || !jumlah || !satuan) {
        return res.status(400).json({ message: "Semua field harus diisi" });
    }

    // Update data
    dataPupuk[index] = { ...dataPupuk[index], name, jumlah, satuan };
    res.json(dataPupuk[index]);
});

// Menghapus pupuk berdasarkan ID
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const index = dataPupuk.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Pupuk tidak ditemukan" });
    }

    // Hapus data dari array
    dataPupuk.splice(index, 1);
    res.sendStatus(204);
});

export default router;
