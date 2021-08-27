const Express = require('express');
const router = Express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');
const utils = require('../utils/utils');
require('dotenv').config({ path: '../config/.env' });

// Short URL Generator
router.post('/short', async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;

    if (utils.validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {
                const urlId = shortid.generate();
                const shortUrl = `${base}/${urlId}`;
                
                url = await Url.create({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                });
                
                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
});

module.exports = router;
