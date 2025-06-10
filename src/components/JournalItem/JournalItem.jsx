import './JournalItem.css';

const JournalItem = ({ title, date, text }) => {
	return (
		<>
			<div className='journal-item'>
				<h2 className='journal-item_header'>{title}</h2>
				<h2 className='journal-item_body'>
					<div className='journal-item__date'>{date.toString()}</div>
					<div className='journal-item__text'>{text}</div>
				</h2>	
			</div>
		</>
	);
};

export default JournalItem;