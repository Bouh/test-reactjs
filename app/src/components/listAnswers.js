import React from 'react';
import Answer from './answer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ListAnswers = ({limit}) => {
	
	const styles = {
		listAnswers :{
			border: '#AAAAAA 1px solid',
			borderRadius : 4,			
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			
		},
	};
	
	const data = [
	{title:'test0',description:'blabla'},
	{title:'test1',description:'blabla'},
	{title:'test2',description:'blabla'}
	];
	

	return (
	
		<div style={styles.listAnswers} >
			<List>
			{data.map((value, index) => {
				return index < limit ?  <ListItem ><Answer data={value} /></ListItem>: null;
				
			})}
				
			 </List>
		</div>
	);
};

export default ListAnswers;