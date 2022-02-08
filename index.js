const express = require('express');
const qrcode = require('qrcode');
let app = express();

app.get('/',(req,res) => {
    res.sendFile('G:/J-Pay/home.html');
});

app.get('/api/qrcode',(req,res) =>{
    let amt = req.query.amt;
    qrcode.toDataURL(`upi://pay?pa=jaynil@jio&pn=THAKKAR JAYNIL MAHESHKUMAR&am=${amt}`, function (err, url) {
        res.send(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Payout JPay</title>
                        <style>
                            body{
                                height: 95vh;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;
                            }
                            h1{
                                text-align: center;
                            }
                            div{
                                display: flex;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Scan & Pay</h1>
                        <div><img src="${url}" alt="qrcode"></div>
                        <div><h3>Amount : <h1>₹${amt}</h1></h3></div>
                    </body>
                    </html>`)
    });

});

let portNumber = process.env.PORT || port;
app.listen(portNumber, () => console.log("Connected"));