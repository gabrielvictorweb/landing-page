import React from 'react';
import Container from '../../components/Container';
import Woman from '../../assets/images/png/woman.png';
import Man from '../../assets/images/png/man.png';
import Meeting from '../../assets/images/png/meeting.png';
import secondMeeting from '../../assets/images/png/secondMeeting.png';
import { DsFlex, Form, ContactContainer, ContainerCustom, SlickContainer, Loading } from './styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '../../components/Button';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Input from '../../components/Input';
import { IEmail } from '../../interfaces/email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { api } from '../../services/api';
import CircularProgress from '@mui/material/CircularProgress';
import WhatsApp from '../../assets/images/svg/whatsapp.svg';
import WeChat from '../../assets/images/svg/wechat.svg';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveWidth: true,
	arrows: false,
};

const settingsSecond = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveWidth: true,
	arrows: false,
};
  

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const [fields, setFields] = React.useState<IEmail>({
		name: '',
		text: '',
		email: '',
		subject: ''
	})

	const customeSlider = React.createRef<any>();

	const gotoNext = () => {
		customeSlider.current.slickNext()
	}

	const gotoPrev = () => {
		customeSlider.current.slickPrev()
	}

	const handleClose = () => {
		setOpen(false);
	}

	const handleCloseError = () => {
		setError("");
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			setLoading(true);

			await api.post('/email', {...fields})

			setOpen(true);
			setFields({
				text: '',
				name: '',
				email: '',
				subject: ''
			});
		} catch (e) {
			setError("Ocorreu um erro ao enviar o e-mail, tente novamete mais tarde.")
		} finally {
			setLoading(false);
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

    return(
		<>
			<SlickContainer>
				<Slider {...settings}>
					<div className="item">
						<img title="Quem somos" alt="Quem somos" src={Man}/>
						<div className="text">
							<h1>Lorem ipsum dolor sit amet</h1>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</div>
					<div className="item">
						<img title="Quem somos" alt="Quem somos" src={Man}/>
						<div className="text">
							<h1>Lorem ipsum dolor sit amet</h1>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</div>
					<div className="item">
						<img title="Quem somos" alt="Quem somos" src={Man}/>
						<div className="text">
							<h1>Lorem ipsum dolor sit amet</h1>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</div>
				</Slider>
			</SlickContainer>
			<Container tag="section">
				<DsFlex>
					<article id="quem-somos" className="box">
						<div>
							<img title="Quem somos" alt="Quem somos" src={Woman}/>
						</div>
						<div className="content-box">
							<div>
								<div className="title">
									<span>Quem Somos</span>
									<div className="traco"></div>
								</div>
								<h1>Lorem ipsum dolor sit amet.</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus bibendum scelerisque. Duis ornare et risus id faucibus. Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et risus viverra mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ex quis sapien laoreet eleifend.</p>
								<Button type="button">Saiba mais</Button>
							</div>
						</div>
					</article>
					<article id="equipe" className="box">
						<div>
							<img title="Quem somos" alt="Quem somos" src={Meeting}/>
						</div>
						<div className="content-box">
							<div>
								<div className="title">
									<span>Nossa equipe</span>
									<div className="traco"></div>
								</div>							<h1>Lorem ipsum dolor sit amet.</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus bibendum scelerisque. Duis ornare et risus id faucibus. Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et risus viverra mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ex quis sapien laoreet eleifend.</p>
							</div>
						</div>
					</article>
				</DsFlex>
			</Container>
			<ContainerCustom>
				<Container>
					<div id="espaco" className="box">
						<div className="content-box">
							<div>
								<div className="title">
									<span>Nosso espaço</span>
									<div className="traco"></div>
								</div>
								<h1>Lorem ipsum dolor sit amet.</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus bibendum scelerisque. Duis ornare et risus id faucibus. Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et risus viverra mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ex quis sapien laoreet eleifend.</p>
							</div>
						</div>
						<SlickContainer className="my-slick">
							<div className="arrows">
								<div onClick={()=>gotoPrev()}>
									<ArrowBackIcon fontSize="large"/>
								</div>
								<div onClick={() => gotoNext()}>
									<ArrowForwardIcon fontSize="large"/>
								</div>
							</div>
							<Slider ref={customeSlider} {...settingsSecond}>
								<div className="item">
									<img title="Quem somos" alt="Quem somos" src={secondMeeting}/>
									<div className="add">
										<ControlPointIcon fontSize="large"/>
									</div>
								</div>
								<div className="item">
									<img title="Quem somos" alt="Quem somos" src={secondMeeting}/>
									<div className="add">
										<ControlPointIcon fontSize="large"/>
									</div>
								</div>
								<div className="item">
									<img title="Quem somos" alt="Quem somos" src={secondMeeting}/>
									<div className="add">
										<ControlPointIcon fontSize="large"/>
									</div>
								</div>
							</Slider>
						</SlickContainer>
					</div>
				</Container>
				<div className="content-custom"></div>
			</ContainerCustom>

			<Container tag="article">
				<ContactContainer id="contato">
					<div className="header">
						<h1>Fale conosco</h1>
						<p>
							Quer conversar com a Health Clinic? Basta<br/> preencher o formulário abaixo e nós entraremos<br/> em contato assim que possível!
						</p>
					</div>
					<div className="icons">
						<div className='icon'>
							<LocalPhoneIcon />
							<span>Telefone</span>
						</div>
						<div className='icon'>
							<img title="WhatsApp" alt="WhatsApp" src={WhatsApp} />
							<span>WhatsApp</span>
						</div>
						<div className='icon'>
							<img title="WeChat" alt="WeChat" src={WeChat} />
							<span>Wechat</span>
						</div>
					</div>
					<Form onSubmit={handleSubmit}>
						<div className="ds-flex">
							<fieldset>
								<Input maxLength={60} required name="name" onChange={handleChange} value={fields.name} placeholder="Nome"/>
								<Input required name="email" type="email" onChange={handleChange} value={fields.email} placeholder="Email"/>
								<Input maxLength={60} required name="subject" onChange={handleChange} value={fields.subject} placeholder="Assunto"/>
							</fieldset>
							<fieldset>
								<textarea maxLength={255} required onChange={handleChange} value={fields.text} name="text" placeholder="Mensagem"></textarea>
							</fieldset>
						</div>
						<div className="button-container">
							<Button type="submit">Enviar</Button>
						</div>
					</Form>
				</ContactContainer>
			</Container>

			{open && (
				<Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
						Recebemos seu e-mail e entraremos em contato em breve!
					</Alert>
				</Snackbar>
			)}

			{error && (
				<Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleCloseError}>
					<Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
						{error}
					</Alert>
				</Snackbar>
			)}

			{loading && (
				<Loading>
					<CircularProgress />
				</Loading>
			)}
		</>
    );
}

export default Home;
