/* CREATE database:-    
    syntex:-
    CREATE DATABASE database_name;
*/

CREATE DATABASE temp;

/*use database:-
	syntex:
    USE database_name ;
*/
USE temp ;

/*create table:-
	syntex:-
    CREATE TABLE table_name (
    column1 datatype(range),
    column2 datatype(range),
    column3 datatype(range),
   ....
);
*/

CREATE TABLE student 
(
   sid int(5)  PRIMARY KEY  ,
   sname varchar(10),
   sphone int(20) ,
   smail varchar(20)
);

 /*Add primary using alter:-
					-> uniquely identifies each record in a table.
                    -> Primary keys must contain UNIQUE values, and cannot contain NULL values.
					syntex:-
							ALTER TABLE TABLE_NAME ADD PRIMARY KEY (`COLUMN_name`);
*/
ALTER TABLE student ADD PRIMARY KEY(sphone);

/* 	insert query: insert the data in table
		syntex:-
        INSERT INTO table_name (column1, column2, column3, ...)
		VALUES (value1, value2, value3, ...),
			   (value1, value2, value3, ...),
			   (value1, value2, value3, ...),
			   (value1, value2, value3, ...);
    
*/
INSERT INTO student (sid , sname , sphone ,  smail)
VALUES ( '1' , 'isha' , '6354324255' , 'isha@gmail.com'),
 ( '2' , 'disha' , '6351299108' , 'disha@gmail.com'),
 ( '3' , 'manshi' , '7359380902' , 'manshi@gmail.com');
 
 /*Desc query :-See the structure of the table_name  
    syntex:-
		DESC table_name; 
 DESC student ;
 */
 
 /*Add unique key:-
		-> all values in a column are different.
		syntex:-
			ALTER TABLE TABLE_NAME ADD UNIQUE KEY (`COLUMN_name`); 
 ALTER TABLE student ADD UNIQUE KEY(sid);
 */
 
 /*upadate query:- modify the existing records in a table.
					syntex:
							UPDATE table_name
							SET column1 = value1, column2 = value2, ...
							WHERE condition;                            
	UPDATE student SET sname = 'Isha'  WHERE sid = 1; 	
 */
 
 /*SELECT query :- show the database 
			syntex:-
				-> all columns are show.
					SELECT * FROM table_name ;
				-> specific column is show .
					SELECT sid FROM table_name ;
            
 */ 
 SELECT * FROM student;
 SELECT sid FROM student;
 
 /*Drop Table:- To delete the table
			syntex:-
				DROP TABLE `TABLE_NAME`;
 */
 DROP TABLE student ;
 
  /*Drop database:- To delete the database
			syntex:-
				DROP DATABASE `database_name`;
 */
DROP DATABASE temp ;

CREATE DATABASE temp;
USE temp ;
CREATE TABLE student 
(
   sid int(5)  PRIMARY KEY  ,
   sname varchar(10),
   sphone int(10) ,
   smail varchar(20)
);
INSERT INTO student (sid , sname ,   smail)
VALUES ( '1' , 'isha' ,  'isha@gmail.com'),
 ( '2' , 'disha' ,  'disha@gmail.com'),
 ( '3' , 'manshi' ,  'manshi@gmail.com');

/*Add AUTO_INCREMENT:-
			 ->AUTO_INCREMENT column default value must be not_null 
             synetx:- 
					ALTER TABLE `table_name` CHANGE `old_column_name` `new_column_name` data_type (size)  AUTO_INCREMENT;
   
ALTER TABLE `student` CHANGE `sid` `sid` int (5)  AUTO_INCREMENT;
*/

/* COUNT :-number of rows count.
		syntex:- 
			SELECT COUNT(column_name)
			FROM table_name
 
 */
 SELECT COUNT(sid) FROM student;
 
 /* AVG :-number of rows count.
		syntex:- 
			SELECT AVG(column_name)
			FROM table_name
 
 */
 SELECT AVG(sid) FROM student;
 
 /* MIN :-minimum number of rows .
		syntex:- 
			SELECT AVG(column_name)
			FROM table_name
 
 */
 SELECT MIN(sid) FROM student;
 
  /* MAX :-maximum number of rows .
		syntex:- 
			SELECT AVG(column_name)
			FROM table_name
 
 */
 SELECT MAX(sid) FROM student;
 
