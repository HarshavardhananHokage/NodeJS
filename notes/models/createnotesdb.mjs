import sqlite3 from 'sqlite3';

const NOTES_TABLE = 'CREATE TABLE IF NOT EXISTS notes (notekey VARCHAR(255), title VARCHAR(255), body TEXT);';

const DB_PATH = './db/sqlite3/notes.sqlite3';

function createDBTable() {
    var db = new sqlite3.Database(DB_PATH, (err) => {
        if(err) {
            throw err;
        }
        else {
            console.log("Connected to db successfully");
        }
    });

    db.run(NOTES_TABLE, (err) => {
        if(err) {
            throw err;
        }
        else {
            console.log("Table created successfully");
        }
    })
}

createDBTable();