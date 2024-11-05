import React, { useState } from 'react';
import {
  Container,
  Form,
  InputForm,
  LabelForm,
  LabelError,
  FormHeader,
  FormSection,
  FormButton,
} from './styled';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setError(false);

    if (!validateEmail(user)) {
      setError(true);
      return;
    }
    console.log(user, password);
    localStorage.setItem('user', user);
    navigate('/Dashboard');
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isButtonDisabled = () => {
    return !user || !password;
  };

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <Form>
        <FormHeader>Welcome</FormHeader>
        <FormSection>
          <LabelForm>User</LabelForm>
          {error && <LabelError>Invalid email</LabelError>}
          <InputForm onChange={handleUserChange} />
        </FormSection>
        <FormSection>
          <LabelForm>Password</LabelForm>
          <InputForm onChange={handlePasswordChange} />
        </FormSection>
        <FormButton disabled={isButtonDisabled()} onClick={() => handleLogin()}>
          Login
        </FormButton>
      </Form>
    </Container>
  );
};

export default Login;
