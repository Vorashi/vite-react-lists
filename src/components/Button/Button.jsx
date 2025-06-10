import './Button.css';

const Button = (props) => {
	return (
		<>
			<button className='button accent' type='button'>{props.name}</button>
		</>
	);
};

export default Button;