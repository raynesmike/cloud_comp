FROM mysql/mysql-server:latest

ENV ACCEPT_EULA=Y
ENV MYSQL_DATABASE=test
ENV MYSQL_ROOT_PASSWORD=Rowdy1902

COPY CreateApiUser.sql /docker-entrypoint-initdb.d/
COPY CreateTable.sql /
COPY InsertMySQL.sql /
COPY sample_data.csv /

#docker-entrypoint-initdb.d/

EXPOSE 3306 33060

CMD mysqld