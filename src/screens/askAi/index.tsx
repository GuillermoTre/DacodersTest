import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderText,
  SubText,
  ResponseInput,
  HeaderSection,
  ImageContainer,
  Section,
  Container,
  QuestionInput,
  IconsContainer,
  ImageContainerAlt,
  IconsContaineSection,
  ContentContainer,
  QuestionInputAlt,
  InputContainer,
} from './styled';
import arrow from '../../assets/images/arrow.png';
import refresh from '../../assets/images/refresh.png';
import favorite from '../../assets/images/favorite.png';
import file from '../../assets/images/file.png';
import fileAlt from '../../assets/images/fileAlt.png';
import like from '../../assets/images/like.png';
import dislike from '../../assets/images/dislike.png';
import burger from '../../assets/images/burger.png';
import axios from 'axios';

const AskAi = () => {
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const key = 'AIzaSyCffXHc6eYl0mouGCq5gZ4AlKY0ueVcPbY';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`;
      const body = { contents: [{ parts: [{ text: question }] }] };
      try {
        const resp = await axios(apiUrl, {
          method: 'POST',
          data: body,
        });
        const result = resp.data;
        const text = result.candidates[0].content.parts[0].text;
        console.log(text);
        setResponse(text);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <ContentContainer>
        <HeaderContainer>
          <Section>
            <ImageContainer src={arrow} />
            <SubText>Return</SubText>
          </Section>
          <HeaderSection>
            <HeaderText>Aura AI</HeaderText>
          </HeaderSection>
        </HeaderContainer>
        <QuestionInput disabled={true} value={question} />
        <ResponseInput disabled={true} value={response} />
        <IconsContainer>
          <ImageContainerAlt src={refresh} />
          <ImageContainerAlt src={favorite} />
          <IconsContaineSection>
            <ImageContainerAlt src={file} />
            <ImageContainerAlt src={fileAlt} />
          </IconsContaineSection>
          <IconsContaineSection>
            <ImageContainerAlt src={like} />
            <ImageContainerAlt src={dislike} />
          </IconsContaineSection>
          <ImageContainerAlt src={burger} />
        </IconsContainer>
        <InputContainer>
          <QuestionInputAlt
            type="text"
            placeholder="Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?"
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputContainer>
      </ContentContainer>
    </Container>
  );
};

export default AskAi;
