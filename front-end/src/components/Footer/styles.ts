import styled, { createGlobalStyle } from 'styled-components';

export const FooterContainer = styled.footer`
	.container {
		padding: 0;
	}

	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 225px;
	padding: 51px 0;
	background-color: #575756;

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;;
		list-style: none;
		position: relative;
	}

	li {
		color: #FFFFFF;
		margin: 0 10px;
	}

	.right {
		display: flex;
		flex-wrap: wrap;

		@media(min-width: 75em) {
			& {
				position: absolute;
				right: 0;
			}
		}
	}

	.hr {
		height: 1px;
		background-color: #FFFFFF;
		margin-bottom: 40px;
		margin-top: 63px;
	}

	.copy {
		font: normal normal normal 16px/21px Segoe UI;
		text-align: center;
		color: #fff;
	}
`;

export const BodyStyle = createGlobalStyle`
	.App {
		padding-bottom: 225px;
	}
`;
