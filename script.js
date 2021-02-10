var garfcoin = 0;
var secritaries = 0;
var gametime = 0;
var ads = 0;
var offices = 0;
var jims = 0;
var mouseStrength = 1;
var PCs = 0;
var phishingStrength = 1;
var ransomAmmount = 0;
var ddosTime = 0;

function garfClick(number){
  garfcoin += number;
  document.getElementById("counter").innerHTML = garfcoin;
};

function mouseClick(){
  garfcoin += mouseStrength;
  document.getElementById("counter").innerHTML = garfcoin;
}

function subCoin(cost){
  if(cost < garfcoin){
    garfcoin = garfcoin - cost;
  } else {
    garfcoin = 0;
  }
  document.getElementById('counter').innerHTML = garfcoin;
}

function newSec(){
  var cost = Math.floor(10 * Math.pow(1.1, secritaries));
  if(garfcoin >= cost){
    secritaries = secritaries + 1;
    subCoin(cost);
    document.getElementById('secritaries').innerHTML = secritaries;
  }
  var nextCost = Math.floor(10 * Math.pow(1.1, secritaries));
  document.getElementById('secretaryCost').innerHTML = nextCost;
};

function newAd(){
  var cost = Math.floor(100 * Math.pow(1.1, ads));
  if(garfcoin >= cost){
    ads = ads + 1;
    subCoin(cost);
    document.getElementById('ads').innerHTML = ads;
  }
  var nextCost = Math.floor(100 * Math.pow(1.1, ads));
  document.getElementById('adCost').innerHTML = nextCost;
};

function newPC(){
  var cost = Math.floor(2000 * Math.pow(2, PCs))
  if(garfcoin >= cost){
    mouseStrength = mouseStrength*2;
    subCoin(cost);
    PCs++;
    document.getElementById('PCs').innerHTML = PCs;
  }
  var nextCost = Math.floor(2000 * Math.pow(2, PCs));
  document.getElementById('PCCost').innerHTML = nextCost;
}

function newOffice(){
  var cost = Math.floor(100000 * Math.pow(1.1, offices));
  if(garfcoin >= cost){
    offices = offices + 1;
    subCoin(cost);
    document.getElementById('offices').innerHTML = offices;
  }
  var nextCost = Math.floor(100000 * Math.pow(1.1, offices));
  document.getElementById('officeCost').innerHTML = nextCost;
};

function newJim(){
  var cost = Math.floor(20000000 * Math.pow(1.5, jims));
  if(garfcoin >= cost){
    jims = jims + 1;
    subCoin(cost);
    document.getElementById('jims').innerHTML = jims;
  }
  var nextCost = Math.floor(20000000 * Math.pow(1.5, jims));
  document.getElementById('jimCost').innerHTML = nextCost;
};

function ddos(){
  ddosTime = 0;
  document.getElementById('ddos').style.display = "block";
}

function ddosClick(){
    document.getElementById('ddos').style.display = "none";
}

function phish(){
  subCoin(1000 * phishingStrength);
  phishingStrength = phishingStrength * 2;
  var x = document.getElementById('phish');
  x.style.display = "block";
}

function phishClick(){
  document.getElementById('phish').style.display = "none";
}

function insiderAttack(){
  subCoin(Math.floor(garfcoin/3));
  var x = document.getElementById('insiderAttack');
  x.style.display = "block";
}

function insiderClick(){
  document.getElementById("insiderAttack").style.display = "none";
}

function ransomWare(ransom){
  if(garfcoin < ransom){
    ransom = garfcoin;
  }
  ransomAmmount = ransom;
  var x = document.getElementById('ransomNotice');
  document.getElementById('amount').innerHTML = ransomAmmount;
  x.style.display = "block";
  var y = document.getElementById('ransomInfo');
  y.style.display = "block";
}

function ransomPay(){
  subCoin(ransomAmmount);
  document.getElementById('ransomNotice').style.display = "none";
  ransomAmmount = 0;
}

function ransomClick(){
  document.getElementById('ransomInfo').style.display = "none";
}

function passiveGain(){
  garfClick(Math.floor(secritaries));
  garfClick(Math.floor(ads*5));
  garfClick(Math.floor(offices*1000));
  garfClick(Math.floor(jims*100000));
}

function hacks(){
  var check = Math.floor(100* Math.random())
  if(gametime > 50 && check == 0){
    ddos();
  }
  if(gametime > 100 && check == 1){
    phish();
  }
  if(gametime > 150 && check == 2){
    insiderAttack();
  }
  if(gametime > 150 && check == 3){
    var ransom = Math.floor(10000* Math.random());
    ransomWare(ransom + 1000);
  }
}

window.setInterval(function(){
  gametime++;
  if(ddosTime < 10){
    ddosTime++;
  } else {
    passiveGain();
  }
  hacks();
}, 1000);
