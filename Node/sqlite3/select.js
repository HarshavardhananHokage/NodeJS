const sqlite3 = require('./sqlite3');

const SELECT_QUERY = 'SELECT * FROM SAMPLE WHERE NAME = ?';
const SELECT_ALL = 'SELECT * FROM SAMPLE ORDER BY _ID';

function getPersonByName(name, db) {
    return new Promise((resolve, reject) => {
        db.get(SELECT_QUERY, [name], (err, row) => {
            if (err) {
                reject(err);
            }
            resolve(row);
        })
    })
}

function getAllPersons(db) {
    return new Promise((resolve, reject) => {
        db.all(SELECT_ALL, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    })
}

function getAllPersonsByEach(callback, db) {
    let results = [];
    db.each(SELECT_ALL, (err, row) => {
        if (err) {
            throw err;
        }
        results.push(row);
    }, (err, n) => {
        results.push(n);
        callback(results, n);
    })
}

module.exports = { getPersonByName, getAllPersons, getAllPersonsByEach };