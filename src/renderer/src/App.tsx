import './App.css'

import { Tldraw } from 'tldraw'
import './index.css'

export default function App() {
	return (
		<div style={{ position: 'fixed', inset: 30 }}>
			<Tldraw />
		</div>
	)
}
