import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  float: center;
  top: 10%;
  left: 28%;
  width: 50%;
  height: 88%;
  margin: auto;
  z-index: 2;
  position: absolute;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
  gap: 3px;
`;

export const SectionLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const HeaderText = styled.label`
  font-size: 25px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2%;
`;

export const SubText = styled.label`
  color: black;
  font-size: 15px;
`;

export const SubTextAlt = styled.label`
  color: grey;
  font-size: 15px;
`;

export const WarningText = styled.label`
  color: red;
  font-size: 20px;
`;

export const CheckLabel = styled.label`
  color: grey;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
`;

export const ImageClose = styled.img`
  width: 40px;
  height: 40px;
  align-self: flex-end;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding-left: 10px;
  paddding-top: 10px;
  border: 2px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 16px;
  height: 50px;
`;

export const StyledInputAlt = styled.textarea`
  width: 100%;
  padding-left: 10px;
  paddding-top: 10px;
  border: 2px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 16px;
  height: 67px;
  wrap: 'soft';
`;

export const SelectComponent = styled(Select)`
  width: 100%;
  padding-left: 10px;
  paddding-top: 10px;
`;

export const CheckContainer = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  gap: 5px;
  justify-content: space-between;
`;

export const CheckRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CheckOption = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  gap 2%;
`;

export const PrimaryButton = styled(Button)`
  background-color: #e8e5f9;
  border: 1px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  width: 40%;
  color: purple;
  font-weight: bold;
  disabled-button: {
    backgroundColor: red;'
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 1px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  width: 40%;
  color: black;
`;
