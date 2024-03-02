# REE-REPORTER

## Spanish Electricity Market Reporting Application

This application generates Excel format reports with electricity pricing for the Spanish electricity market, specifically for the PVPC (Voluntary Price for the Small Consumer) and SPOT markets. The generated reports are automatically sent via email to a subscriber list stored in Firebase Cloud Firestore.

## Features

- Generation of Excel reports with the latest prices from the Spanish electricity market (PVPC and SPOT).
- Automatic sending of reports to an email list stored in Firebase Cloud Firestore.
- Regular updates to provide the most recent information.

## Technologies Used

- Node.js
- Firebase Cloud Firestore for data storage.
- `exceljs` for creating Excel files.
- `nodemailer` for sending emails.

## Setup

To run the application, you need to follow these steps:

1. Clone the repository:

git clone https://github.com/agimenez122/ree-reporter.git


2. Install the dependencies:

npm install


3. Configure the environment variables:
   Create firebase-credentials.js and mail-config.js files from the templates you will find in the src/config path, create them in the same path and fill in the parameters for the email sending account and the firebase database.

4. Run the application:

npm start


## Usage

Once configured and executed, the application will automatically generate and send the reports to the specified email list in the Firestore database according to the established schedule.

## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and write tests if necessary.
4. Submit a pull request with your changes.

## License

MIT License

Copyright (c) 2024 Andrés Giménez Perales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
