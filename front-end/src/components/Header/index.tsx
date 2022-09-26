import React from 'react';
import { HeaderContainer, MenuMobile } from './styles';
import Container from '../Container';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
	const [menuMobile, setMenuMobile] = React.useState(false);

	const handleMenu = () => {
		setMenuMobile(!menuMobile);
	}

	return(
		<>
			<HeaderContainer>
				<Container>
					<div className="ds-flex">
						<ul>
							<a title="Quem somos" href="#quem-somos">
								<li>Quem somos</li>
							</a> 
							<a title="Equipe" href="#equipe">
								<li>Equipe</li>
							</a> 
							<a title="Espaço" href="#espaco">
								<li>Espaço</li>
							</a> 
							<a title="Contato" href="#contato">
								<li>Contato</li>
							</a> 
							<li id="search">
								<SearchIcon />
							</li>
						</ul>
					</div>
					<div id="hamburguer">
						<MenuIcon onClick={handleMenu} fontSize="large"/>
					</div>
					{menuMobile && (
						<MenuMobile>
							<CloseIcon fontSize="large" onClick={handleMenu}/>
							<ul>
								<a onClick={() => handleMenu()} title="Quem somos" href="#quem-somos">
									<li>Quem somos</li>
								</a> 
								<a onClick={() => handleMenu()} title="Equipe" href="#equipe">
									<li>Equipe</li>
								</a> 
								<a onClick={() => handleMenu()} title="Espaço" href="#espaco">
									<li>Espaço</li>
								</a> 
								<a onClick={() => handleMenu()} title="Contato" href="#contato">
									<li>Contato</li>
								</a> 
								<li id="search">
									<SearchIcon />
								</li>
							</ul>
						</MenuMobile>
					)}
				</Container>
			</HeaderContainer>
		</>
	);
}

export default Header;
