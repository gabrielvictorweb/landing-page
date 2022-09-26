import styled from 'styled-components';

export const InputStyle = styled.input`
	padding: 10px;
	border: 2px solid #E3E4E7;
	border-radius: 5px;
	color: #1a1a1a;
	width: 100%;
`;

export const Label = styled.label`
	font-weight: bold;
	display: block;
	margin-bottom: 5px;
`;

export const InputContainer = styled.div`
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 0;
	}
	
	input {
		width: 100%;
		background-color: #F4F4F4;
		border: 0;
		padding: 0 26px;
		color: #333333;

		height: 72px;
		border-radius: 20px;
	}
`;
