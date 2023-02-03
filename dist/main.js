"use strict";
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be:
// 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// testing(1500, 5, 100, 5000, 15);
// testing(1500000, 2.5, 10000, 2000000, 10);
// testing(1500000, 0.25, 1000, 2000000, 94);
// testing(1500000, 0.25, -1000, 2000000, 151);
// export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
//     // your code
// }
//Ya entendi las closures y aqui no se necesitan pero igual hago algo con ellas
// let nbYear = (p0: number, percent: number, aug: number, p: number) => {
//     return function incrementPopulation  (years:number) {
//         for (let i:number=0; i <= years-1; i++) {
//             p0 += (p0 * (percent / 100)) + aug ;
//         };
//         return p0;
//     };
// }
// const iTYTYGMTP = nbYear(1000, 2, 50, 1200); //iTYTYGMTP stands for iTellYouTheYearsGiveMeThePopulation
// console.log(iTYTYGMTP(3));
// console.log(iTYTYGMTP(3));
let nbYear = (p0, percent, aug, p) => {
    let years = 0;
    for (let i = 0; Math.floor(p0) <= p; i++) {
        if (percent == 0) {
            p0 += (p0 * (percent / 100)) + aug + 1;
            years++;
        }
        else {
            p0 += (p0 * (percent / 100)) + aug;
            years++;
        }
    }
    ;
    return years;
};
console.log(nbYear(1000, 2, 50, 1200)); //3
console.log(nbYear(1500, 5, 100, 5000)); //15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); //10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); //94
console.log(nbYear(1500000, 0.25, -1000, 2000000)); //151
console.log(nbYear(1500000, 0, 10000, 2000000)); //50
console.log(nbYear(1000, 2, 50, 1214)); //4
// 1070
// 1141.4
// 1214.22
