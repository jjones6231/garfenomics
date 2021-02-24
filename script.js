var garfcoin = 0;
var developers = 0;
var gametime = 0;
var security = 0;
var offices = 0;
var jims = 0;
var mouseStrength = 1;
var PCs = 0;
var phishingStrength = 1;
var ransomAmmount = 0;
var ddosTime = 0;
var training = 0;
var antivirus = 0;
var access = 0;
var protection = 0;
var activeRansom = false;

function garfClick(number){
  garfcoin += number;
  document.getElementById("counter").innerHTML = garfcoin;
};

function mouseClick(){
  garfcoin += (1+developers)*Math.pow(2, PCs);
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

function newDev(){
  var cost = Math.floor(10 * Math.pow(1.1, developers));
  if(garfcoin >= cost){
    developers = developers + 1;
    subCoin(cost);
    document.getElementById('developers').innerHTML = developers;
  }
  var nextCost = Math.floor(10 * Math.pow(1.1, developers));
  document.getElementById('developerCost').innerHTML = nextCost;
};

function newSec(){
  var cost = Math.floor(100 * Math.pow(1.1, security));
  if(garfcoin >= cost){
    security = security + 1;
    subCoin(cost);
    document.getElementById('security').innerHTML = security;
  }
  var nextCost = Math.floor(100 * Math.pow(1.1, security));
  document.getElementById('secCost').innerHTML = nextCost;
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

function newTraining(){
  var cost = Math.floor(2000 * Math.pow(1.1, training));
  if(garfcoin >= cost){
    training = training + 1;
    subCoin(cost);
    document.getElementById('training').innerHTML = training;
  }
  var nextCost = Math.floor(2000 * Math.pow(1.1, training));
  document.getElementById('trainingCost').innerHTML = nextCost;
};

function newAntivirus(){
  var cost = Math.floor(2000 * Math.pow(1.1, antivirus));
  if(garfcoin >= cost){
    antivirus = antivirus + 1;
    subCoin(cost);
    document.getElementById('antivirus').innerHTML = antivirus;
  }
  var nextCost = Math.floor(2000 * Math.pow(1.1, antivirus));
  document.getElementById('antivirusCost').innerHTML = nextCost;
};

function newAccess(){
  var cost = Math.floor(2000 * Math.pow(1.1, access));
  if(garfcoin >= cost){
    access = access + 1;
    subCoin(cost);
    document.getElementById('access').innerHTML = access;
  }
  var nextCost = Math.floor(2000 * Math.pow(1.1, access));
  document.getElementById('accessCost').innerHTML = nextCost;
};

function newProtection(){
  var cost = Math.floor(2000 * Math.pow(1.1, protection));
  if(garfcoin >= cost){
    protection = protection + 1;
    subCoin(cost);
    document.getElementById('protection').innerHTML = protection;
  }
  var nextCost = Math.floor(2000 * Math.pow(1.1, protection));
  document.getElementById('protectionCost').innerHTML = nextCost;
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
  if(developers>0){
    developers--;
    document.getElementById('developers').innerHTML = developers;
  }
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
  activeRansom=true;
  var buttons = document.getElementsByClassName("button");
  for(var i = 0; i < buttons.length; i++){
    buttons[i].disabled = true;
  }
}

function ransomPay(){
  subCoin(ransomAmmount);
  document.getElementById('ransomNotice').style.display = "none";
  ransomAmmount = 0;
  activeRansom=false;
  var buttons = document.getElementsByClassName("button");
  for(var i = 0; i < buttons.length; i++){
    buttons[i].disabled = false;
  }
}

function ransomClick(){
  document.getElementById('ransomInfo').style.display = "none";
}

function passiveGain(){
  garfClick(Math.floor(developers));
  garfClick(Math.floor(security*5));
  garfClick(Math.floor(offices*1000));
  garfClick(Math.floor(jims*100000));
}

function hacks(){
  var check = Math.floor(100* Math.random())
  var checkSafe = Math.floor(10* Math.random()+1);
  if(gametime > 50 && check == 0){
    if(checkSafe>protection){
      ddos();
    }
  }
  if(gametime > 100 && check == 1){
    if(checkSafe>training){
      phish();
    }
  }
  if(gametime > 150 && check == 2){
    if(checkSafe>access){
      insiderAttack();
    }
  }
  if(gametime > 150 && check == 3){
    if(checkSafe>antivirus){
      var ransom = Math.floor(10000* Math.random());
      ransomWare(ransom + 1000);
    }
  }
}


window.setInterval(function(){
  gametime++;
  if(ddosTime < 10){
    ddosTime++;
  } else if(!activeRansom){
    passiveGain();
  }
  hacks();
}, 1000);
