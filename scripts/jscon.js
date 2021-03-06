var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var weatherTowns = request.response;
  populateTowns(weatherTowns);
}

function populateTowns(jsonObj) {
  var towns = jsonObj['towns'];
      
  for (var i = 0; i < towns.length; i++) {
    var myArticle = document.createElement('article');
    console.log(MyArticle);

    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    

    myH2.textContent = towns[i].name;
    myPara1.textContent = 'Town Motto: ' + towns[i].motto;
    myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
    /*myPara3.textContent = 'Current Population: ' + towns[i].averageRainfall;
       
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    
    document.getElementById("weatherstat" + towns[i]).appendChild(myArticle);
  
  */}
 }