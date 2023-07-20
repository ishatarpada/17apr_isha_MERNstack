USE data;

CREATE TABLE info
(
	FirstName VARCHAR (20),
    LastName VARCHAR (20),
    Address VARCHAR(100),
    City VARCHAR(20),
    Age INT(5)
);

INSERT INTO info (FirstName , LastName , Address , City , Age)
VALUES ('Mickey' , 'Mouse' , '123Fantasy Way' , 'Anaheim' , '73'),
('Bat' , 'Man' , '321Cavern Ave' , 'gotham' , '54'),
('Wonder' , 'Women' , '987Truth Way' , 'Paradise' , '39'),
('Donald' , 'Duck' , '555Quck Strat' , 'Mallard' , '65'),
('Bugs' , 'Bunny' , '567Carrot Street' , 'Rascal' , '58'),
('Wiley' , 'Coyote' , '999Acme Way' , 'Canyon' , '61'),
('Cat' , 'Women' , '234Purrfect Street' , 'Hairball' , '32'),
('Tweety' , 'Bird' , '543' , 'Itotltaw' , '28');

SELECT *FROM info;