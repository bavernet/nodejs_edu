
CREATE DATABASE test;

USE test;
CREATE TABLE board(
	id		INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title	TEXT,
    content	TEXT,
    writer	VARCHAR(20)
);

INSERT INTO board(title, content, writer) VALUES ('title1', 'content1', 'aaa');
INSERT INTO board(title, content, writer) VALUES ('title2', 'content2', 'bbb');
INSERT INTO board(title, content, writer) VALUES ('title2', 'content2', 'ccc');

