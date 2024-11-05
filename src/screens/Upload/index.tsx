import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  HeaderText,
  SubText,
  SectionLabel,
  WarningText,
  HeaderSection,
  ImageClose,
  SectionContainer,
  StyledInput,
  SelectComponent,
  SubTextAlt,
  StyledInputAlt,
  CheckContainer,
  CheckRow,
  CheckOption,
  CheckLabel,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from './styled';
import close from '../../assets/images/close.png';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const Upload = () => {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState<string | undefined>(
    'Company Research'
  );
  const [company, setCompany] = useState('');
  const [industryConsultant, setIndustryConsultant] = useState<boolean>(false);
  const [competitor, setCompetitor] = useState<boolean>(false);
  const [formerExecutive, setFormerExecutive] = useState<boolean>(false);
  const [customer, setCustomer] = useState<boolean>(false);
  const [partner, setPartner] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsDisabled(validateForm());
  }, [
    projectName,
    projectType,
    company,
    industryConsultant,
    competitor,
    formerExecutive,
    customer,
    partner,
  ]);

  const handleCheckAll = () => {
    setIndustryConsultant(!industryConsultant);
    setCompetitor(!competitor);
    setFormerExecutive(!formerExecutive);
    setCustomer(!customer);
    setPartner(!partner);
  };
  const handleCheckIndustry = () => {
    setIndustryConsultant(!industryConsultant);
  };

  const handleCheckCompetitor = () => {
    setCompetitor(!competitor);
  };

  const handleCheckFormerExecutive = () => {
    setFormerExecutive(!formerExecutive);
  };

  const handleCheckCustomer = () => {
    setCustomer(!customer);
  };

  const handleCheckPartner = () => {
    setPartner(!partner);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/Dashboard');
  };

  const validateForm = () => {
    if (projectName === '') return true;
    if (projectType === 'Company Research' && company === '') return true;

    //validate if at least one check is selected
    if (
      !industryConsultant &&
      !competitor &&
      !formerExecutive &&
      !customer &&
      !partner
    ) {
      return true;
    }

    return false;
  };

  return (
    <FormContainer>
      <HeaderSection>
        <HeaderText>New Data</HeaderText>
        <ImageClose src={close} alt="close" onClick={handleClose} />
      </HeaderSection>
      <SectionContainer>
        <SectionLabel>
          <SubText>Project Name</SubText>
          <WarningText>*</WarningText>
        </SectionLabel>
        <StyledInput
          onChange={(e) => setProjectName(e.target.value)}
          type="text"
          placeholder="E.g. Microsoft Research"
        />
      </SectionContainer>
      <SectionContainer>
        <SectionLabel>
          <SubText>Project Type</SubText>
          <WarningText>*</WarningText>
        </SectionLabel>
        <SelectComponent
          displayEmpty
          value={projectType}
          onChange={(e: SelectChangeEvent<unknown>) => {
            setProjectType(e.target.value as string);
            setCompany('');
          }}
        >
          <MenuItem value={'Company Research'}>Company Research</MenuItem>
          <MenuItem value={'Management Research'}>Management Research</MenuItem>
          <MenuItem value={'Industry Research'}>Industry Research</MenuItem>
        </SelectComponent>
      </SectionContainer>
      {projectType === 'Company Research' && (
        <SectionContainer>
          <SectionLabel>
            <SubTextAlt>Companies</SubTextAlt>
            <WarningText>*</WarningText>
          </SectionLabel>
          <StyledInput
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="E.g. Microsoft"
          />
        </SectionContainer>
      )}
      <SectionContainer>
        <SectionLabel>
          <SubTextAlt>Project Description</SubTextAlt>
        </SectionLabel>
        <StyledInput
          type="text"
          placeholder="Please define the purpose for this project."
        />
      </SectionContainer>
      <SectionContainer>
        <SectionLabel>
          <SubTextAlt>Project Scope</SubTextAlt>
        </SectionLabel>
        <StyledInputAlt
          placeholder="Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert 
screening stage."
        />
      </SectionContainer>
      <SectionContainer>
        <SectionLabel>
          <SubTextAlt>Expert</SubTextAlt>
          <WarningText>*</WarningText>
        </SectionLabel>
        <CheckContainer>
          <CheckRow>
            <CheckOption>
              <Checkbox
                checked={industryConsultant}
                onChange={handleCheckAll}
              />
              <CheckLabel>All</CheckLabel>
            </CheckOption>
            <CheckOption>
              <Checkbox checked={competitor} onChange={handleCheckCompetitor} />
              <CheckLabel>Competitor</CheckLabel>
            </CheckOption>
            <CheckOption>
              <Checkbox checked={customer} onChange={handleCheckCustomer} />
              <CheckLabel>Customer</CheckLabel>
            </CheckOption>
          </CheckRow>
          <CheckRow>
            <CheckOption>
              <Checkbox
                checked={industryConsultant}
                onChange={handleCheckIndustry}
              />
              <CheckLabel>Industry Consultant</CheckLabel>
            </CheckOption>
            <CheckOption>
              <Checkbox
                checked={formerExecutive}
                onChange={handleCheckFormerExecutive}
              />
              <CheckLabel>Former Executive</CheckLabel>
            </CheckOption>
            <CheckOption>
              <Checkbox checked={partner} onChange={handleCheckPartner} />
              <CheckLabel>Partner</CheckLabel>
            </CheckOption>
          </CheckRow>
        </CheckContainer>
      </SectionContainer>
      <SectionContainer>
        <ButtonContainer>
          <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
          <PrimaryButton disabled={isDisabled}>Upload</PrimaryButton>
        </ButtonContainer>
      </SectionContainer>
    </FormContainer>
  );
};

export default Upload;
