import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    const qrCode = qr.image(url, { type: "png" });
    qrCode.pipe(fs.createWriteStream("qr_img.png"));

    // 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved.");
    });
    console.log("QR code generated and file saved successfully.");
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
