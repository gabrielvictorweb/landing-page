import React from 'react';
import { FooterContainer, BodyStyle } from './styles';
import Container from '../Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIn from '../../assets/images/svg/linkedin.svg';
import Facebook from '../../assets/images/svg/facebook.svg';

const Footer: React.FC = () => {
	return(
		<>
			<FooterContainer>
				<Container>
					<div className="ds-flex">
						<ul>
							<li>Quem somos</li> 
							<li>Especialidades</li> 
							<li>Blog</li> 
							<li>Contato</li> 
							<div className="right">
								<li>
									<img title="LinkedIn" alt="LinkedIn" src={LinkedIn} />
								</li>
								<li>
								<img title="Facebook" alt="Facebook" src={Facebook} />
								</li>
								<li>
									<InstagramIcon/>
								</li>
							</div>
						</ul>
					</div>
					<div>
						<div className="hr"></div>
					</div>
					<div className="copy">
						<p>Health Clinic São Paulo -Todos os Direitos Reservados.</p>
					</div>
				</Container>
			</FooterContainer>
			<BodyStyle />
		</>
	);
}

export default Footer;
