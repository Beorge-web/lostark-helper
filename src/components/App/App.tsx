import React, { useEffect } from 'react';
import Header from '../Header/Headet';
import Main from '../Main/Main';

const App: React.FC = () => {
	useEffect(() => {
		document.title = 'LA Helper'
	})
	return (
		<div className='root'>
			<Header />
			<Main />	
		</div>
	);
}

export default App;
