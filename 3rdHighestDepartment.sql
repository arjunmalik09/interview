// get Departments, count of students
// group by Departments
// and students
// order by count
// return 3rd highest count
WITH (
    SELECT department_id, count(department_id) as count
    FROM students
    GROUP BY department_id
) as temp
SELECT *
FROM department, temp
JOIN department.id = temp.department_id
ORDER BY temp.count
LIMIT 1 OFFSET 3