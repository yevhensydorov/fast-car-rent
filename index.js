const SERVER_PORT = process.env.PORT || 4000;

const pgp        = require('pg-promise')(),
			express    = require('express'),
			bodyParser = require('body-parser'),
			hbs 			 = require('express-handlebars'),
			app 			 = express();

const db = pgp({
	host: 		   'localhost',
	port: 		   5432,
	database:    process.env.DATABASE,
	user:        process.env.USERNAME,
	password:    process.env.PASSWORD
});

app.engine(
	'hbs',
	hbs({
		defaultLayout: 'main',
		extname: 'hbs'
	})
);
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => { res.render('home') });

app.listen(SERVER_PORT, () => {
  console.info(`Server started at http://localhost:${SERVER_PORT}`);
});