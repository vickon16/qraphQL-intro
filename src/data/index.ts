let games = [
  {
    id: "1",
    title: "Zelda, The Legend of",
    platform: ["Nintendo", "Game Boy"],
  },
  { id: "2", title: "Super Mario Bros.", platform: ["Switch", "Game Boy"] },
  {
    id: "3",
    title: "The Legend of Zelda: A Link to the Past",
    platform: ["Nintendo", "PS5", "Xbox"],
  },
  { id: "4", title: "Final Fantasy 7", platform: ["Nintendo", "Game Boy"] },
  { id: "5", title: "Elden Ring", platform: ["PS5"] },
  { id: "6", title: "Mario Kart", platform: ["PC", "Xbox"] },
  { id: "7", title: "Pokemon Scaret", platform: ["Nintendo", "PC"] },
];

let authors = [
  { id: "1", name: "Nintendo", verified: true },
  { id: "2", name: "Mario", verified: false },
  { id: "3", name: "Peach", verified: true },
  { id: "4", name: "Donkey Kong", verified: false },
  { id: "5", name: "Game Boy", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 5,
    content: "This game is amazing!",
    authorId: "1",
    gameId: "1",
  },
  {
    id: "2",
    rating: 4,
    content: "This game is okay.",
    authorId: "2",
    gameId: "3",
  },
  {
    id: "3",
    rating: 3,
    content: "This game is not that great.",
    authorId: "3",
    gameId: "3",
  },
  {
    id: "4",
    rating: 2,
    content: "This game is terrible.",
    authorId: "4",
    gameId: "7",
  },
  {
    id: "5",
    rating: 5,
    content: "This game is amazing!",
    authorId: "5",
    gameId: "2",
  },
];

export default { games, authors, reviews };
