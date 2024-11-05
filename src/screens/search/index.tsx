import React, { useState } from 'react';
import {
  Container,
  HeaderText,
  SubText,
  ImageSearch,
  CompaniesContainer,
  InfoContainer,
  SearchInput,
  CompanyRow,
  Footer,
  FooterText,
  ListContainer,
  ListItems,
  ListItemContainer,
} from './styled';
import searchImage from '../../assets/images/searchImage.png';
import Company from '../../components/company';
import axios from 'axios';
import { ICompanySearch } from '../../types/index';

const apiKey = 'BLaTfDTShY1nr2FJdh84I3zkQk1eLU8P';
const apiUrl = 'https://financialmodelingprep.com/api/v3/search?';

const Search = () => {
  const [result, setResult] = useState([]);
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      try {
        const url =
          apiUrl +
          'query=' +
          event.target.value +
          '&limit=3' +
          '&apikey=' +
          apiKey;
        const response = await axios.get(url, {
          params: {
            query: event.target.value,
          },
        });
        const result = response.data;
        const symbolsAndNames = result.map((item: ICompanySearch) => ({
          symbol: item.symbol,
          name: item.name,
        }));
        console.log(symbolsAndNames);
        setResult(symbolsAndNames);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResult([]);
    }
  };

  const getListItems = () => {
    return result.map((item: ICompanySearch) => (
      <ListItems key={item.symbol}>
        <ListItemContainer>
          <b>{item.symbol}</b>
          <p>{item.name}</p>
        </ListItemContainer>
      </ListItems>
    ));
  };

  return (
    <Container>
      <InfoContainer>
        <HeaderText>5,000+ companies with data and insight for you</HeaderText>
        <div>
          <SubText>Find the company you are interested in.</SubText>
          <SubText>This will help us customize your experience.</SubText>
        </div>
        <div style={{ width: '100%' }}>
          <SearchInput
            type="text"
            placeholder="Search company or ticker"
            onChange={handleSearch}
          />
          {result.length > 0 && <ListContainer>{getListItems()}</ListContainer>}
        </div>

        <CompaniesContainer>
          <CompanyRow>
            <Company acronym="AMZN" name="Amazon" />
            <Company acronym="MSFT" name="Microsoft" />
          </CompanyRow>
          <CompanyRow>
            <Company acronym="MSFT" name="Microsoft" />
            <Company acronym="ESTC" name="Elastic" />
          </CompanyRow>
          <CompanyRow>
            <Company acronym="U" name="Unity Software" />
            <Company acronym="CVNA" name="Carvana Co" />
          </CompanyRow>
          <CompanyRow>
            <Company acronym="EPAM" name="Epam Systems" />
            <Company acronym="WBD" name="Warner Bros" />
          </CompanyRow>
          <Footer>
            <FooterText>0 Companies saved</FooterText>
            <FooterText>Refresh companies</FooterText>
          </Footer>
        </CompaniesContainer>
      </InfoContainer>
      <ImageSearch src={searchImage} alt="search" />
    </Container>
  );
};

export default Search;
