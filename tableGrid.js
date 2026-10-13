console.log("--- Multiplication Grid ( 1*1 to 10*10) ---\n");
for (let i = 1; i<= 10; i++) {
    let rowStr = "";
    for (let j = 1; j <= 10; j++) {

        rowStr +=  String(i * j).padStart(4," ");
    } 
    console.log(rowStr);
}