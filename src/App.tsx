import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import reactSweetStateLogo from './assets/react-sweet-state.png';
import './App.css';
import { Link } from '@mui/material';

function App() {
	const [count, setCount] = useState(0);

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
		</>
	);
}

export default App;
