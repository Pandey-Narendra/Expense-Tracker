import React from 'react';

import './Card.css';

const Card = (props) => {
	// prop.className is CSS class pass through a props when calling this component.
	const classes = 'card ' + props.className;

	// props.children returns the code wrapped by this component.
	return <div className={classes}>{props.children}</div>;
};

export default Card;
