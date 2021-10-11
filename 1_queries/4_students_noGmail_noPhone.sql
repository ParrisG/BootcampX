SELECT name, id, email, cohort_id
FROM students
WHERE NOT (email LIKE '%gmail.com') 
AND phone IS NULL;