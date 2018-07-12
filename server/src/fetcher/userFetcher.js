const connection = require('../db/connector');

const getUser = (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM db_clients.users WHERE user_id = ?';
    connection.query(query, [userId], (err, rows, fields) => {
        res.json(rows);
    });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM db_clients.users WHERE user_id = ?';
    connection.query(query, [userId], (err, rows, fields) => {
        if (err) {
            console.error('Error while deleting user from database', JSON.stringify(err, '\t', 2));
        } else {
            console.info(`User with id ${userId} successfully deleted.`);
        }
    });
};

module.exports = {
    getUser, deleteUser
};