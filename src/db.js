import sqlite3 from 'sqlite3'

const IN_TEST_ENV = process.env.NODE_ENV === 'test';
const dbName = IN_TEST_ENV ? ':memory:' : './labor-time.db';

if (IN_TEST_ENV) {
  sqlite3.verbose();
}

const db = new sqlite3.Database(dbName);

type Time = {
    dateBegin: Date,
    dateEnd: ?Date,
    comment: ?string
};

db.serialize(function() {
  const programacaoSQL = `
  CREATE TABLE if not exists time (
    id integer PRIMARY KEY AUTOINCREMENT,
    dateBegin integer NOT NULL,
    dateEnd integer NULL,
    comment text NULL
  );`;
  db.run(programacaoSQL, function() {
    console.log('DB Ready!');
  });
});

export function addTime({ dateBegin, dateEnd, comment }: Time) {
  const sql = `INSERT into time(dateBegin, dateEnd, comment) VALUES (
    ${dateBegin.getTime()}, ${dateEnd.getTime()}, ${comment}
  )`;
  return new Promise((resolve, reject) => {
    db.run(sql, (err, data) => err ? reject(err) : resolve(data));
  })
}

process.on('SIGINT', function() {
  db.close();
});

export default db;