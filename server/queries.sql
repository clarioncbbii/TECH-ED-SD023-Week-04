-- //TODO: JUST SOME SQL QUERY EXAMPLES - POPULATE WITH YOUR OWN

-- create a table
CREATE TABLE staff (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, --the id represents each entry uniquely (unique identifier)
  name VARCHAR(255),
  location VARCHAR(255),
  age INT,
  bio TEXT
);

-- our table needs to know what data types we are storing --> constraint

-- create new data into the table

INSERT INTO staff (name, location, age, bio) VALUES 
('Manny','Norwich', 29, 'Software Development instructor with lots of enthusiasm'),
('Bertie', 'Leicester', 100, 'Teaching Assistant with lots of charisma'),
('Tim', 'Norwich', 1000, 'Course director');
-- single quotes for strings!

-- read some data form the table
SELECT name, location, age, bio FROM staff;
SELECT name, bio FROM staff;
SELECT name, location, age, bio FROM staff WHERE location = 'Norwich';