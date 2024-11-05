import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 300px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  margin-bottom: 200px;
`;

export const HeaderText = styled.label`
  color: purple;
  font-size: 36px;
`;

export const SubText = styled.label`
  color: black;
  font-size: 22px;
  font-weight: bold;
`;

export const Text = styled.label`
  color: black;
  font-size: 20px;
  align-self: start;
`;

export const BulletPoints = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: start;
`;

export const Image = styled.img`
  witdh: 5%;
  height: 5%;
`;

export const Button = styled.button`
  width: 20%;
  margin-top: 10px;
  border: 2px solid;
  border-color: grey;
  border-radius: 5px;
  color: black;
  padding: 10px 15px;
  align-self: start;
  font-weight: bold;
`;

export const ImageGoal = styled.img`
  width: 40%;
`;
