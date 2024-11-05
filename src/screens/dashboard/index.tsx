import React from 'react';
import {
  Container,
  InfoContainer,
  HeaderText,
  SubText,
  Text,
  BulletPoints,
  Image,
  Button,
  ImageGoal,
} from './styled';
import mark from '../../assets/images/mark.png';
import goal from '../../assets/images/goal.png';

const Dashboard = () => {
  const user = localStorage.getItem('user');

  return (
    <Container>
      <InfoContainer>
        <HeaderText>Welcome {user}!</HeaderText>
        <SubText>We are so glad to have in Aura.</SubText>
        <Text>
          We have 500+ companies with interviews and data for your investment
          analysis and research.
        </Text>
        <Text>You will be able to:</Text>
        <BulletPoints>
          <Image src={mark} alt="check" />
          <Text>Save companies of your interest and see new entries</Text>
        </BulletPoints>
        <BulletPoints>
          <Image src={mark} alt="check" />
          <Text>Use our AI tool to summarize interviews</Text>
        </BulletPoints>
        <BulletPoints>
          <Image src={mark} alt="check" />
          <Text>Get exclusive data</Text>
        </BulletPoints>
        <BulletPoints>
          <Image src={mark} alt="check" />
          <Text>Common questions</Text>
        </BulletPoints>
        <BulletPoints>
          <Image src={mark} alt="check" />
          <Text>Make reports</Text>
        </BulletPoints>
        <Button>Let's begin!</Button>
      </InfoContainer>
      <ImageGoal src={goal} alt="goal" />
    </Container>
  );
};

export default Dashboard;
