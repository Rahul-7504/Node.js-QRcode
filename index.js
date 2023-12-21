const qr=require("qrcode");

const data={
   
    "Linkedin":"https://www.linkedin.com/in/rahul-sonawane-a68a1a262"

}

const stJson=JSON.stringify(data)


qr.toFile('qr.png',stJson, function (err) {
    if (err) throw err
    console.log('QR code is generated')
  });