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

//array of blanks to be filled with dashes equal to the random Pokemon array length
var blanks = [];

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

//holds user guesses
var guessesArray = [];

var guessed;

//function that prints the instructions on the screen
var instructions = function (target, message, index, interval){   
  if (index < message.length) {
    $(target).append(message[index++]);
    
    setTimeout(function () { instructions(target, message, index, interval); }, interval);
  
  }
}

//function that shows professor oak
function professorOak(){
  $('#professor-oak').removeAttr('style'); 
}

//function shows professor oak and instructions
function preview(){
$(function () {
  instructions("#instructions", "WAIT! It's dangerous out there! Take one of these Pokémon! If you can guess its name, that is.", 0, 50);   
  });

  //shows professor Oak and the game instructions
  professorOak();

  console.log(randomPokemon);
}

//function that temporarily disables ON button
function disableOnBtn() {
  document.getElementById('on-btn').setAttribute('disabled', 'disabled');

  $('#on-btn').text('OFF');
}

//function that enables the Start Button
function enableStartBtn() {
  document.getElementById('start-btn').removeAttribute('disabled');
}

//function that resets the game after it is finished
function clearBoard(){
  $('#instructions').empty();
  $('#input-form').empty();
  $('#guess-display').empty();
  $('#lives').empty();
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
  
  //changes the key to whatever was last entered into the input field
  inputField.on("input",function(e){
    $(this).val(e.originalEvent.data);
  })

  //when submit is hit, check the guess
  form.on('submit', function(event){
    event.preventDefault();

    //sets guess to be the user's input
    guess = inputField.val();
    var wasGuessCorrect = false;
    //checks user guess 
    for (var i = 0; i < randomPokemon.length; i++) {
      letterArray = randomPokemon[i];

      if (randomPokemon[i] === guess) {
        wasGuessCorrect = true;
        blanks[i] = guess;
        var correctGuesses = blanks.join(" ");
        $('#dashes-display').text(correctGuesses);
        $('#lives').text('Lives: ' + lives);
        
        if (blanks.indexOf("_") === -1) {
          clearBoard();
          
          var goodJob = ("Congratulations. Your journey as a Pokémon weeaboo is about to begin. Here is your " + randomPokemon + "!");

          $(function () {
            instructions("#instructions", goodJob, 0, 50);   
          });
        }
      }
    }

    if (!wasGuessCorrect) {
      lives--;
      $('#lives').text('Lives: ' + lives);
      
      //grabs user input as the guess and displays it on the screen
      guessesArray.push(guess);
      guessed = guessesArray.join(" ");
      $("#guess-display").text(guessed);

      if(lives < 1){
        clearBoard();
        $('#dashes-display').text(randomPokemon);
        $(function(){
          instructions('#instructions', 'Oh no! The ' + randomPokemon + ' got away because you suck at Hangman. Better luck next time!', 0, 50);});
        }
    }
  })
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

    //disables on button
    disableOnBtn();

    //shows instructions and professor oak
    preview();
}
)