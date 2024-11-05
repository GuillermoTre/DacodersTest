import React from 'react';
import {
  HeaderContainer,
  Section,
  HeaderText,
  SubText,
  Text,
  ButtonContainer,
} from './styled';
import search from '../../assets/images/search.png';
import upload from '../../assets/images/upload.png';
import aimage from '../../assets/images/aimage.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <HeaderText>AURA</HeaderText>
      </Section>
      <Section>
        <SubText>Augmented Universal Research Assistant</SubText>
      </Section>
      <Section>
        <Text>
          Your in one single intuitive platform along side with your team
        </Text>
      </Section>
      <Section>
        <ButtonContainer>
          <img src={search} alt="search" />
          <img src={upload} alt="upload" />
          <img src={aimage} alt="ai" />
        </ButtonContainer>
      </Section>
    </HeaderContainer>
  );
};

export default Header;