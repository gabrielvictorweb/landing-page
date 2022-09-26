import styled from 'styled-components';

export const HeaderContainer = styled.header`
	.ds-flex {
		display: none;

		@media(min-width: 75em) {
			display: flex !important;
			justify-content: flex-end;
		}
	}

	.ds-flex ul {
		list-style: none;
		display: flex;
		justify-content: flex-end;
	}	

	li {
		margin: 0 20px;
		color: #575756;
	}

	#search {
		color: red;
	}

	#hamburguer {
		@media(min-width: 75em) {
			display: none !important;
		}
	}
`;

export const MenuMobile = styled.div`
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: #fff;
	color: #333;

	ul {
		list-style: none;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}	

	li {
		font-size: 1.4em;
		margin-top: 30px;
	}

	@media(min-width: 75em) {
		display: none !important;
	}
`;
