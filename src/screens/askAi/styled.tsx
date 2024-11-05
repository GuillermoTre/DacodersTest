import styled from '@emotion/styled';

export const Container = styled.div`
    padding 5%;
    height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export const HeaderText = styled.label`
  color: black;
  font-size: 25px;
  font-weight: bold;
  align-self: center;
  padding-right: 20%;
`;

export const SubText = styled.label`
  color: black;
  font-size: 16px;
  align-self: center;
`;

export const ResponseInput = styled.textarea`
  width: 100%;
  padding-left: 10px;
  paddding-top: 10px;
  border: 2px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 16px;
  height: 200px;
  wrap: 'soft';
`;

export const ImageContainer = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
`;

export const ImageContainerAlt = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap 3px;
  padding: 2%;
  width: 10%;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap 3px;
  align-items: center;
  width: 100%;
`;

export const QuestionInput = styled.input`
  width: 100%;
  background-color: grey;
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 80%;
`;

export const IconsContaineSection = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  height: 700px;
  display: flex;
  align-items: flex-end;
`;

export const QuestionInputAlt = styled.input`
  align-self: flex-end;
  width: 100%;
  background-color: white;
  border: 2px solid lightgrey;
  color: black;
  font-weight: bold;
  font-size: 16px;
  height: 40px;
`;
