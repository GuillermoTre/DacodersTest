import { FC } from 'react';
import { Container, IconDiv, IconContainers, LogoContainer } from './styled';
import logoSimple from '../../assets/images/logoSimple.png';
import icon from '../../assets/images/icon.png';

const Sidebar: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logoSimple} alt="logo"></img>
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
