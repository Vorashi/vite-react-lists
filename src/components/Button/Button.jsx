import './Button.css';
import { useState } from 'react';

const Button = () => {
	const [text, setText] = useState('Сохранить');
	const clicked = () => {
		setText(prevState => prevState + '!');
		console.log('Hello!');
	};
	
	return (
		<>
			<button className='button accent' type='button' onClick={clicked}>{text}</button>
		</>
	);
};

export default Button;