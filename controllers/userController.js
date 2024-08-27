const user = require('../models/usersModel'); // alterado para 'user'

const getUsers = (req, res) => {
    user.getAllUsers((err, results) => { // alterado para 'user'
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    user.createUser(name, email, (err, result) => { // alterado para 'user'
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: result.insertId, name, email });
        }
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    user.updateUser(id, name, email, (err, result) => { // alterado para 'user'
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "User not found" });
        } else {
            res.json({ message: "User updated successfully" });
        }
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    user.deleteUser(id, (err, result) => { // alterado para 'user'
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "User not found" });
        } else {
            res.json({ message: "User deleted successfully" });
        }
    });
};

module.exports = {
    getUsers,
    createUser, // corrigido para 'createUser'
    updateUser,
    deleteUser
};
