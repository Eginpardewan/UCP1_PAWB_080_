import express from 'express'; // Mengimpor express
import bodyParser from 'body-parser'; // Mengimpor body-parser untuk parsing request body
import pupukRouter from './routes/pupuk.js'; // Mengimpor router untuk pupuk
import bibitRouter from './routes/bibit.js'; // Mengimpor router untuk bibit
import todoRouter from './routes/todo.js'; // Mengimpor router untuk todo

// Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 8000; // Menentukan port yang digunakan

// Middleware untuk mem-parsing request body dalam format JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan router yang telah dibuat untuk masing-masing resource
app.use('/pupuk', pupukRouter);  // Menyambungkan rute untuk pupuk
app.use('/bibit', bibitRouter);  // Menyambungkan rute untuk bibit
app.use('/todos', todoRouter);   // Menyambungkan rute untuk todo

// Endpoint utama (root)
app.get('/', (req, res) => {
  res.send('Selamat datang di API Pertanian dan To-Do List!');
});

// Menangani kasus jika rute tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint tidak ditemukan' });
});

// Menjalankan server pada port yang telah ditentukan
app.listen(port, () => console.log(`Server berjalan di port: http://localhost:${port}`));