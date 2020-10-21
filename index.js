const csv = require('csv-parser');
const fs = require('fs');
let newAr = new Array();

fs.createReadStream('C:\\Users\\LEIT\\Desktop\\ARTIKELIMPORT4.csv')
    .pipe(csv({separator: ';'}))
    .on('data', (row) => {
        //console.log(row.size);

        singleSizeAr = row.size.split(',')
        singleSizeAr.forEach(size => {
            let t = row;
            t.size = size;


            // console.log(t);
           // newAr.push(t)
            //t.size pusshts richtig...
            newAr.push(t.size);

        })
        singleSizeAr = []
    })
    .on('end', () => {
        //console.log(newAr);
        console.log('CSV file successfully processed');
    });
