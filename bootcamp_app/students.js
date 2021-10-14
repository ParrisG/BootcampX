const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const userParam = process.argv.slice(2);
const uCohortName = userParam[0] || '%';
const uNumRecords = userParam[1] || 5;

pool.query(`
  SELECT students.id AS id, students.name AS name, cohorts.name AS cohort_name
  FROM students
  JOIN cohorts on cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${uCohortName}%'
  LIMIT ${uNumRecords};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));