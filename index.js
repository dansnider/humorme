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

// show all events
app.get('/showEvents', (req, res) => {
	store.allEvents()
	.then(function(data) {
		res.send(data);
	});
});

app.listen(7555, () => {
	console.log('Server running on http://localhost:7555');
});