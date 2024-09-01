import { css } from '@emotion/react'
import styled from '@emotion/styled';

export const ListItem = styled.li`
	background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
	border-radius: 5px;
	box-shadow: 0px 0px 2px #e3e9ee;
	&:hover {
    	background-color: whitesmoke;
  	}
`;

const getTitleStyling = ({ done } : { done: boolean | undefined}) => css`
  	margin: 0;
	display: 'inline';
	color: ${done ? 'green' : 'unset'};
	text-decoration: ${done ? 'line-through' : 'unset'}
`;

export const Title = styled.h4<{done: boolean | undefined}>`
	${({done}) => getTitleStyling({ done })}
`;

export const DateItem = styled.p`
	margin-top: 5px;
	color: grey;
	font-size: small;
`;

export const Label = styled.span`
  	padding: 3px 5px;
	background-color: silver;
    color: #fffdfc;
	font-size: small;
	float: right;
`;
