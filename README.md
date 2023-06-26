# QR-Code-Generator
This is a simple **Node.js command-line tool** that allows users to generate a QR code image based on a provided URL. The generated QR code image is saved as "qr_img.png", and the user input URL is saved in a text file named "URL.txt".

## Installation
1. Clone the repository or download the code files.
2. Install the required dependencies by running `npm install`.
## Usage
1. Run the script by executing `node index.js`.
2. Enter the URL when prompted.
3. The script will generate a QR code image and save it as "qr_img.png".
4. The entered URL will be saved in "URL.txt".
5. The success message will be displayed once the process is complete.
## Dependencies
This project utilizes the following npm packages:
* inquirer: For obtaining user input in a command-line interface.
* qr-image: For generating QR code images.
* fs: For file system operations.
