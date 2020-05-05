# Cloud Computing Final Project
Steps for setup: <br>
   1. Run docker-compose up --build. Leave terminal running. <br>
   2. In a second terminal, navigate (cd) to directory with docker-compose file. <br>
   
   ## Creating Database and Collection from Mongo-Express
   1. In this second terminal, run docker-machine ip (to get the local ip of your docker instance). <br>
   2. In a web browser, navigate to <<your docker ip>>:8081 (e.g. http://192.168.99.100:8081/). <br>
   3. In upper right corner, enter the database name "test" and press the create database button. <br>
   4. Upon refresh, press the view button on the test database. <br>
   5. In upper right corner, enter the collection name "sample_data" and press create collection button. <br>
   
   ## Creating Database and Collection from bash
   1. In the separate terminal from step 2, run docker exec -it mongo bash. <br>
   2. From here, run mongo admin -u root -p Rowdy1902
   3. Inside of mongo shell (which should have launched), run use test (creates test database). Run show dbs to verify. <br>
   4. run db.createCollection("sample_data"). System should display "{ "ok" : 1 }" to verify. <br>
   5. From here, type exit to leave the mongo shell. <br>
   6. run ./initializeDB.sh. <br>
   7. If step 6 doesn't work, run this command instead: mongoimport --type csv -d test -c sample_data --headerline --drop --file sample_data.csv --authenticationDatabase admin -u 'root' -p 'Rowdy1902' <br>
   
   ## Debugging
   1. run docker-compose rm -v <br>
   2. run docker-compose up --build --force-recreate --renew-anon-volumes <br>
