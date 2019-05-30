var letsPlay = confirm(
  "WAIT! It's dangerous out there! Take one of these Pokemon! If you can guess its name, that is."
);
if (letsPlay) {
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
      var random = document.getElementById('random');

  var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  console.log(randomPokemon);

  var blanks = [];
  for (var i = 0; i < randomPokemon.length; i++) {
    blanks[i] = "_";
  }

  var htmlString = blanks.join(" ");
  random.innerText = htmlString
  // // if(i === randomPokemon.length){
  // //     var joinedBlanks = blanks.join(" ")
  // //     console.log(joinedBlanks);
  // //     var random = document.getElementById('random');
  // //     random.innerText(joinedBlanks);
  // // }

  // if(i === randomPokemon.length){
  //     document.getElementById("random").textContent = joinedBlanks;
  // }

  document.onkeyup = function(event) {
    var guess = event.key;

    document.getElementById("letter").textContent =
      "You guessed the letter " + guess;

    for (var i = 0; i < randomPokemon.length; i++) {
        var letterArray = randomPokemon[i].split('');
        console.log(letterArray);
    
      if (randomPokemon[i] === guess) {
        var correct = letterArray.indexOf(guess);
        console.log("yes")
        blanks[i] = guess
        var htmlString = blanks.join(" ");
        random.innerText = htmlString      
        if(blanks.indexOf("_")===-1){
            console.log("You win")
        }
        console.log(blanks)
      }
    }
  };

  
  if (blanks === randomPokemon) {
    document.write("Congratulations! Here is your " + randomPokemon + "!");
  }
}
