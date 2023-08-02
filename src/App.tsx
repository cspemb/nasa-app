import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import reactSweetStateLogo from './assets/react-sweet-state.png';
import './App.css';
import { Button, Link } from '@mui/material';
import axios from 'axios';

interface TestResponse {
	message: string;
}

function App() {
	const [count, setCount] = useState(0);
	const [testMessage, setTestMessage] = useState('');

	const getTestMessage = () =>
		axios.get<TestResponse>('/api/v1/hello').then((res) => {
			console.log(res.data.message);
			setTestMessage(res.data.message);
		});

	useEffect(() => {
		getTestMessage();
	}, []);

	return (
		<>
			<div>
				<Link
					href="https://atlassian.github.io/react-sweet-state"
					target="_blank"
				>
					<img alt="Vite logo" className="logo" src={reactSweetStateLogo} />
				</Link>
				<Link href="https://vitejs.dev" target="_blank">
					<img alt="Vite logo" className="logo" src={viteLogo} />
				</Link>
				<Link href="https://react.dev" target="_blank">
					<img alt="React logo" className="logo react" src={reactLogo} />
				</Link>
			</div>
			<h1>Simple Nasa App</h1>
			<div className="card">
				<button onClick={() => setCount((prevCount) => prevCount + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the any of the logos to learn more
			</p>
			<Button onClick={getTestMessage}>Test Request</Button>
			<p>{testMessage}</p>
		</>
	);
}

export default App;
