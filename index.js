const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const gtmetrix = require ('gtmetrix') ({
    email: process.env.GTMETRIX_EMAIL,
    apikey: process.env.GTMETRIX_API_KEY
});

let testUrls = require('./urls_to_check.json');

testUrls.forEach(function(endpoint) {
    runGtmetrixTest(endpoint);
});

function runGtmetrixTest(endpoint) {
    gtmetrix.test.create ({
        url:endpoint.url
    }).then (data =>
        gtmetrix.test.get (data.test_id, 5000).then(function(results){
            console.log(results);
            addResultToSheet(endpoint.sheetNumber, results.results);
        }));
}

function addResultToSheet(sheetNumber, results) {
    let datetime = new Date();

    let GoogleSpreadsheet = require('google-spreadsheet');
    let creds = require('./config/client_secret.json');

    let doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    results.date = datetime;

    doc.useServiceAccountAuth(creds, function (err) {
        doc.addRow(sheetNumber, results, function(err, rsp) {
            console.log(err, rsp);
        })
    });
}