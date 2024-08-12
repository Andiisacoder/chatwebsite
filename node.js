const express = require('express');
const Pusher = require('pusher');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const pusher = new Pusher({
    appId: "1848611",    // Corrected from app_id to appId
    key: "9924bb5667ccb0a6f82d",
    secret: "92e7fa9f6cbbb7890509",
    cluster: "eu",
    useTLS: true
});

app.post('/send-message', (req, res) => {
    const message = req.body.message;
    pusher.trigger('public-chat', 'message', { message: message });
    res.status(200).send('Message sent');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
