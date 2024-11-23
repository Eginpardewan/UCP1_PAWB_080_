import express from "express";

const router = express.Router();

const todos = [
    { id: 1, task: "Belajar Express.js", completed: false },
    { id: 2, task: "Membuat API To-Do", completed: true },
    { id: 3, task: "Pupuk Kandang", jumlah: 50, satuan: "kg", completed: true}
];

router.get("/", (req, res) => {
    res.json(todos);
});

router.post("/", (req, res) => {
    const { task } = req.body;
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id, task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((todo) => todo.id === parseInt(id));

    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1);
        res.json(deletedTodo[0]);
    } else {
        res.status(404).json({ message: "To-Do tidak ditemukan" });
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    const todoToUpdate = todos.find((todo) => todo.id === parseInt(id));

    if (todoToUpdate) {
        todoToUpdate.task = task;
        todoToUpdate.completed = completed;
        res.json(todoToUpdate);
    } else {
        res.status(404).json({ message: "To-Do tidak ditemukan" });
    }
});

export default router;