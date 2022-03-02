import {
  Avatar,
  ButtonPrimary,
  Header,
  StyledOcticon,
  TextInput,
  ThemeProvider,
} from '@primer/react';

import { Github as GithubIcon } from '@styled-icons/bootstrap';

import GlobalStyles from '../../Styles/GlobalStyles';

import { Container, HeaderContainer, InputWrapper } from './styles';

function Layout() {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Header.Item>
            <Header.Link href='#'>
              <StyledOcticon icon={GithubIcon} size={32} />
              <span>GitRepo</span>
            </Header.Link>
          </Header.Item>
          <Header.Item full>Menu</Header.Item>
          <Header.Item>
            <Avatar
              src='https://github.com/octocat.png'
              size={20}
              square
              alt='@octocat'
            />
          </Header.Item>
        </Header>
      </HeaderContainer>
      <InputWrapper>
        <TextInput
          block
          aria-label='Search'
          name='search'
          placeholder='Search a github username'
        />
        <ButtonPrimary>Hello world</ButtonPrimary>
      </InputWrapper>
    </Container>
  );
}

export default Layout;
