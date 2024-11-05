import styled from '@emotion/styled';
import background from '../../assets/images/background.png';

export const HeaderContainer = styled.div`
  border-bottom-left-radius: 5px 5px;
  border-bottom-right-radius: 5px 5px;
  background-image: url(${background});
  background-size: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
export const Section = styled.div`
  gap: 10px;
`;

export const HeaderText = styled.label`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const SubText = styled.label`
  color: white;
  font-size: 20px;
`;

export const Text = styled.label`
  color: white;
  font-size: 15px;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 25px;
  flex-direction: row;
`;
