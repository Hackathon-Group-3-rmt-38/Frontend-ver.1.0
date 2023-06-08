let movie = [
  {
    name: "SPIDER-MAN: INTO THE SPIDER-VERSE",
    price: "50000",
    rate: "16",
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  {
    name: "THE INCREDIBLES",
    price: "50000",
    rate: "16",
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  {
    name: "BLACK PANTHER",
    price: "50000",
    rate: "16",
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  {
    name: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
    price: "50000",
    rate: "16",
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  {
    name: "AVENGERS: ENDGAME",
    price: "50000",
    rate: "16",
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  {
    name: "LOGAN",
    price: "50000",
    rate: "16",
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
];

let mov1 = document.querySelector("#p-mov1");
let mov2 = document.querySelector("#p-mov2");
let mov3 = document.querySelector("#p-mov3");
let mov4 = document.querySelector("#p-mov4");
let mov5 = document.querySelector("#p-mov5");
let mov6 = document.querySelector("#p-mov6");

mov1.innerHTML = movie[0].name;
mov2.innerHTML = movie[1].name;
mov3.innerHTML = movie[2].name;
mov4.innerHTML = movie[3].name;
mov5.innerHTML = movie[4].name;
mov6.innerHTML = movie[5].name;
