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

