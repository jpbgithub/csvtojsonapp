const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')
const uuidv1 = require('uuid/v1')
var csvFilePath=(path.join(__dirname,'data','customer-data.csv'))
var jsonFileName=(path.join(__dirname,'data','customer-data.json'))

csv()
  .fromFile(csvFilePath)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
//Added functionality to write to JSON file
     fs.writeFileSync(path.join(__dirname, 'data', 'customer-data.json'), JSON.stringify(jsonArrayObj, null, "\t"), 'utf8', (error) => {
      if (error) {
          console.log("error: " + error);
          return console.error(error);
      } else {
          console.log("Writing of the json data into the file completed.");
      }
})
   })
 
