import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 72px 48px;
  display: flex;
  flex-direction: column;
  background-color: #1b093c;
  gap: 360px;
`;

export const Form = styled.div`
  width: 40%;
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label`
  display: flex;
  color: white;
  align-self: flex-start;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const LabelError = styled.label`
  display: flex;
  color: red;
  align-self: flex-start;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 70%;
`;

export const FormButton = styled(Button)`
  width: 70%;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #2d3648;
  color: white;
  font-size: 16px;
  cursor: pointer;
  disabled-button: {
    backgroundColor: grey;'
  }
`;

export const FormHeader = styled.label`
  font-size: 40px;
  color: white;
  align-self: center;
  font-weight: bold;
  margin-bottom: 24px;
`;
