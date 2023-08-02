import express from 'express';
import path from 'path';
import fs from 'fs/promises';

const router = express.Router();

const environment = process.env.NODE_ENV;

const parseManifest = async () => {
	if (environment !== 'production') {
		return {};
	}

	console.log(path.resolve());

	const manifestPath = path.join(path.resolve(), 'dist', 'manifest.json');
	const manifestFile = await fs.readFile(manifestPath);

	return JSON.parse(manifestFile.toString());
};

router.get('/*', async (_req, res) => {
	const data = {
		environment,
		manifest: await parseManifest(),
	};

	res.render('index.ejs', data);
});

export default router;
