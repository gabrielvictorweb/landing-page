import styled from 'styled-components';

interface ButtonProps {
    color?: 'primary' | 'secondary';
}

export const ButtonStyled = styled.button<ButtonProps>`
  	background-color: #E42313;
	color: #fff;
	border-radius: 10px;
	border: 0;
	width: 144px;
	height: 45px;		
	font-weight: bold;
`;
