import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme as customTheme } from './theme';
import ColorModeContext from './components/ColorModeContext';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';

const App = () => {
    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

                try {
                    window.localStorage.setItem('themeMode', mode);
                } catch {
                }
            },
        }), 
        [],
    );

    return (
        <HelmetProvider>
            <Helmet 
                titleTemplate="Test "
            />
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={customTheme[mode]}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Layout>
                            <Routes>
                                <Route exact path='/' element={<Dashboard />} />
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </HelmetProvider>
    );
};

export default App;