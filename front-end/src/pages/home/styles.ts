import styled from 'styled-components';
import Laco from '../../assets/images/png/laco.png';

export const DsFlex = styled.div`
	img {
		width: 100%;
	}

	.title {
		display: flex;
		align-items: center;
		
		.traco {
			height: 2px;
			width: 50px;
			background-color: #575756;
			margin-left: 10px;
		}
	}

	.box {
		margin-bottom: 20px;
		color: #575756;

		@media(min-width: 75em) {
			display: flex;
			align-items: center;
		}

		> div {
			flex: 1;
		}

		&:last-of-type {
			flex-direction: row-reverse;

			.content-box {
				> div {
					width: 95%;
					margin: 0;
					max-width: 385px;
				}
			}
		}
	}

	h1 {
		margin: 43px 0 36px 0;
		font: normal normal 600 48px/60px Canaro;		
		width: 352px;
		font-weight: 600;
	}

	span {
		font-size: 30px;
		font-weight: 600;
		font-family: CanaroW00-Book;
	}

	p {
		font-size: 16px;
		line-height: 21px;
	}

	button {
		margin-top: 41px;
	}

	@media(min-width: 75em) {
		.content-box {
			> div {
				width: 95%;
				margin: 0 auto;
				max-width: 385px;
			}
		}
	}
`;

export const Form = styled.form`
	background-color: #FBFBFB;
	padding: 67px 38px;
	box-shadow: 7px 7px 15px #9C9C9C29;

	.ds-flex {
		display: flex;
		flex-direction: column;

		@media(min-width: 75em) {
			flex-direction: row;
		}
	}

	.button-container {
		text-align: right;
		margin-top: 20px;
	}

	fieldset {
		border: 0;
		flex: 1;

		@media(min-width: 75em) {
			&:first-of-type {
				margin-right: 20px;
			}
		}
	}

	textarea {
		width: 100%;
		background-color: #F4F4F4;
		border: 0;
		padding: 0 26px;
		color: #333333;
		resize: none;
		border-radius: 20px;
		height: 100%;
		padding: 28px 26px;
		margin-top: 20px;

		@media(min-width: 75em) {
			& {
				margin-top: 0px;
			}
		}
	}

	input {
		width: 100%;
	}
`;

export const ContactContainer = styled.div`
	margin-top: 80px;

	.header {
		text-align: center;
		color: #575756;

		h1 {
			margin-bottom: 10px;
			font: normal normal 600 50px/60px Canaro;
		}
	}

	.icons {
		margin-top: 23px;
		margin-bottom: 41px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.icon {
		background-color: #FBFBFB;
		padding: 18px 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0 20px;
		color: #E42313;

		span {
			display: block;
			margin-left: 5px;
		}
	}
`;

export const ContainerCustom = styled.div`
	float: left;
	position: relative;
	width: 100%;

	.container {
		padding: 0;
	}

	@media(min-width: 75em) {
		> .container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
		}
	}

	.content-custom {
		width: 95%;
		background-color: #FBFBFB;
		background-image: url(${Laco});
		background-size: contain;
		background-repeat: no-repeat;
		background-position: top top;
		height: 100vh;

		@media(min-width: 75em) {
			height: 825px;
		}
	}

	.box {
		margin-bottom: 20px;
		color: #575756;
		position: relative;

		@media(min-width: 75em) {
			.my-slick {
				position: absolute;
				top: 0;
				right: -100px;
				max-width: 725px;
			}


			.item {
				width: 110%;

				img {
					max-width: none;
					width: 100%;
				}
			}

			display: flex;
			align-items: center;
			height: 825px;
		}

		> div {
			flex: 1;
			position: relative;
		}

		.content-box {
			flex: 1;

			> div {
				width: 95%;
				margin: 0;
				max-width: 385px;
			}
		}	
	}

	.title {
		display: flex;
		align-items: center;
		
		.traco {
			height: 2px;
			width: 50px;
			background-color: #575756;
			margin-left: 10px;
		}
	}

	h1 {
		margin: 43px 0 36px 0;
		font: normal normal 600 48px/60px Canaro;		
		width: 352px;
		font-weight: 600;
	}

	span {
		font-size: 30px;
		font-weight: 600;
		font-family: CanaroW00-Book;
	}

	p {
		font-size: 16px;
		line-height: 21px;
	}
`;

export const SlickContainer = styled.div`
	width: 100%;
	float: left;

	.arrows {
		display: flex;
		margin-bottom: 10px;

		@media(min-width: 75em) {
			margin-top: 147px;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 36px;
			height: 36px;

			&:first-of-type {
				margin-right: 60px;
			}

			border: 1px solid #575756;
			color: #575756;
		}
	}

	.add {
		position: absolute;
		bottom: 10px;
		right: 10px;
		color: #fff;
		
		svg {
			cursor: pointer;
		}
	}

	.item {
		position: relative;

		.text {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			color: #fff;

			background-color: rgba(0, 0, 0, 0.65);

			h1 {
				margin-bottom: 20px;
			}
		}
	}

	.slick-dots li button:before
    {
        font-size: 20px;
        line-height: 20px;
		color: #fff;
    }

	.slick-dots {
		position: relative;
		top: -50px;
	}
`;
 export const Loading = styled.div`
 	display: flex;
 	align-items: center;
 	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 9999;
 `;
