import {produceArrayOfWeeks, getAllWeeks} from "./WeeksSection";


const array = [0, 1, 2, 3, 4, 5, 6, 7];
const passedWeeks = 2;
const birthDate = '02.10.2023';
const averageLifeYears = 80;
const oneYearWeeksType = Array<{checked: boolean}>;
const allWeeksType = Array<Array<{checked: boolean}>>;

describe("Weeks of one year producer tests", function () {
    test("Should return array of objects with filed checked", () => {
        const res = produceArrayOfWeeks(array, passedWeeks);
        expect(res).toBeInstanceOf(oneYearWeeksType)
    })
});

describe("All weeks of program getter tests", function (){
    test("Should return array, consisted of arrays of objects", () => {
        const res = getAllWeeks(birthDate, averageLifeYears);
        expect(res).toBeInstanceOf(allWeeksType);
    })
})