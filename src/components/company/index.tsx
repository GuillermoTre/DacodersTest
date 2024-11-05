import React from 'react';
import { CardContainer, MainText, Text } from './styled';
import plus from '../../assets/images/plus.png';

interface Props {
  acronym: string;
  name: string;
}

const Company = ({ acronym, name }: Props) => {
  return (
    <CardContainer>
      <MainText>{acronym}</MainText>
      <Text>{name}</Text>
      <img src={plus} alt="plus" />
    </CardContainer>
  );
};

export default Company;
