/**
 * Google Apps Script for handling RSVP form submissions
 * This script receives form data and appends it to a Google Sheet
 */

// The doGet function handles GET requests (not used in this application)
function doGet(e) {
  return HtmlService.createHtmlOutput("The web app is running correctly, but this URL is meant for POST requests from your form.");
}

// The doPost function processes form submissions
function doPost(e) {
  try {
    // Get access to the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Extract form data from the POST request
    var name = e.parameter.name;
    var phone = e.parameter.phone;
    var countryCode = e.parameter.countryCode;
    var guests = e.parameter.guests;
    var companions = e.parameter.companions;
    var fullPhone = countryCode + phone;
    
    // Add a timestamp for when the RSVP was submitted
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      name,
      fullPhone,
      guests,
      companions
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'RSVP recorded successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response if something goes wrong
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
