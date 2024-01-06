import { render } from 'preact';
import { Sandpack } from "@codesandbox/sandpack-react";

const App = () => {
	const files = {};
	
	return (
		<div>
			<div>Example</div>
			<Sandpack
				files={files} 
				theme="auto" 
				template="vite-preact"
			/>
		</div>
	);
}

render(<App />, document.getElementById('app'));
