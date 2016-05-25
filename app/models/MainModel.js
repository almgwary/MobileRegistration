


function MainModel() {
  // Creates and initialize an Array of countries for showing implementation of a data-table (location report data table in this case)
  this.data =
  {
      "colors": [
      "white",
      "black",
      "gold"
      ],
      "screens": [
      "4",
      "5",
      "6"
      ],
      "features": [
      "Dual SIM",
      "NFC",
      "4G"
      ],
      "brands": [
      "Sony",
      "Samsung",
      "Apple",
      "Nokia",
      "LG"
      ],
      "memory": [
      "16GB",
      "32GB",
      "64GB",
      "128GB"
      ],
      "mobile_list": [
      {
          "id":"0",
          "model": "K0",
          "manufacture_year": 2012,
          "brand": "Nokia",
          "memory": "20G",
          "features": [
          "Dual SIM",
          "NFC",
          "4G"
          ],
          "screen": 2,
          "color": "black"
      },{
          "id":"1",
          "model": "K0",
          "manufacture_year": 2012,
          "brand": "Nokia",
          "memory": "20G",
          "features": [
          "Dual SIM",
          "NFC",
          "4G"
          ],
          "screen": 2,
          "color": "black"
      },
      {
          "id":"2",
          "model": "JS",
          "manufacture_year": 2016,
          "brand": "Samsung",
          "memory": "20G",
          "features": [
          "Dual SIM",
          "NFC",
          "4G"
          ],
          "screen": 2,
          "color": "Red"
      },
      {
          "id":"3",
          "model": "Oi",
          "manufacture_year": 2015,
          "brand": "Sony",
          "memory": "20G",
          "features": [
          "Dual SIM",
          "NFC",
          "4G"
          ],
          "screen": 2,
          "color": "black"
      },
      {
          "id":"4",
          "model": "Ld",
          "manufacture_year": 2014,
          "brand": "Nokia",
          "memory": "20G",
          "features": [
          "Dual SIM",
          "NFC",
          "4G"
          ],
          "screen": 2,
          "color": "black"
      }
      ]
  }
  ;

  this.today = [];

  var calculateSplit = function(numValue,totViews) {
    var max = totViews;
    var result = [];
    for (var i = 0; i < numValue - 1; i++) {
        result[i] = Math.floor(Math.random()*(max+1));
        max -= result[i];
    }
    result[numValue - 1] = max;
    return result;
};

var dataPoints  = 24;
var step        = 3600000;
var now         = new Date();
var msecs       = now.getTime();
var DailyCount = 0;
var item, index;

for (index in this.countries) {
    item = this.countries[index];
    item.views = Math.floor(Math.random()*9001);
    DailyCount += item.views;
};
 

 

}


