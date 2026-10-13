function showMultiplicationTable(number) {
    console.log(`--- Multiplication Table for ${number} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number}  * ${i} = ${number * i}`);
    }
}

showMultiplicationTable(8);