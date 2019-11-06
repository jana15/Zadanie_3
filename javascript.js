//číselné premenné
var x = 9;
var y = 17;
document.getElementById("cisla").innerHTML =
"Premenná x má hodnotu: " + x + "<br>" +"Premenná y má hodntu:" +y;

//textové premenné
const meno = 'Jana'
const priezvisko = 'Žabčíková'
document.getElementById("meno").innerHTML =
"Meno a priezvisko: "  + meno  +" " + priezvisko;

//operátory
var z = x+y;
var d = x*y;
document.getElementById("sucet").innerHTML =
"Súčet hodnôt je: " +z +"<br>" + "Súčin premenných x a y je:" +d;

//funkcie
var v = vymera(0.357, 0.125);
document.getElementById("vymera").innerHTML =
"Výmera parcely: " + v + " " + "m2";

function vymera(a, b) {
  return (a * 1000) * (b * 1000);
}

//objekty
var skola = {
    nazov: "STU",
    fakulta: "Stavebná",
    katedra: "Geodetické základy",
    budova: "blok A",
    trieda: "A612",
}

document.getElementById("trieda").innerHTML =
"Hodina prebieha na: " 
 + skola.nazov +"<br>"+ "Fakulte: " + skola.fakulta +"<br>"+"Katedre: " + skola.katedra  +"<br>"+"Budove: " + skola.budova + 
 "<br>"+"Triede: "  + skola.trieda;

 //polia
 var studenti = {Meno:"Peter", Prizvisko:"Vtipný", znamka: "A"};
 document.getElementById("textove").innerHTML = "Meno:" + studenti["Meno"];
 
 var cisla = [5, 7, 6, 9];
 document.getElementById("numericke").innerHTML = "Dĺžka pola je: " + cisla.length + "<br>"+ "Hodnota tretieho prvoku pola je: " + cisla [2];
 
 // if else
 var body = 78;
 if (body > 56){
    document.getElementById("skuska").innerHTML =  "Test si zvládol. Gratulujem!!";
    }
 else{
    document.getElementById("skuska").innerHTML = "Smola. Test si zopakuješ";
    }
 
//cykly
  var vypis = " ";
  var i; 
  for (i = 1; i < 9; i++) {
   vypis+= "Cyklus " + i + "<br>";
   document.getElementById("cykly").innerHTML = vypis ;
  }

  //array map
  var cisla = [8, 5, 10, 55, 5];
  var vysledok = cisla.map(podiel);
  document.getElementById("arrayMap").innerHTML = "Hodnoty pôvodného poľa sú:"+ cisla + "<br>" + "Pole po predelení hodnotou 2 nadobúda hodnoty: " + vysledok;
  function podiel(value) {
  return value / 2;
  }


  //array foreach
  var suma = 0;
  var vek = [65, 44, 12, 4];
  vek.forEach(SucetVek); 
  function SucetVek(item) {
  suma += item;
  document.getElementById("ArrayForEach").innerHTML = "Spoločný vek všetkých členov rodiny je : "+ suma + " rokov.";
  }



  //array find - získa hodnotu prvého prvku v poli ktorý je väčší ako 13
  var cisla = [1, 9, 12, 58, 29];
  var prvaHodnota = cisla.find(funkcia1);
  document.getElementById("ArrayFind").innerHTML = "Prvá väčšia hodnota v poli ako je hodnota 13 je: " + prvaHodnota;
  function funkcia1(value, index, array) {
    return value > 13;
  }
  
  //array findIndex - získa index prvého prvku v poli ktorý má hodnotu viac ako 10
  var cisla1 = [9, 459, 28, 4];
  var prvyIndex = cisla1.findIndex(funkcia2);
  document.getElementById("ArrayFindIndex").innerHTML = "Prvé číslo v poli väčšie ako 10 má index: " + prvyIndex;
  function funkcia2(index) {
  return index > 10;
  }
  
  //array push / pridanie novej položky do poľa
  var listnateStromy = ["dub", "buk", "breza"];
  document.getElementById("arrayPush").innerHTML = "Pôvodné pole hodnôt: " + listnateStromy;
  listnateStromy.push ("javor");
  document.getElementById("arrayPush1").innerHTML = "Nové pole hodnôt: " + listnateStromy;


  // array join - konvertuje prvky pola na reťazec
  var stromy = ["dub", "buk", "breza"];
  var k = document.getElementById("arrayJoin");
  k.innerHTML = "Medzi listnaté stromy patria: "+ stromy.join(", ") + ".";