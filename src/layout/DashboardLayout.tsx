import { ReactNode, FunctionComponent } from 'react';
import {
  Container,
  DashboardLayoutChildrenContent,
  SideBarContainer,
} from './styled';
import Sidebar from '../components/SideBar';
import Header from '../components/header';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
      <DashboardLayoutChildrenContent>
        <Header />
        {children}
      </DashboardLayoutChildrenContent>
    </Container>
  );
};

export default DashboardLayout;
