# GTMetrix Tracker

This node.js package gathers data from GTMetrix API and puts it to your defined Google Sheet document.

Using `gtmetrix` library (docs here: https://www.npmjs.com/package/gtmetrix)
Using `google-spreadsheet` library (docs here: https://www.npmjs.com/package/google-spreadsheet)

## Configuration

1. Register in https://gtmetrix.com/ and gather your API details:
  -- Email
  -- Api key
2. Enable Google Drive API in your https://console.developers.google.com Google Developers Console.
3. Create credentials:
  -- Which API are you using? **Google Drive API**
  -- Where will you be calling the API from? **Web server**
  -- What data will you be accessing? **Application data**
  -- Are you planning to use this API with App Engine or Compute Engine? **No, I'm not using them**
  -- Add Project Editor permissions for it.
4. Create a Google Sheets spreadsheet and get the long ID in the URL (This will be your Spreadsheet identifier).
5. Share the Spreadsheet to the long email address of the user you created in Google Developers Console and enable Write access.
6. In the `/config` folder, copy .env.example and paste as `.env`. Add GTMetrix data and Google Sheet ID configuration there.
7. Update `urls_to_check.json` file with URLs you want to check (as many as you want). Each URL must have a different SheetNumber (which is the number of the sheet in Google Spreadsheet document).

## Launch
1. Install node dependencies with `npm install`
2. You can set up a cron job to run `node index.js` as many times as you want.
