SELECT assignments.id as id, name, day, chapter, count(assistance_requests.*) AS total_requests
FROM assistance_requests
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;
