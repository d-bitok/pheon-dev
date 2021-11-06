import { ThemeProvider } from "styled-components";

import theme from '../themes/default';
import GlobalStyles from './globals';

export default function Theme ({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}