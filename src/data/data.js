import { v4 as uuid4 } from "uuid";
import LocNar from "../assets/the-loc-nar.jpg";
import Batman from "../assets/batman.png";
import Meg from "../assets/meg.png";
import Wilson from "../assets/wilson.png";
import Universe113 from "../assets/universe-113.jpg";

const levelsData = [
    {
        name: "The Loc Nar",
        image: LocNar,
        characters: [
            {
                name: "Meg Griffin",
                image: Meg,
                found: false,
                id: uuid4(),
            },
            {
                name: "Batman",
                image: Batman,
                found: false,
                id: uuid4(),
            },
            {
                name: "Wilson",
                image: Wilson,
                found: false,
                id: uuid4(),
            },
        ],
        id: uuid4(),
    },
    {
        name: "Universe 113",
        image: Universe113,
        characters: [
            {
                name: "Meg Griffin",
                image: Meg,
            },
            {
                name: "Batman",
                image: Batman,
            },
            {
                name: "Wilson",
                image: Wilson,
            },
        ],
        id: uuid4(),
    },
];

export default levelsData;
