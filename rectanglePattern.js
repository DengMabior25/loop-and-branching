function printRectangle(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let rowStr = "";
        for (let j = 0; j < columns; j++) {
            rowStr += "&";
        }
        console.log(rowStr);
    }
}

printRectangle(4, 5);