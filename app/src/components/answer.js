import React from 'react';
import Typography from '@material-ui/core/Typography';



const Answers = ({data}) => {
	
	
	
	const styles = {
		Answers :{
			border: '#AAAAAA 1px solid',
			borderRadius : 4,			
			textAlign: 'center',
			display: 'flex',
			
		},
	};
	
	return (
		<div style={styles.Answers} >
			<Typography variant="h5" component="h5">
			{data.title}
			</Typography>
		</div>
	);
};


export default Answers;