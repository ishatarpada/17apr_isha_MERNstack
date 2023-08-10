USE temp ;

CREATE TABLE Faculty
(
   fid int(5) ,
   fname varchar(10) 
);

INSERT INTO Faculty (fid , fname )
VALUES ('101' , 'Nidhi' ),
('102' , 'Ridhi' ),
('103' , 'Sidhi' );

DESC Faculty ;

SELECT *FROM Faculty ;
SELECT *FROM student ;

ALTER TABLE `Faculty` ADD FOREIGN KEY (`sid`) REFERENCES `student` (`sid`);

USE temp ;

CREATE TABLE course
(
	id int(5),
    time timestamp(6),
    name varchar(20)
);

DELIMITER $$
	CREATE TRIGGER `mytrig` AFTER INSERT ON `course` FOR EACH ROW 
    
    BEGIN
    
    	INSERT into `course` SET id = new.sid ;
    	
    END$$
    
INSERT INTO course (id , name )
VALUES ('1' , 'isha');

SELECT *FROM course;



