const mysql = require('mysql');

const connector = () => {
    const connection = mysql.createConnection({
        host: 'www.db4free.net',
        user: 'jhudzik',
        password: 'db_clients',
        database: 'db_clients'
    });

    connection.connect(error => {
        if (error){
            console.error(`Connection to database failed ${(JSON.stringify(error, '\t', 2))}`);
        } else {
            console.info('Connection to database successful');
        }
    });
};

module.exports = connector;
