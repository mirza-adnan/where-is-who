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
        image: LocNar,
        id: uuid4(),
        characters: [
            {
                name: "Meg Griffin",
                image: Meg,
                found: false,
                id: uuid4(),
                minX: 435,
                minY: 682,
                maxX: 460,
                maxY: 688,
            },
            {
                name: "Batman",
                image: Batman,
                found: false,
                id: uuid4(),
                minX: 93,
                minY: 674,
                maxX: 130,
                maxY: 681,
            },
            {
                name: "Wilson",
                image: Wilson,
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
        image: Universe113,
        id: uuid4(),
        characters: [
            {
                name: "Totoro",
                image: Totoro,
                found: false,
                id: uuid4(),
                minX: 693,
                minY: 536,
                maxX: 723,
                maxY: 566,
            },
            {
                name: "Courage",
                image: Courage,
                found: false,
                id: uuid4(),
                minX: 303,
                minY: 519,
                maxX: 324,
                maxY: 541,
            },
            {
                name: "Waldo",
                image: Waldo,
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
