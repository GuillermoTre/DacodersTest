import { FC } from 'react';
import { Container, IconDiv, IconContainers, LogoContainer } from './styled';
import logoSimple from '../../assets/images/logoSimple.png';
import icon from '../../assets/images/icon.png';
import { useNavigate } from 'react-router-dom';

const Sidebar: FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <img
          src={logoSimple}
          onClick={() => navigate('/Dashboard')}
          alt="logo"
        ></img>
      </LogoContainer>
      <IconDiv>
        <IconContainers>
          <img src={icon} alt="icon"></img>
          <img src={icon} alt="icon"></img>
          <img src={icon} alt="icon"></img>
        </IconContainers>
        <IconContainers>
          <img src={icon} alt="icon"></img>
          <img src={icon} alt="icon"></img>
          <img src={icon} alt="icon"></img>
        </IconContainers>
      </IconDiv>
    </Container>
  );
};

export default Sidebar;
