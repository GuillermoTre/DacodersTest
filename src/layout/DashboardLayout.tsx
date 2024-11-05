import { ReactNode, FunctionComponent } from 'react';
import {
  Container,
  DashboardLayoutChildrenContent,
  SideBarContainer,
} from './styled';
import Sidebar from '../components/SideBar';
import Header from '../components/header';
import { useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  const location = useLocation();

  return (
    <Container>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
      <DashboardLayoutChildrenContent>
        {location.pathname.split('/')[1] !== 'askAi' && <Header />}
        {children}
      </DashboardLayoutChildrenContent>
    </Container>
  );
};

export default DashboardLayout;
