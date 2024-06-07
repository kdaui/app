const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1248651653712973824/1vCk57rap9SuR70unk3UC4FWPVG8ym2T6yYMCVOI4HhYU2uniBxfc_Ny_Wk6RnZdkINB';

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/send-message', async (req, res) => {
    const { message } = req.body;

    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: message
        });
        res.json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
