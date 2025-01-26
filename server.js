const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51QfHqWKzJEUWGfGVRQaFZDelAx48v4klZp8ob1Llm3fS0LxvDSmsAx4I7YOmTDMPKupj0XKhBywwT8a2lPwRxNcq008wA7b7n3'); // Replace with your Stripe secret key

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Enable CORS (if frontend is on a different port)
const cors = require('cors');
app.use(cors()); // This will allow cross-origin requests

// Endpoint to create Payment Intent
app.post('/create-payment-intent', async(req, res) => {
    const { paymentMethodId } = req.body;
    console.log('Received paymentMethodId:', paymentMethodId);

    try {
        // Create Payment Intent with the provided Payment Method
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000, // Amount in cents ($50.00)
            currency: 'usd',
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
        });

        // Log the payment intent details for debugging
        console.log('Created Payment Intent:', paymentIntent);

        // Send client secret to the frontend to confirm payment
        res.send({ client_secret: paymentIntent.client_secret });
    } catch (err) {
        // Log error details
        console.error('Error creating Payment Intent:', err);

        // Send error response
        res.status(500).send({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});