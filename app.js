var score = 0;
var hatchimage = "";
var heatingdesignid = "";
var egg_design_remove = "";
var stonename = "";
var imagechange = "";
var animtime = 5;
function change_heating_color(cname, idtemp, cnum, newtemp) {
  console.log(idtemp);
  //   document.getElementById(idtemp).className = "egg_heating_design_hatch";
  // // // cname.className += " egg_heating_design_hatch";
  // // // document.getElementById(idtemp).style.gridColumnStart = cnum;
  // // // document.getElementById(idtemp).style.gridColumnEnd = cnum + 1;
  var y = document.getElementById(newtemp);
  // y.style.visibility = "hidden";
  var x = document.getElementById(idtemp);
  x.style.display = "block";
  x.style.visibility = "visible";
  x.style.animation = "heating_the_egg 8s";
  // x.style.animationPlayState = "paused";
  // var k = 0;
  // setInterval(() => {
  //   var x = document.getElementById(idtemp);
  //   k = k + 1;
  //   if (k < 3) {
  //     x.onmouseover = function () {
  //       x.style.animationPlayState = "running";
  //     };
  //     x.onmouseout = function () {
  //       x.style.animationPlayState = "paused";
  //     };
  //   } else clearInterval();
  // }, 1000);
  //x.addEventListener("webkitAnimationStart", stone_falling_start);
  x.addEventListener("webkitAnimationEnd", testing());
}
// function stop_heating_color() {

// }

function change_heating_color1(temp, temp1, hatchtemp, stonetemp, newtemp1) {
  score = 0;
  document.getElementById("score").innerHTML = score;
  timer();
  imagechange = newtemp1;
  stonename = stonetemp;
  egg_design_remove = temp1;
  heatingdesignid = temp;
  hatchimage = hatchtemp;
  console.log(hatchimage);
  console.log(temp);
  console.log(hatchtemp);
  var test = document.getElementById("clicktohatch1");
  change_heating_color(test, temp, 1, temp1);
}
function change_heating_color2(temp, temp2, hatchtemp, stonetemp, newtemp1) {
  imagechange = newtemp1;
  egg_design_remove = temp2;
  stonename = stonetemp;
  heatingdesignid = temp;
  hatchimage = hatchtemp;
  var test = document.getElementById("clicktohatch2");
  console.log(test);
  change_heating_color(test, temp, 2, temp2);
}
function change_heating_color3(temp, temp3, hatchtemp, stonetemp, newtemp1) {
  imagechange = newtemp1;
  egg_design_remove = temp3;
  stonename = stonetemp;
  heatingdesignid = temp;
  hatchimage = hatchtemp;
  var test = document.getElementById("clicktohatch3");
  console.log(test);
  change_heating_color(test, temp, 3, temp3);
}
function change_heating_color4(temp, temp4, hatchtemp, stonetemp, newtemp1) {
  imagechange = newtemp1;
  egg_design_remove = temp4;
  stonename = stonetemp;
  heatingdesignid = temp;
  hatchimage = hatchtemp;
  var test = document.getElementById("clicktohatch4");
  console.log(test);
  change_heating_color(test, temp, 4, temp4);
}
function change_heating_color5(temp, temp5, hatchtemp, stonetemp, newtemp1) {
  imagechange = newtemp1;
  egg_design_remove = temp5;
  stonename = stonetemp;
  heatingdesignid = temp;
  hatchimage = hatchtemp;
  var test = document.getElementById("clicktohatch5");
  console.log(test);
  change_heating_color(test, temp, 5, temp5);
}

// timerfunction

function timer() {
  var minute = 0;
  var sec = 50;
  setInterval(function () {
    if ((minute == 0 && sec == 0) || (minute < 0 && sec < 0)) {
      clearInterval();
      return forthegameend();
    }
    document.getElementById("timer").innerHTML = minute + ":" + sec;
    if (sec == 0) {
      sec = 59;
      minute = minute - 1;
    } else {
      sec = sec - 1;
    }
  }, 1000);
}
function forthegameend() {
  document.getElementById("timer").innerHTML = "Time Finished";
  setTimeout(function () {
    var x = document.getElementById("front_game_design");
    x.style.display = "none";
    if (score == 25) {
      var y = document.getElementById("win");
      y.style.display = "block";
    } else {
      var z = document.getElementById("loose");
      z.style.display = "block";
      document.getElementById("loosemark").innerHTML = score;
    }
  }, 2000);
}
//testing
function testing() {
  var x = document.getElementById(heatingdesignid);
  console.log(x);
  x.style.zIndex = 10;
  x.style.visibility = "visible";
  var y = document.getElementById(egg_design_remove);
  console.log(y);
  y.style.visibility = "visible";
}

// score of the player

function scoretheplayer(hatchtemp) {
  var x = document.getElementById(heatingdesignid);
  console.log(x);
  x.style.visibility = "hidden";
  var y = document.getElementById(egg_design_remove);
  console.log(y);
  y.style.visibility = "hidden";
  var z = document.getElementById(hatchimage);
  console.log(z);
  z.style.display = "block";
  //try
  elem = document.getElementById(imagechange);
  elem.style.display = "block";
  elemx = document.getElementById(imagechange);
  console.log(elemx);
  document.getElementById(imagechange).src = "https://i.gifer.com/MRF.gif";

  console.log(elem);
  // x.addEventListener("animationend", addscore);
  score = score + 5;
  console.log(score);
  document.getElementById("score").innerHTML = score;
}

// move stone to prevent collision

function movethestone() {
  var elem = document.getElementById(stonename);
  console.log(elem);
  elem.style.animation = "prevent_collision 5s";
  elem.style.webkitAnimationFillMode = "forwards";
  //   elem.addEventListener("webkitAnimationStart", stone_falling_start);
  elem.addEventListener("webkitAnimationEnd", scoretheplayer);
}

// stone falling start
function stone_falling_start() {
  var elem = document.getElementById(stonename);
  console.log(elem);
  elem.style.animation = "falling_of_stone";
  elem.style.webkitAnimationFillMode = "forwards";
  elem.style.webkitAnimationDuration = animtime + "s";
  animtime = animtime - 1;
  //   elem.addEventListener("webkitAnimationStart", stone_falling_start);
  elem.addEventListener("webkitAnimationEnd", eggdestroyed);
}

function eggdestroyed() {
  var x = document.getElementById(heatingdesignid);
  console.log(x);
  x.style.zIndex = 10;
  x.style.visibility = "hidden";
  var y = document.getElementById(egg_design_remove);
  console.log(y);
  y.style.visibility = "hidden";

  console.log("check");
  console.log(imagechange);
  var z = document.getElementById(hatchimage);
  console.log(z);
  z.style.display = "block";
  elem = document.getElementById(imagechange);
  elem.style.display = "block";
  elemx = document.getElementById(imagechange);
  console.log(elemx);
  document.getElementById(imagechange).src =
    "https://cdn1.vectorstock.com/i/thumb-large/85/40/broken-egg-vector-2108540.jpg";
  elemx.style.width = "110px";
  elemx.style.height = "140px";
  console.log(elem);
}

function start_the_game(temp) {
  var elem = document.getElementById(temp);
  elem.style.visibility = "visible";
  var elem1 = document.getElementById("start");
  elem1.style.visibility = "hidden";
  var elem2 = document.getElementById("resetgame");
  elem2.style.visibility = "visible";
  var elem3 = document.getElementById("instruction");
  elem3.style.display = "none";
}
