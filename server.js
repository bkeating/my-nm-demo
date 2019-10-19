const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

// Pull in Express's JSON middleware
app.use(express.json());

// Static middleware to serve up react app media (and html)
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint that our React app POSTs to
app.post('/submit', (req, res) => {
  // Destructure what we need from the request body
  const {
    id,
    firstName,
    lastName,
    gender,
    addressLine1,
    addressLine2,
    addressCity,
    addressState,
    addressZip,
    childList
  } = req.body;

  // Open a write stream into the CSV file
  const csvFile = fs.createWriteStream('output.csv', { flags: 'a' });

  // Parent entry
  csvFile.write(
    [
      id,
      firstName,
      lastName,
      gender,
      '',  // dateOfBirth, which is unused on parent records
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip,
      ''  // parentId, which is unused on parent records
    ].join()
    + '\r\n'
  );

  // Child entries
  childList.map((c) => (
    csvFile.write(
      [
        c.id,
        c.firstName,
        c.lastName,
        c.gender,
        c.dateOfBirth,
        '',
        '',
        '',
        '',
        '',
        id  // parentId--a poor man's relation
      ].join()
      + '\r\n'
    )
  ));

  // Close out the stream
  csvFile.end()

  // Let the client know of the great news
  res.json({ 'success': true });
});

// Serve the generated build of our React app (assuming ./build/ exists!)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Offer up the CSV file as a download
app.get('/download', (req, res) => {
  res.download('./output.csv');
});

app.listen(process.env.PORT || 9000);
