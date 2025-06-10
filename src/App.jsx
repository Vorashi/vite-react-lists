import React from 'react';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import './App.css';

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
			<h1>Привет тут на React пишем жестко!</h1>
			<p>Кстати правильный способ не фигачить дивы</p>
			<JournalItem 
				title={data[0].title}
				date={data[0].date}
				text={data[0].text}
			/>
			<JournalItem 
				title={data[1].title}
				date={data[1].date} 
				text={data[1].text}
			/>
			<JournalItem 
				title={data[2].title} 
				date={data[2].date} 
				text={data[2].text}
				/>
			<Button name="Сохранить" />
	 </>
  );
}

export default App;
