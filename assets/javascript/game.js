//Instead of getting the game to start up on hitting any key, I started it using a confirm prompt so that it could pop up this cute message first.

var letsPlay = confirm(
  "WAIT! It's dangerous out there! Take one of these Pokemon! If you can guess its name, that is."
);
if (letsPlay) {
  //pokemon array listing all 100 first generation pokemon as the word bank for Hangman
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

  // random is assigned to the html element 'random'
  var random = document.getElementById("random");

  //randomPokemon is assigned to randomly generate a pokemon to guess from the word bank
  var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  console.log(randomPokemon);

  //blank is assigned to an array filled with dashes equal to the length of randomPokemon
  var blanks = [];
  for (var i = 0; i < randomPokemon.length; i++) {
    blanks[i] = "_";
  }

  console.log(blanks);

  //htmlString joins the blank dashes with spaces and inserts it into the html at the element assigned random
  var dashes = blanks.join(" ");
  random.innerText = dashes;

  //set up the count, the number of lives, and the status of the game
  var count = 0;
  var lives = 20;
  var completed = false;

  //this function triggers upon pressing a key (the user's guess)
  document.onkeyup = function(event) {
	if(!completed){
		var guess = event.key;

		if(guess.length !== 1){
		  alert("Please press a letter!")
		}
		else{
		  count++;
      lives--;
      if(lives < 1){
        alert("Oh no! You've run out of guesses! Sorry, better luck next time!")
        location.reload();
      }
		}

		document.getElementById("letter").textContent =
		  "'" + guess + "'";

		for (var i = 0; i < randomPokemon.length; i++) {
		  var letterArray = randomPokemon[i];
		  console.log(letterArray);
		  
		  document.getElementById("attempts").textContent = count;
		  document.getElementById("lives").textContent = lives;

		  if (randomPokemon[i] === guess) {
			var correct = letterArray.indexOf(guess);
			console.log("yes");
			blanks[i] = guess;
			var htmlString = blanks.join(" ");
			random.innerText = htmlString;
			
			if (blanks.indexOf("_") === -1) {
				var youWin = document.getElementById("youwin");
				var goodJob = ("You got it! Here is your " + randomPokemon + "!");
				youWin.innerText = goodJob;
			  
			  console.log("You win");
			  console.log(goodJob);
			  
			  alert("CORRECT! Great job! Take your " + randomPokemon + "!");
        completed = true;
        alert("Please refresh the page if you want another pokémon! Unfortunately our code still has bugs!")
			}
			console.log(blanks);
		  }
		}
	}
  };
}
