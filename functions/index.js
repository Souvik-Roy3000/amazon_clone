const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51JmCVzSA4wm7vFcSdEVPdVmrBAwtHyYmZfLykCLNzwqBw6kdHwL3N1gnbbjMy2KHps4F0vpzjOzE7z1vKTThldBC00d2NTkXGg");
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("hello World"));
app.get("/roy", (req, res) => res.status(200).send("hello Souvik"));
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
exports.api = functions.https.onRequest(app);














