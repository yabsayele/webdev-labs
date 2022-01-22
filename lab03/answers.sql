-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
FROM users ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url
FROM posts
WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id
FROM posts 
WHERE user_id=26 or user_id=12;



-- Exercise 6

SELECT COUNT(*) FROM posts;


-- Exercise 7 

SELECT COUNT(*), user_id FROM comments GROUP BY comments, user_id ORDER BY COUNT(*) DESC;


-- Exercise 8

SELECT username, first_name, last_name FROM users INNER JOIN posts ON posts.user_id=user.id WHERE user_id=26 or user_id=12;


-- Exercise 9

SELECT user_id FROM posts INNER JOIN following ON posts.user_id=following.user_id WHERE user_id=26;


-- Exercise 10




-- Exercise 11

INSERT INTO bookmarks(user_id, post_id) VALUES (26,219); 
INSERT INTO bookmarks(user_id, post_id) VALUES (26,220); 
INSERT INTO bookmarks(user_id, post_id) VALUES (26,221);


-- Exercise 12

DELETE FROM bookmarks(user_id, post_id) WHERE (26,219);
DELETE FROM bookmarks(user_id, post_id) WHERE (26,220);
DELETE FROM bookmarks(user_id, post_id) WHERE (26,220);


-- Exercise 13

UPDATE users SET email = "cyoung2022@gmail.com" WHERE user_id=26;



-- Exercise 14
