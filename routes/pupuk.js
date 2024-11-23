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

