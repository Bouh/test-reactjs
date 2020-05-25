import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchBar = ({}) => {
	
	const styles = {
		searchBox :{
			border: '#AAAAAA 1px solid',
			borderRadius : 4,			
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			font: {fontSize : 20},
		},
	};
	
	const [textValue, setTextValue] = React.useState("");
	
	const startSearch = (e) => {
		if(e.key === 'Enter' || e.key === undefined) {
			setTextValue("enter");
		}
	};
	
	return (
		<div style={styles.searchBox} >
			<SearchIcon onClick={(e)=>{startSearch(e)}} />
			<InputBase 
			style={styles.searchBox.font}
			placeholder="Search…"
			value={textValue}
			onChange={(e)=>{
				setTextValue(e.target.value)
			}}
			onKeyUp={(e)=>{startSearch(e)}} 
			/>
			<CloseIcon onClick={()=>setTextValue("")} />
		</div>
	);
};


export default SearchBar;