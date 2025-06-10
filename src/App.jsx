import React from 'react';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import './App.css';
import CardButton from './components/CardButton/CardButton';

function App() {
	const data = [
		{
			title: 'Заметка о React #1',
			date: new Date(),
			text: 'Здесь я записал важные особенности для работы с React библиотекой'
		},
		{
			title: 'Прекрасные Советы по Git',
			date: new Date(),
			text: 'Отличные правила для именования коммитов в репозитории'
		},
		{
			title: 'Изучение Express.js',
			date: new Date(),
			text: 'Тут я насобирал информации по правильному взаимодействию с API через Node.js'
		}
	];

	return (
		<>
			<CardButton>
				Новое Дело
			</CardButton>
			<CardButton>
				<JournalItem 
					title={data[0].title}
					date={data[0].date}
					text={data[0].text}
				/>
			</CardButton>
			<CardButton>
				<JournalItem 
					title={data[1].title}
					date={data[1].date} 
					text={data[1].text}
				/>
			</CardButton>
			<CardButton>
				<JournalItem 
					title={data[2].title} 
					date={data[2].date} 
					text={data[2].text}
				/>
			</CardButton>
			<Button/>
		</>
	);
}

export default App;
