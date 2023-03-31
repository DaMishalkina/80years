import {divideArrayIntoChunks} from "./index";


const array = [0, 1, 2, 3, 4, 5, 6, 7];
const chunkSize = 2;

describe("Chunks divider tests", function () {
    test("Should return not empty array", () => {
        expect(divideArrayIntoChunks(array, chunkSize)).not.toBe([])
    })
});