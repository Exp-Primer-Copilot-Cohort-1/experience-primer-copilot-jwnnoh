// Create web server

var express = require('express');
var app = express();

// Set port
app.set('port', process.env.PORT || 3000);

// Set static directory
app.use(express.static(__dirname + '/public'));

// Set view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Set body parser
app.use(require('body-parser').urlencoded({ extended: true }));

// Set cookie parser
app.use(require('cookie-parser')(credentials.cookieSecret));

// Set session
app.use(require('express-session')({
	resave: false,
	saveUninitialized: false,
	secret: credentials.cookieSecret
}));

// Set flash
app.use(function (req, res, next) {
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	next();
});

// Set routes
app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/thank-you', require('./routes/thank-you'));
app.use('/newsletter', require('./routes/newsletter'));
app.use('/contest/vacation-photo', require('./routes/contest/vacation-photo'));
app.use('/contest/vacation-photo-ajax', require('./routes/contest/vacation-photo-ajax'));
app.use('/contest/vacation-photo-vue', require('./routes/contest/vacation-photo-vue'));
app.use('/contest/vacation-photo-jquery', require('./routes/contest/vacation-photo-jquery'));
app.use('/contest/vacation-photo-jquery-ajax', require('./routes/contest/vacation-photo-jquery-ajax'));
app.use('/contest/vacation-photo-jquery-upload', require('./routes/contest/vacation-photo-jquery-upload'));
app.use('/contest/vacation-photo-jquery-upload-ajax', require('./routes/contest/vacation-photo-jquery-upload-ajax'));
app.use('/contest/vacation-photo-jquery-upload-ajax-progress', require('./routes/contest/vacation-photo-jquery-upload-ajax-progress'));
app.use('/contest/vacation-photo-jquery-upload-ajax-progress-multiple', require('./routes/contest/vacation-photo-jquery-upload-ajax-progress-multiple'));
app.use('/contest/vacation-photo-jquery-upload-ajax-progress-multiple-formidable', require('./routes/contest/vacation-photo-jquery-upload-ajax