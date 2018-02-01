// https://github.com/CompuIves/codesandbox-client/blob/master/packages/app/src/app/components/Alert.js
// https://github.com/CompuIves/codesandbox-client/blob/master/packages/app/src/app/components/Switch.js
// https://github.com/carbon-design-system/carbon-components-react/blob/master/src/components/Card/Card.js
// http://www.carbondesignsystem.com/add-ons/card/code
// https://github.com/carbon-design-system/carbon-components/blob/master/src/components/card/_card.scss
// https://reactjs.org/docs/typechecking-with-proptypes.html
// https://github.com/trendmicro-frontend

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color } from '../variables';

const Container = styled.div`
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    box-orient: vertical;
    box-direction: normal;
	flex-direction: column;
	margin: 10px;
    width: 12.5rem;
    height: 15rem;
    background-color: #fff;
    border: 1px solid #dfe3e6;
    &:focus {
        outline: 1px solid #3d70b2;
    }
`;

const Card = (props) => {
	
	const { children, onBlur, onClick, onFocus, onKeyDown, onKeyUp, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp } = props;
	
	return (
		<Container {...props}
			onBlur={onBlur && onBlur(this)}
			onFocus={onFocus && onFocus(this)}
			onClick={onClick && onClick(this)}
			onFocus={onFocus && onFocus(this)}
			onKeyDown={onKeyDown && onKeyDown(this)}
			onKeyUp={onKeyUp && onKeyUp(this)}
			onMouseDown={onMouseDown && onMouseDown(this)}
			onMouseEnter={onMouseEnter && onMouseEnter(this)}
			onMouseLeave={onMouseLeave && onMouseLeave(this)}
			onMouseUp={onMouseUp && onMouseUp(this)}
		>
			{children}
		</Container>
	)
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tabIndex: PropTypes.number,
	onBlur: PropTypes.func,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	onMouseDown: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	onMouseUp: PropTypes.func,
};

Card.defaultProps = {
	tabIndex: 0,
};

export default Card;