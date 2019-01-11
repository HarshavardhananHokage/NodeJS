const sqlite3 = require('sqlite3');
const values = require('./values');

const DROP_QUERY = "DROP TABLE IF EXISTS ";
const MAX = 100;
const MIN = 1;

const dummyTableInserts = {
    sample: {
        query: "INSERT INTO SAMPLE VALUES(?, ?, ?, ?)",
        params: 4
    }
}

function connectToDB() {
    let db = new sqlite3.Database('C:/Harshavardhanan/Workspace/VSCode/React/ReactBook/Node/sqlite3/db/sample.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("DB Connected succesfully");
        }
    })

    return db;
}

function createTable(createTable, db) {
    db.run(createTable, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table created successfully");
        }
    });
}

function dropTable(tableName, db) {
    let dropQuery = `${DROP_QUERY} ${tableName}`;
    db.run(dropQuery, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table dropped successfully");
        }
    })
}

function closeDB(db) {
    db.close((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connection to DB closed successfully");
        }
    })
}

function insertDummyDataIntoTable(tableName, db) {
    let tblName = tableName.toLowerCase();
    let insertQuery = dummyTableInserts[tblName].query;
    for (let i = 0; i < 50; i++) {
        let id = i + 1;
        let name = values.names[i];
        let age = Math.floor((Math.random() * (MAX - MIN + 1) + MIN));
        let crdScore = parseFloat((Math.random() * (MAX - MIN + 1) + MIN).toFixed(2));

        db.run(insertQuery, [id, name, age, crdScore], (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Dummy data inserted successfully");
            }
        })
        console.log(`${name} ${age} ${crdScore}`);
    }
}

module.exports = { connectToDB, createTable, dropTable, closeDB, insertDummyDataIntoTable };