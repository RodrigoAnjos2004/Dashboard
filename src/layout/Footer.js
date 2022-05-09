import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                backgroundColor={theme.palette.background.default}
                paddingTop={1}
                paddingBottom={1}
                position='fixed'
                bottom='0'
                left='0'
                width='100%'
            >
                <Divider />
                <Box
                    backgroundColor={theme.palette.background.default}
                    position='relative'
                    padding={theme.spacing(0.25)}
                >
                    <Grid container spacing={0}>
                        <Hidden mdDown>
                            <Grid container item xs={12} md={4}>
                                <List
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 0
                                    }}
                                >
                                </List>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Footer;