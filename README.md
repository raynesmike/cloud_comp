# Cloud Computing Final Project
Steps for setup: <br>
   1. Run docker-compose up --build. Leave terminal running. <br>
   2. In a second terminal, navigate (cd) to directory with docker-compose file. <br>
   3. In this second terminal, run docker-machine ip (to get the local ip of your docker instance). <br>
   4. In a web browser, navigate to <<your docker ip>>:8081 (e.g. http://192.168.99.100:8081/). <br>
   5. In upper right corner, enter the database name "test" and press the create database button. <br>
   6. Upon refresh, press the view button on the test database. <br>
   7. In upper right corner, enter the collection name "sample_data" and press create collection button. <br>
   8. In the separate terminal from steps 2 and 3, run docker exec -it mongo bash. <br>
   9. From here, run ./initializeDB.sh. <br>
  10. If step 9 doesn't work, run this command instead: mongoimport --type csv -d test -c sample_data --headerline --drop --file sample_data.csv --authenticationDatabase admin -u 'root' -p 'Rowdy1902' <br>
   
   If you run into any issues with authentication, run docker-compose up --build --force-recreate --renew-anon-volumes.
