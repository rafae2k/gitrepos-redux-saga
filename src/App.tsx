import {
  BaseStyles,
  Button,
  ButtonPrimary,
  TextInput,
  ThemeProvider,
} from '@primer/react';
import Layout from './components/Layout';
import Wrapper from './components/Wrapper';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Layout />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
