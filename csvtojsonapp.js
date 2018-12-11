
const path = require('path')
var csvFilePath=(path.join(__dirname,'data','customer-data.csv'))
const csv=require('csvtojson')
csv()
  .fromFile(csvFilePath)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
   })
 
