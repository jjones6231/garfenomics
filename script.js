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
var unusedSecurity = 0;

function garfClick(number){
  garfcoin += number;
  document.getElementById("counter").innerHTML = garfcoin;
};

function mouseClick(){
  garfcoin += developers+1*Math.pow(2, PCs);
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
    unusedSecurity++;
    subCoin(cost);
    document.getElementById('security').innerHTML = security;
    document.getElementById('upgrades').innerHTML = unusedSecurity;
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
  if(unusedSecurity>0){
    var cost = Math.floor(2000 * Math.pow(1.1, training));
    if(garfcoin >= cost){
      training = training + 1;
      subCoin(cost);
      document.getElementById('training').innerHTML = training;
      unusedSecurity--;
      document.getElementById('upgrades').innerHTML = unusedSecurity;
    }
    var nextCost = Math.floor(2000 * Math.pow(1.1, training));
    document.getElementById('trainingCost').innerHTML = nextCost;
  }
};

function newAntivirus(){
  if(unusedSecurity>0){
    var cost = Math.floor(2000 * Math.pow(1.1, antivirus));
    if(garfcoin >= cost){
      antivirus = antivirus + 1;
      subCoin(cost);
      document.getElementById('antivirus').innerHTML = antivirus;
      unusedSecurity--;
      document.getElementById('upgrades').innerHTML = unusedSecurity;
    }
    var nextCost = Math.floor(2000 * Math.pow(1.1, antivirus));
    document.getElementById('antivirusCost').innerHTML = nextCost;
  }
};

function newAccess(){
  if(unusedSecurity>0){
    var cost = Math.floor(2000 * Math.pow(1.1, access));
    if(garfcoin >= cost){
      access = access + 1;
      subCoin(cost);
      document.getElementById('access').innerHTML = access;
      unusedSecurity--;
      document.getElementById('upgrades').innerHTML = unusedSecurity;
    }
    var nextCost = Math.floor(2000 * Math.pow(1.1, access));
    document.getElementById('accessCost').innerHTML = nextCost;
  }
};

function newProtection(){
  if(unusedSecurity>0){
    var cost = Math.floor(2000 * Math.pow(1.1, protection));
    if(garfcoin >= cost){
      protection = protection + 1;
      subCoin(cost);
      document.getElementById('protection').innerHTML = protection;
      unusedSecurity--;
      document.getElementById('upgrades').innerHTML = unusedSecurity;
    }
    var nextCost = Math.floor(2000 * Math.pow(1.1, protection));
    document.getElementById('protectionCost').innerHTML = nextCost;
  }
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
  var checkSafe = Math.floor(5* Math.random()+1+offices);
  if(gametime > 50 && 1 < check && check < 4){
    if(checkSafe+offices>protection){
      ddos();
      console.log(check);
    }
  }
  if(gametime > 100 && 4 < check && check < 7){
    if(checkSafe+Math.floor(developers/10)>training){
      phish();
    }
  }
  if(gametime > 150 && 7 < check && check < 10 ){
    if(checkSafe+Math.floor(developers/10)>access){
      insiderAttack();
    }
  }
  if(gametime > 200 && 10 < check && check < 13){
    if(checkSafe+PCs>antivirus){
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
