import './JournalItem.css';

const JournalItem = ({ title, date, text }) => {
	const formattedDate = new Intl.DateTimeFormat('ru-Ru').format(date);
	
	return (
		<>
			<h2 className='journal-item_header'>{title}</h2>
			<h2 className='journal-item_body'>
				<div className='journal-item__date'>{formattedDate}</div>
				<div className='journal-item__text'>{text}</div>
			</h2>	
		</>
	);
};

export default JournalItem;