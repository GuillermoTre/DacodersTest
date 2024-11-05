import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 90px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeaderText = styled.label`
  color: purple;
  font-size: 25px;
  font-weight: bold;
`;

export const SubText = styled.label`
  color: black;
  font-size: 20px;
`;

export const ImageSearch = styled.img`
  width: 40%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 10px;
  paddding-top: 10px;
  border: 2px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 20px;
`;

export const ListContainer = styled(List)`
  width: 100%;
  padding-left: 10px;
  paddding-top: 10px;
  border: 2px solid;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 20px;
`;

export const ListItems = styled(ListItemButton)`
  display: flex;
  flex-direction: row;
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap : 20px;
`;

export const CompaniesContainer = styled.div`
  align-items: start;
  align-self: flex-start;
  justify-content: space-between;
  background-color: #f9f5fd;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CompanyRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 8px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterText = styled.label`
  color: grey;
  font-size: 15px;
  font-weight: bold;
`;
