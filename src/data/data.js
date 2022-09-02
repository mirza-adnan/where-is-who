import { v4 as uuid4 } from "uuid";
import LocNar from "../assets/the-loc-nar.jpg";
import Batman from "../assets/batman.png";
import Meg from "../assets/meg.png";
import Wilson from "../assets/wilson.png";
import Universe113 from "../assets/universe-113.jpg";
import Totoro from "../assets/totoro.png";
import Courage from "../assets/courage.png";
import Waldo from "../assets/waldo.png";

const levelsData = [
    {
        name: "The Loc Nar",
        image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/the-loc-nar.jpg?alt=media&token=2f620521-aa82-42bc-b82f-712670ef3da9",
        id: uuid4(),
        leaderboard: [],
        characters: [
            {
                name: "Meg Griffin",
                image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/meg.png?alt=media&token=4e796475-3725-439f-98b4-0c65be65ceff",
                found: false,
                id: uuid4(),
                minX: 435,
                minY: 682,
                maxX: 460,
                maxY: 688,
            },
            {
                name: "Batman",
                image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/batman.png?alt=media&token=90eff230-ca71-4284-8342-feca0e18a01c",
                found: false,
                id: uuid4(),
                minX: 93,
                minY: 674,
                maxX: 130,
                maxY: 681,
            },
            {
                name: "Wilson",
                image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/wilson.png?alt=media&token=7a0d65ef-5b67-4554-a264-03d56187c5d8",
                found: false,
                id: uuid4(),
                minX: 827,
                minY: 986,
                maxX: 850,
                maxY: 994,
            },
        ],
    },
    {
        name: "Universe 113",
        image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/universe-113.jpg?alt=media&token=994a6927-fcee-4d3a-a79b-4ed5a9648bcc",
        id: uuid4(),
        leaderboard: [],
        characters: [
            {
                name: "Totoro",
                image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/totoro.png?alt=media&token=594bd85d-2357-4f26-8da1-8275d240e56f",
                found: false,
                id: uuid4(),
                minX: 693,
                minY: 536,
                maxX: 723,
                maxY: 566,
            },
            {
                name: "Courage",
                image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/courage.png?alt=media&token=19d8e978-b785-4eb6-beb7-0c5937089bf8",
                found: false,
                id: uuid4(),
                minX: 303,
                minY: 519,
                maxX: 324,
                maxY: 541,
            },
            {
                name: "Waldo",
                image: "https://firebasestorage.googleapis.com/v0/b/where-is-who-33b7c.appspot.com/o/waldo.png?alt=media&token=58aa7ed9-3a3b-4f88-bf6a-453ce6dcf376",
                found: false,
                id: uuid4(),
                minX: 140,
                minY: 636,
                maxX: 161,
                maxY: 665,
            },
        ],
    },
];

export default levelsData;
