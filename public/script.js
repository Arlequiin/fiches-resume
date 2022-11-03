//'use strict';


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + "h" + m + " et " + s + " s ";
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openEv() {
  document.getElementById("evaluate").style.width = "100%";
}


function closeEv() {
  document.getElementById("evaluate").style.width = "0%";
}

function changemaintxt(txt){
  document.getElementById("maintxt").textContent = txt;
}
function gettext(){
  return document.getElementById("textarea").value;
}
function Compare_txt(txt1,txt2){
let correspondance = 0;
txt1 = txt1.replaceAll(",","").replaceAll(".","").replaceAll(" ","").replaceAll("!","").replaceAll("?","").replaceAll("\n","").toLowerCase()
txt2 = txt2.replaceAll(",","").replaceAll(".","").replaceAll(" ","").replaceAll("!","").replaceAll("?","").replaceAll("\n","").toLowerCase()
console.log(txt1)
console.log(txt2)
for (let i = 0; i<txt2.length;i++){
  if (txt1[i] == txt2[i]){
    correspondance++
  }
}
let pourcentage = correspondance/txt2.length*100;
if (pourcentage<30){
  changemaintxt(`${pourcentage}%\n : `+"Ouais non, tu peux pas deviner le contenu de la fiche, y a pas de secret faut l'apprendre")
}
if (pourcentage>=30 && pourcentage<50){
  changemaintxt(`${pourcentage}%\n : `+"Prends ton temps pour réviser!")
}
if (pourcentage>=50 && pourcentage<65){
  changemaintxt(`${pourcentage}%\n : `+"Bien! Encore un peu et ça sera parfait")
}

if (pourcentage>=65 && pourcentage<80){
  changemaintxt(`${pourcentage}%\n : `+"C'est très bien, tu es sur la bonne voie!")
}

if (pourcentage>=80 && pourcentage<=95){
  changemaintxt(`${pourcentage}%\n : `+"EXCELLENT! Encore un peu pour ateindre la perfection")
}

if (pourcentage>95 && pourcentage<100){
  changemaintxt(`${pourcentage}%\n : `+"Tu frôles la perfection!!!! Allez, encore un tout petit peu!")
}

if (pourcentage==100){
  changemaintxt(`${pourcentage}%\n : `+"PERFECTION! J'espère que tu n'as pas triché... C'est pour ton bien")
}
}
let stopTabFunction = function(e) {
  if (e.keyCode == 9) {
    e.preventDefault();
  }
};
document.addEventListener('keydown', stopTabFunction);
//ajouter print pour imprimer les fiches
function changec(color){
  document.body.style.color = color;
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' || evt.key === 'Tab') {
        let width_nav = (document.getElementById("myNav").style.width);
        if (width_nav == "0%"){
          openNav();
        } else {
          closeNav();
        }
    }
});



function loading(){
  setTimeout(function() {
    document.getElementById("blurry").style.height = "0%";
  }, 500);
}
/*
document.addEventListener('keydown', evt => {
    if (evt.key === 'r' || evt.key === 'R') {
        window.location.reload();
    }
});
*/
// bind an event handler to the element

document.addEventListener('keydown', evt => {
    if (evt.key === 'q' || evt.key === 'Q' || evt.key === 'a' || evt.key === 'A' && !typing) {
        let pagebutton= document.getElementById("prev");
        pagebutton.click();
    }
});

document.addEventListener('keydown', evt => {
    if (evt.key === 'd' || evt.key === 'D') {
      let pagebutton= document.getElementById("next");
        pagebutton.click();
    }
});

function calcul_note(){
  spea = parseFloat(document.getElementById("spea").value);
  lva = parseFloat(document.getElementById("lva").value);
  lvb = parseFloat(document.getElementById("lvb").value);
  hg = parseFloat(document.getElementById("hg").value);
  emc = parseFloat(document.getElementById("emc").value);
  es = parseFloat(document.getElementById("es").value);
  fro = parseFloat(document.getElementById("fro").value);
  fre = parseFloat(document.getElementById("fre").value);
  spe1 = parseFloat(document.getElementById("spe1").value);
  spe2 = parseFloat(document.getElementById("spe2").value);
  philo = parseFloat(document.getElementById("philo").value);
  hg2 = parseFloat(document.getElementById("hg2").value);
  go = parseFloat(document.getElementById("go").value);
  lva2 = parseFloat(document.getElementById("lva2").value);
  lvb2 = parseFloat(document.getElementById("lvb2").value);
  emc2 = parseFloat(document.getElementById("emc2").value);
  es2 = parseFloat(document.getElementById("es2").value);
  eps = parseFloat(document.getElementById("eps").value);
  let n1re = (spea*8)/20+(lva*3)/20+(lvb*3)/20+(emc*1)/20+(hg*3)/20+(es*3)/20+(fro*5)/20+(fre*5)/20;
  let nterm = (spe1*16)/20+(spe2*16)/20+(go*10)/20+(philo*8)/20+(lva2*3)/20+(lvb2*3)/20+(emc2*1)/20+(hg2*3)/20+(es2*3)/20+(eps*6)/20;
  let note_finale = n1re+nterm;
  let mention;
  if (note_finale >= 80){
    mention = "Très Bien"
  } else {
    if (note_finale >= 70){
      mention = "Bien"
    } else {
      if (note_finale >= 12*5){
      mention = "Assez Bien"
      } else {
        mention = "Sans mention"
      }
    }
  }
  if (note_finale < 50)
  {
    document.getElementById("note_finale").innerHTML = `<div class="warn"><gras>Baccalauréat raté.</gras><br><p style="color:red;">${note_finale*20/100}/20</p><br>Soit ${note_finale} points sur 100.</div>`
  } else {
  document.getElementById("note_finale").innerHTML = `<div class="diplomation"><gras>DIPLÔME DU BACCALAURÉAT GÉNÉRAL<gras><br>MENTION ${mention}<br><p style="color:red;">${note_finale*20/100}/20</p><br>Soit ${note_finale} points sur 100.</div>`
  }
}

var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  let p = document.body;

  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

function toggleCheck() {
  if(document.getElementById("mycheckbox").checked === true){
    /*
    document.body.style.background = "url('/images/paper.jpg')";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.position = "relative";
    document.body.style.zIndex = "1";
    */
    document.getElementById("darkmode").textContent = "Filtre activé : ";
    document.body.style.filter = "grayscale(100%)";
  } else {
    /*
    document.body.style.background = "url('/images/paper.png')";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.position = "relative";
    document.body.style.zIndex = "1";
    */
    document.body.style.filter = "grayscale(0%)";
    document.getElementById("darkmode").textContent = "Filtre désactivé";
  }
}

const fiches = {
  maths : [
    "1. Modification ou simplification où b != 0 & k != 0 a*k/b*k = a/b 2.Addition et soustraction où b != 0 a/b+-",
  ],
  spc : [
    "ça sent le brûlé? C'est la combustion de l'oxygène ou celle de tes neurones?",
  ],
  svt: [
    "Étudions des cailloux, c'est fantastique! - Les Spé SVT",
  ],
  nsi: [
    `print("Hello world") magique non?"`,
  ],
  fr: [
    "Le paradis, à n'en pas douter, n'est qu'une immense bibliothèque.",
  ]
}
   