# Write your MySQL query statement below
SELECT a.Name as Employee FROM Employee AS a, Employee AS b WHERE a.ManagerId = b.Id and a.Salary > b.Salary;