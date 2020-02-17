const csv=require('csvtojson');

const csvToJSon = (pathToFile) => {
    csv()
    .fromFile(pathToFile)
    .then((jsonObj)=>{
        console.log(jsonObj);
    });
}

csvToJSon('./test.csv')