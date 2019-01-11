const sqlite3 = require('./sqlite3');
const select = require('./select');

const CREATE_TABLE = "CREATE TABLE IF NOT EXISTS SAMPLE(_ID INTEGER, NAME TEXT, AGE INTEGER, CREDIT_SCORE REAL)";

const db = sqlite3.connectToDB();

// sqlite3.createTable(CREATE_TABLE, db);
// sqlite3.dropTable("SAMPLE", db);
// sqlite3.insertDummyDataIntoTable("SAMPLE", db);

async function getPerson(name) {
    try {
        let row = await select.getPersonByName(name, db);
        for(item in row) {
            console.log(`${item}: ${row[item]}`);
        }
        // console.log(row);
    } catch(e) {
        console.log(e);
    }    
}

async function getAllPersons() {
    try {
        let rows = await select.getAllPersons(db);
        for(row of rows) {
            console.log(row);
        }
    } catch(e) {
        console.log(e);
    } 
}

let eachCallback = function(result, n) {
    console.log(result)
    console.log(n);
}

// getPerson("Hugo Conard");
// getAllPersons();
select.getAllPersonsByEach(eachCallback, db);
sqlite3.closeDB(db);