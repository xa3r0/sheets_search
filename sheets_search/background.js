chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "search") {
    // Use the Google Sheets API or other methods to perform the search on the Google Sheet
    // You'll need to set up the API credentials and perform the search action here
    // Example: You can open a new tab with the search query
    chrome.tabs.create({ url: `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit#gid=0&range=${request.term}` });
  }
});
