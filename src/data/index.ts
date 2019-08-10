import shuffleArray from "lib/shuffleArray";
import preloadImage from "lib/preloadImage";
import random from "lib/random";

// Loading: https://codepen.io/moritao/pen/yZrZNx
// https://marvelcinematicuniverse.fandom.com/wiki/

// Snap the correct people to help Avengers defeat Thanos in Endgame

const cast = shuffleArray([
  {
    alias: "The Winter Soldier",
    name: "Bucky Barnes",
    actor: "Sebastian Stan",
    image: require("./Winter_Soldier_AIW_Profile.jpg"),
    line: "Steve?",
    snapped: true
  },
  {
    alias: "The Black Panther",
    name: "T’Challa",
    actor: "Chadwick Boseman",
    image: require("./Black_Panther_AIW_Profile.jpg"),
    line: "WAKANDA FOREVER!",
    snapped: true
  },
  {
    alias: "Scarlet Witch",
    name: "Wanda Maximoff",
    actor: "Elizabeth Olsen",
    image: require("./Scarlet_Witch_AIW_Profile.jpeg"),
    line: "That's too high a price",
    snapped: true
  },
  {
    alias: "Falcon",
    name: "Sam Wilson",
    actor: "Anthony Mackie",
    image: require("./Falcon_AIW_Profile.jpg"),
    line: "This is awkward",
    snapped: true
  },
  {
    alias: "",
    name: "Groot",
    actor: "Vin Diesel",
    image: require("./Groot_AIW_Profile.jpg"),
    line: "I am Groot",
    snapped: true
  },
  {
    alias: "Star-Lord",
    name: "Peter Quill",
    actor: "Chris Pratt",
    image: require("./Star-Lord_AIW_Profile.jpg"),
    line: "Did we just lose?",
    snapped: true
  },
  {
    alias: "Drax the Destroyer",
    name: "Drax",
    actor: "Dave Bautista",
    image: require("./Drax_AIW_Profile.jpg"),
    line: "Why is Gomora?",
    snapped: true
  },
  {
    alias: "",
    name: "Mantis",
    actor: "Pom Klementieff",
    image: require("./Mantis_AIW_Profile.jpg"),
    line: "Something is happening",
    snapped: true
  },
  {
    alias: "Spider-Man",
    name: "Peter Parker",
    actor: "Tom Holland",
    image: require("./Spider-Man_AIW_Profile.jpg"),
    line: "I don't feel so good",
    snapped: true
  },
  {
    alias: "Doctor Strange",
    name: "Stephen Strange",
    actor: "Benedict Cumberbatch",
    image: require("./Doctor_Strange_AIW_Profile.jpg"),
    line: "There was no other way",
    snapped: true
  },
  {
    alias: "",
    name: "Nick Fury",
    actor: "Samuel L. Jackson",
    image: require("./Nick_Fury_Textless_AoU_Poster.jpg"),
    line: "Mother...",
    snapped: true
  },
  {
    alias: "",
    name: "Maria Hill",
    actor: "Cobie Smulders",
    image: require("./Maria_Hill_Infinity_War.jpg"),
    line: "Code red!",
    snapped: true
  },
  {
    alias: "",
    name: "Hank Pym",
    actor: "Michael Douglas",
    image: require("./Textless_AMATW_Character_Posters_03.jpg"),
    line: "Quantum entanglement",
    snapped: true
  },
  {
    alias: "Wasp",
    name: "Hope van Dyne",
    actor: "Evangeline Lilly",
    image: require("./Textless_AMATW_Character_Posters_02.jpg"),
    line: "That's how you punch",
    snapped: true
  },
  {
    alias: "",
    name: "Janet van Dyne",
    actor: "Michelle Pfeiffer",
    image: require("./Textless_AMATW_Character_Posters_04.jpg"),
    line: "It's okay. I'm...",
    snapped: true
  },
  {
    alias: "",
    name: "Shuri",
    actor: "Letitia Wright",
    image: require("./Shuri_AIW_Profile.jpg"),
    line: "The Black Panther lives!",
    snapped: true
  },
  {
    alias: "",
    name: "Lila Barton",
    actor: "Ava Russo",
    image: require("./Lila_Barton.jpg"),
    line: "Daddy?",
    snapped: true
  },
  {
    alias: "",
    name: "Laura Barton",
    actor: "Linda Cardellini",
    image: require("./Laura_Barton_AE.jpg"),
    line: "Well...",
    snapped: true
  },
  {
    alias: "Captain America",
    name: "Steve Rogers",
    actor: "Chris Evans",
    image: require("./CapAmerica-EndgameProfile.jpg"),
    line: "I can do this all day!",
    snapped: false
  },
  {
    alias: "Iron Man",
    name: "Tony Stark",
    actor: "Robert Downey Jr.",
    image: require("./IronMan-EndgameProfile.jpg"),
    line: "I am Iron Man!",
    snapped: false
  },
  {
    alias: "Thor",
    name: "God of Thunder",
    actor: "Chris Hemsworth",
    image: require("./Thor-EndgameProfile.jpg"),
    line: "I should've aimed for the head!",
    snapped: false
  },
  {
    alias: "Black Widow",
    name: "Natasha Romanoff",
    actor: "Scarlett Johansson",
    image: require("./BlackWidow-EndgameProfile.jpg"),
    line: "This is gonna work",
    snapped: false
  },
  {
    alias: "The Incredible Hulk",
    name: "Bruce Banner",
    actor: "Mark Ruffalo",
    image: require("./BruceBanner-EndgameProfile.jpg"),
    line: "I am always angry",
    snapped: false
  },
  {
    alias: "War Machine",
    name: "James Rhodes",
    actor: "Don Cheadle",
    image: require("./WarMachine-EndgameProfile.jpg"),
    line: "Superhero vibe",
    snapped: false
  },
  {
    alias: "",
    name: "General Okoye",
    actor: "Danai Gurira",
    image: require("./Okoye-EndgameProfile.jpg"),
    line: "Yibambe!",
    snapped: false
  },
  {
    alias: "",
    name: "M’Baku",
    actor: "Winston Duke",
    image: require("./MBaku_AIW.jpeg"),
    line: "YIBAMBE!",
    snapped: false
  },
  {
    alias: "Rocket Raccoon",
    name: "Subject: 89P13",
    actor: "Bradley Cooper",
    image: require("./Rocket-EndgameProfile.jpg"),
    line: "Don't call me vermin!",
    snapped: false
  },
  {
    alias: "",
    name: "Nebula",
    actor: "Karen Gillan",
    image: require("./Nebula-EndgameProfile.jpg"),
    line: "I will kill Thanos!",
    snapped: false
  },
  {
    alias: "Ant-Man",
    name: "Scott Lang",
    actor: "Paul Rudd",
    image: require("./AntMan-EndgameProfile.jpg"),
    line: "Going in who's behind?!",
    snapped: false
  },
  {
    alias: "Hawkeye",
    name: "Clint Barton",
    actor: "Jeremy Renner",
    image: require("./HawkeyeRonin-EndgameProfile.jpg"),
    line: "Tell my family I love them",
    snapped: false
  },
  {
    alias: "Captain Marvel",
    name: "Carol Danvers",
    actor: "Brie Larson",
    image: require("./CapMarvel-EndgameProfile.jpg"),
    line: "I'm coming to end it",
    snapped: false
  },
  {
    alias: "Rescue",
    name: "Pepper Potts",
    actor: "Gwyneth Paltrow",
    image: require("./Pepper_Potts_Endgame_Textless.jpg"),
    line: "That was really violent",
    snapped: false
  },
  {
    alias: "Valkyrie",
    name: "Brunnhilde",
    actor: "Tessa Thompson",
    image: require("./Valkyrie_Textless.jpg"),
    line: "I hate this prophecy",
    snapped: false
  },
  {
    alias: "",
    name: "Wong",
    actor: "Benedict Wong",
    image: require("./Wong_AIW_Profile.jpg"),
    line: "Beyoncé!",
    snapped: false
  },
  {
    alias: "Happy Hogan",
    name: "Harold Joseph Hogan",
    actor: "Jon Favreau",
    image: require("./Happy_Hogan_Endgame_Textless.jpg"),
    line: "Cheeseburgers",
    snapped: false
  },
  {
    alias: "",
    name: "Cassandra Lang",
    actor: "Emma Fuhrmann",
    image: require("./Cassie_Lang.jpg"),
    line: "Love, you, dad!",
    snapped: false
  }
]).map(cast => ({ ...cast, rotation: random(-1, 1) }));

const getData = async () => {
  await Promise.all(cast.map(({ image }) => preloadImage(image)));
  return cast;
};

export default getData;
