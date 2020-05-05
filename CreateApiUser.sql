
CREATE USER 'api_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rowdy1902';
GRANT ALL PRIVILEGES ON * . * TO 'api_user'@'localhost';
CREATE USER 'api_user'@'%' IDENTIFIED WITH mysql_native_password BY 'Rowdy1902';
GRANT ALL PRIVILEGES ON *.* TO 'api_user'@'%';