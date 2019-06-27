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

//push on button to see game instructions and activate play button
$('#on-btn').on('click', function(){

    //enables START button
    enableStartBtn();

    //shows professor Oak and the game instructions
    professorOak();

})

function enableStartBtn() {
  document.getElementById('start-btn').removeAttribute('disabled');
}

function professorOak(){
  $('#professor-oak').removeAttr('style');

  // $(document).ready(function(){
  //   var instructions = function(target, message, index, interval){
  //     if(index < message.length){
  //       $(target).append(message[index++]);
  
  //       setTimeout(function(){instructions(target, message, index, interval);}, interval);
  //     }
  //   }
  // })

  // $(function(){
  //   instructions('#instructions', "WAIT! It's dangerous out there! Take one of these Pokémon! If you can guess its name, that is.", 0, 80);
  // })
}

//push start button to start game
$('#start-btn').on('click', function(){

    //start one round
    play();

})

function play(){
  console.log("The start button is ON!")

  document.getElementById('professor-oak').setAttribute('style', 'display:none;');

  for(var i=0; i < randomPokemon.length; i++){
    blanks[i] = "_";
  }
  dashes = blanks.join(" ");

  //where dashes will be displayed
  $('#dashes-display').text(dashes);
}