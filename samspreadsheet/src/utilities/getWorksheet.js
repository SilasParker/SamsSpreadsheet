const getWorksheet = (name) => {
    var Excel = require('exceljs');
    var fs = require('fs');

    var workbook = new Excel.Workbook();

    if(fs.existsSync(name)) {
        workbook.xlsx.readFile(name) //replace path with path to file
        .then((file) => {
            console.log(file);
            return file.getWorksheet('Sheet1') //replace with name of sheet
        });
    } else {
        console.log(`file not found at ${name}`);
    }

}

export default getWorksheet; 