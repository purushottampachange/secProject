import { IMovie } from "../model/movie";

export const movies : Array<IMovie>= [
    {
        id: "1",
        title: "The Dark Knight",
        year: 2008,
        rating: 9,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjIAayoGfsy7mzF0-pIw5DXmroTYQTb_AXg&s",
        overview: "Batman raises the stakes in his war on crime..."
    },
    {
        id: "2",
        title: "Inception",
        year: 2010,
        rating: 8,
        poster: "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/12/Inception.jpg",
        overview: "A thief who steals corporate secrets through dream-sharing..."
    },
    {
        id: "3",
        title: "Interstellar",
        year: 2014,
        rating: 8,
        poster: "https://m.media-amazon.com/images/S/pv-target-images/14db27b1570a8703e3975fddaa6b624bb2ca77ac7dbff925802102995b46420d.jpg",
        overview: "A team of explorers travel through a wormhole in space..."
    },
    {
        id: "4",
        title: "The Matrix",
        year: 1999,
        rating: 8,
        poster: "https://i.guim.co.uk/img/media/b295f1c9d47d4e21463c51b568588f2dd055627a/0_49_2000_1200/master/2000.jpg?width=465&dpr=1&s=none&crop=none",
        overview: "A hacker discovers the world is a simulation..."
    },
    {
        id: "5",
        title: "Avatar",
        year: 2009,
        rating: 7,
        poster: "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg",
        overview: "On the lush alien world of Pandora, humans clash with Na'vi..."
    },
    {
        id: "6",
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_SMWSRj6PFLBLg1egL9_ozGVJWr1-4Y14A&s",
        overview: "The Avengers assemble once more to undo Thanos' actions..."
    },
    {
        id: "7",
        title: "Joker",
        year: 2019,
        rating: 8,
        poster: "https://m.media-amazon.com/images/M/MV5BOTU0ZGVmY2MtMTM1OS00YmNlLWE1NGUtMGYyMjI1MjY1NWUzXkEyXkFqcGdeQWFybm8@._V1_.jpg",
        overview: "In Gotham, Arthur Fleck, a failed comedian, spirals into madness..."
    },
    {
        id: "8",
        title: "Fight Club",
        year: 1999,
        rating: 8,
        poster: "https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",
        overview: "An insomniac office worker forms an underground fight club..."
    },
    {
        id: "9",
        title: "Pulp Fiction",
        year: 1994,
        rating: 8,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwPBAFynaLc5siDIDcGUb96GQwdwH9coa9g&s",
        overview: "The lives of two mob hitmen, a boxer, and others intertwine..."
    },
    {
        id: "10",
        title: "Spider-Man: No Way Home",
        year: 2021,
        rating: 5,
        poster: "https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/3c/444435cf171225833e0d564c0eb6acdb_1280x720.jpeg?t=1647399169",
        overview: "Peter Parker seeks help after his identity is exposed..."
    },

    {
        id: "11",
        title: "Black Panther",
        year: 2018,
        rating: 7,
        poster: "https://static0.thetravelimages.com/wordpress/wp-content/uploads/2025/02/shutterstock_2411110937.jpg",
        overview: "T’Challa returns home to Wakanda to take his rightful place as king but faces a powerful enemy."
    },

    {
        id: "12",
        title: "Doctor Strange",
        year: 2016,
        rating: 7,
        poster: "https://images.thedirect.com/media/article_full/strange3.jpg",
        overview: "A brilliant surgeon turns to mystic arts after a career-ending accident."
    },

    {
        id: "13",
        title: "Iron Man",
        year: 2008,
        rating: 7,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlG_b73nyc6U01IaVcuIXVqt4GuMe28IlZg&s",
        overview: "After being held captive, billionaire engineer Tony Stark creates a high-tech suit of armor to fight evil."
    },

    {
        id: "14",
        title: "Captain America: Civil War",
        year: 2016,
        rating: 7,
        poster: "https://theupsidenews.com/wp-content/uploads/2016/05/captain-america-civil-war-poster-fea-1200x737.jpg",
        overview: "The Avengers are divided into opposing factions after political interference arises."
    },

    {
        id: "15",
        title: "Guardians of the Galaxy",
        year: 2014,
        rating: 8,
        poster: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
        overview: "A group of intergalactic criminals must pull together to stop a fanatical warrior."
    },

    {
        id: "16",
        title: "Thor: Ragnarok",
        year: 2017,
        rating: 7,
        poster: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/1288/1371288-i-1e17c5bd66e5",
        overview: "Thor must escape imprisonment to save Asgard from Hela and the impending Ragnarok."
    },

    {
        id: "17",
        title: "Shang-Chi and the Legend of the Ten Rings",
        year: 2021,
        rating: 7,
        poster: "https://m.media-amazon.com/images/S/pv-target-images/a5da48d45d82cc4c078e106ffdc403be2767acc8c3c1be5a2c4b3117f0105607.jpg",
        overview: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the Ten Rings."
    },

    {
        id: "18",
        title: "The Batman",
        year: 2022,
        rating: 8,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPwM75aV9mATw-DrtFuZulYAuJ5OT3XA9rw&s",
        overview: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues."
    },

    {
        id: "19",
        title: "Dune",
        year: 2021,
        rating: 8,
        poster: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1605220/capsule_616x353.jpg?t=1733479296",
        overview: "A young nobleman becomes the messiah of nomads on a desert planet that has giant worms and precious spice."
    },

    {
        id: "20",
        title: "Oppenheimer",
        year: 2023,
        rating: 8,
        poster: "https://images.indianexpress.com/2023/05/nolan-movie.jpg",
        overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
    },

    {
        id: "21",
        title: "Deadpool & Wolverine",
        year: 2024,
        rating: 8,
        poster: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7497/1731416817497-i",
        overview: "Deadpool teams up with Wolverine in a multiverse adventure filled with action, chaos, and humor."
    }


];
