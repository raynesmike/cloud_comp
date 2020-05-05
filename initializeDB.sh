#!/bin/bash

# Import CSV
mongoimport --type csv -d test -c sample_data --headerline --drop --file sample_data.csv --authenticationDatabase admin -u 'root' -p 'Rowdy1902'