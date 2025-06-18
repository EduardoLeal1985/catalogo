import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/Theme';

export default function App() {
  return <ThemeProvider theme={theme}><Routes /></ThemeProvider>;
}