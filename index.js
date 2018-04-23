const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/createEvent', (req, res) => {
	store.createEvent({
		name: req.body.name,
		location: req.body.location
	})
	.then(() => res.sendStatus(200));
});

app.listen(7555, () => {
	console.log('Server running on http://localhost:7555');
})