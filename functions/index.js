const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51JmCVzSA4wm7vFcSdEVPdVmrBAwtHyYmZfLykCLNzwqBw6kdHwL3N1gnbbjMy2KHps4F0vpzjOzE7z1vKTThldBC00d2NTkXGg")

//API



//APP CONFIG
const app = express();


//MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());


//API ROUTES
app.get("/", (req, res) => res.status(200).send("hello World"))
app.get("/roy", (req, res) => res.status(200).send("hello Souvik"))
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("payment request recieved for this amount >>", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//LISTEN COMMAND
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-d3083/us-central1/api












// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
