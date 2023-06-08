let movies = [
    {
        id: 1,
        title: "John Wick: Chapter 4",
        sinopsis: "Sequel dari film aksi populer John Wick, di mana John Wick kembali ke dunia kejahatan untuk melawan musuh-musuh baru.",
        sutradara: "Chad Stahelski",
        aktor: ["Keanu Reeves", "Ian McShane", "Halle Berry"],
        rilis: "Juni 2023",
        hari: ["Senin", "Rabu", "Sabtu"],
        schedule: ["12.00", "15.00", "18.00", "21.00"]
    },
    {
        id: 2,
        title: "Dune: Part Two",
        sinopsis: "Kelanjutan dari film epik Dune, di mana Paul Atreides memimpin pasukan melawan musuh-musuhnya di dunia gurun yang berbahaya.",
        sutradara: "Denis Villeneuve",
        aktor: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        rilis: "Oktober 2023",
        hari: ["Senin", "Selasa", "Jumat"],
        schedule: ["09.00", "15.00", "18.00", "21.00"]
    },
    {
        id: 3,
        title: "Oppenheimer",
        sinopsis: "Sebuah drama sejarah yang mengisahkan kehidupan ilmuwan J. Robert Oppenheimer dan peranannya dalam pengembangan bom atom.",
        sutradara: "Christopher Nolan",
        aktor: ["TBA"],
        rilis: "Desember 2023",
        hari: ["Rabu", "Kamis", "Minggu"],
        schedule: ["09.00", "12.00", "18.00", "21.00"]
    },
    {
        id: 4,
        title: "Indiana Jones and the Dial of Destiny",
        sinopsis: "Petualangan Indiana Jones yang legendaris berlanjut saat dia mencari artefak mitos yang dapat mengubah takdir manusia.",
        sutradara: "James Mangold",
        aktor: ["Harrison Ford"],
        rilis: "Juli 2023",
        hari: ["Selasa", "Sabtu", "Minggu"],
        schedule: ["09.00", "12.00", "15.00", "21.00"]
    },
    {
        id: 5,
        title: "Mission: Impossible - Dead Reckoning Part One",
        sinopsis: "Ethan Hunt dan tim IMF-nya kembali dalam misi yang lebih berbahaya dan menghadapi musuh baru yang kuat.",
        sutradara: "Christopher McQuarrie",
        aktor: ["Tom Cruise", "Simon Pegg", "Rebecca Ferguson"],
        rilis: "Agustus 2023",
        hari: ["Kamis", "Jumat", "Minggu"],
        schedule: ["09.00", "12.00", "15.00", "18.00"]
    },
    {
        id: 6,
        title: "Spider-Man: Across the Spider-Verse",
        sinopsis: "Petualangan baru Miles Morales yang membawanya melintasi multiverse dan bertemu dengan Spider-Man dari dimensi lain.",
        sutradara: "Joaquim Dos Santos",
        aktor: ["Shameik Moore", "Hailee Steinfeld"],
        rilis: "April 2023",
        schedule: ["09.00", "12.00", "15.00", "18.00"]
    }
];

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})