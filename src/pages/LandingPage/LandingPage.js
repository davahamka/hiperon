import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
	},
}));

function LandingPage() {
    const classes = useStyles();
    
	return (
		<div className={classes.root}>
			<Typography>Assalamulaikum</Typography>
			<Button variant="text" color="primary" component={Link} to="/register">
				Register?
			</Button>
			<Button variant="text" color="primary" component={Link} to="/login">
				Login?
			</Button>
		</div>
	);
}

export default LandingPage;
