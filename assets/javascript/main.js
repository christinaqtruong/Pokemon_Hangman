//Pokemon wordbank as an array
var pokemon = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran",
    "nidorina",
    "nidorino",
    "nidoqueen",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "goldbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetch'd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr.Mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"
  ];

//randomly selects a pokemon
var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
console.log(randomPokemon);

//array of blanks to be filled with dashes equal to the random Pokemon array length
var blanks = [];

//starting count
var count = 0;

//number of guesses
var lives = randomPokemon.length + 10;

//dashes holds all the blanks joined together by spaces
var dashes;

//stops user from continuing to guess once the game ends
var complete = false;

//holds user's guess
var guess;

//holds random pokemon letters in an array
var letterArray;

//function that prints the instructions on the screen
var instructions = function (target, message, index, interval){   
  if (index < message.length) {
    $(target).append(message[index++]);
    
    setTimeout(function () { instructions(target, message, index, interval); }, interval);
  
  }
}

//function that enables the Start Button, shows professor oak, and prints the instructions
function enableStartBtn() {
  document.getElementById('start-btn').removeAttribute('disabled');

  $(function () {
  instructions("#instructions", "WAIT! It's dangerous out there! Take one of these Pokémon! If you can guess its name, that is.", 0, 50);   
  });
}

//function that shows professor oak
function professorOak(){
  $('#professor-oak').removeAttr('style'); 
}

//function that resets the game after it is finished
function endGame(){
  //removes the input field
  $('#input-form').empty();

  //removes the dashes
  $('#dashes-display').empty();

  //hides instructions
  $('#instructions').empty();
}

//function that plays Hangman
function play(){
  //hides professor oak
  document.getElementById('professor-oak').setAttribute('style', 'display:none;');

  //populates blanks array with dashes equal to the random pokemon length
  for(var i=0; i < randomPokemon.length; i++){
    blanks[i] = "_";
  }

  //joins the dashes into a string with spaces in between
  dashes = blanks.join(" ");

  //displays the dashes on the screen
  $('#dashes-display').text(dashes);

  //creates an input form on the page
  var inputField = $('<input id="input-field" type="text">');
  var form = $('#input-form');
  form.append(inputField);
  
  //when submit is hit, check the guess
  form.on('submit', function(event){
    event.preventDefault();
  })

  document.onkeyup = function(event) {
    if(!complete){
    guess = event.key;

      for (var i = 0; i < randomPokemon.length; i++) {
        letterArray = randomPokemon[i];
        console.log(letterArray);

        if (randomPokemon[i] === guess) {
          var correct = letterArray.indexOf(guess);
          console.log("yes");
          blanks[i] = guess;
          var htmlString = blanks.join(" ");
          $('#dashes-display').text(htmlString);
          
          if (blanks.indexOf("_") === -1) {
            var goodJob = ("You got it! Here is your " + randomPokemon + "!");
            $('#instructions').text(goodJob);
          }
        }
      }
    }
  }
}

//push start button to start game
$('#start-btn').on('click', function(){

  //initiate Pokemon Hangman
  play();

})

//push on button to see game instructions and activate play button
$('#on-btn').on('click', function(){

    //enables START button
    enableStartBtn();

    //shows professor Oak and the game instructions
    professorOak();

})