import { readFile, readFileSync} from "fs";

readFile("../package.json", (err, data)=> {
    console.log(1)
});
const asyncData = readFileSync("../package.json");
console.log(asyncData);
