

CREATE TABLE IF NOT EXISTS c_functions(
function_id INT NOT NULL,
name VARCHAR(50) NOT NULL
/*Note: Make this once */
);

CREATE TABLE IF NOT EXISTS conditions(
function_id INT NOT NULL,
increm INT NOT NULL,
user_id INT NOT NULL,
return_cond INT,
methods VARCHAR(50),
special_chars VARCHAR(50)
/*table specific id
//incrementor
//function_id (to link tables)
//return condition
//methods inside
//condition_id*/

/*NOTE: Not all of these tables will be the same. They will require specific 
information based on what each of the statements do. We have to do this for all
statements.*/
);

CREATE TABLE user_info(
user_id INT NOT NULL,
var1 VARCHAR(50) NOT NULL,
operator VARCHAR(50) NOT NULL,
var2 VARCHAR(50) NOT NULL
/*NOTE: These are specific to each kind of user session.*/
);


INSERT INTO c_functions(function_id, name)
VALUES(1, 'for'),
(2, 'if'),
(3, 'while');

INSERT INTO conditions(function_id, increm, user_id, return_cond)
VALUES(1, 2, 1, 4),
(1, 3, 1, 6),
(1, 1, 2, 10);

INSERT INTO user_info(user_id, var1, operator, var2)
VALUES(1, 'counter1', '<=', 'counter2'),
VALUES(1, 'temp1', '==', 'temp2'),
VALUES(2, 'x', '&&', 'y'); 