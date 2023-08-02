import express from 'express';
import path from 'path';
import homepageRouter from './homepageRouter';
import assetsRouter from './assetsRouter';

const port = process.env.PORT || 3300;
const publicPath = path.join(path.resolve(), 'public');
const distPath = path.join(path.resolve(), 'dist');

const app = express();

app.set('view engine', 'ejs');

app.get('/api/v1/hello', (_req, res) => {
	res.json({ message: 'Hello, world!' });
});

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(distPath));
} else {
	app.use('/', express.static(publicPath));
	app.use('/src', assetsRouter);
}

app.use(homepageRouter);

app.listen(port, () => {
	console.log('Server listening on port', port);
});
