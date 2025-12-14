-- //TODO: SQL queries used to build DB table

-- create a table:
CREATE TABLE chopandnyam (  
    --the id represents each entry uniquely (=unique identifier)
    -- SQL id values are UNIQUE; meaning if a row is deleted, that id is gone forever
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  name VARCHAR(255),
  location VARCHAR(255),
  review TEXT,
  rating INT
);
  
-- our table needs to know what data types we are storing --> constraint:
-- hence the data types e.g. INT/TEXT/VARCHAR/etc.

-- create new data into the table (DUMMY DATA for testing):
INSERT INTO chopandnyam (name, location, review, rating) VALUES 
('Nene','Leicester', 'It was a pleasure visiting this location of Chop&Nyam...100% RECOMMEND - I will deffo be back for those eats!', 9)

-- SQL does not like double quotes! Use single quotes or backticks for strings!

-- read some data from the table: *THIS IS WHAT WE WANT THE SERVER TO DO - see folder 05 in week 4*
SELECT name, location, review, rating FROM chopandnyam;

-- a few other tests for functionality
SELECT name, review FROM chopandnyam;
SELECT name, location, review, rating FROM chopandnyam WHERE rating >= 8;
SELECT name FROM chopandnyam WHERE name = 'Stranger';

-- We usually do not select IDs to be revealed to the user (= sensitive data)



