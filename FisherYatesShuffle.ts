/* Use the Fisher-Yates algorithm to shuffle the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

/* Shuffle with a for loop */
function shuffle(array: any[]) {
    let arrayLength: number;
    let temporaryValue: any;
    let randomIndex: number;
    let i: number;

    arrayLength = array.length;
    // While there remain elements to shuffle...
    /* To shuffle an array a of n elements (indices 0..n-1):
    for i from 0 to n−2 do
        j ← random integer such that i ≤ j < n
        exchange a[i] and a[j]
    */
    for (i = 0; i < arrayLength - 1; i++) {

        // Pick a remaining element...
        randomIndex = getRandomInt(i, arrayLength);

        // And swap it with the current element.
        temporaryValue = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffle2(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = getRandomInt(0, i);
        const temporaryValue = array[randomIndex];
        array[i] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const arr: any[] = createArrayToShuffle();

function createArrayToShuffle() {
    const arr: any[] = [];
    const args = process.argv.slice(2);

    if (args.length !== 0 && args.length !== 1) {
        throw new Error("Invalid args");
    } else {
        const lengthOfArray = !isNaN(parseInt(args[0])) ? parseInt(args[0]) : 10;

        for (let i = 0; i < lengthOfArray; i++) {
            arr.push(i);
        }
        console.log(`Array size is ${arr.length}`);
    }
    return arr;
}

function main() {
    const t0 = performance.now();
    const shuffled = shuffle(arr)
    const t1 = performance.now();
    const dateNow = new Date();

    console.log(`Finished execution in ${t1 - t0} milliseconds, on ${dateNow.toLocaleDateString()} at ${dateNow.toLocaleTimeString()} and shutting down`)

    console.log(shuffled);
}
main()
