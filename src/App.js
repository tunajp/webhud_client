import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import NavBar from './components/Navibar';
import Hover from './components/Hover';
import Pose from './components/Pose';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                'ようこそ React と react-i18next へ。': 'Welcome to React and react-i18next.',
                言語を切り替え: 'change language',
                "Hover": "hover",
            },
        },
        ja: {
            translation: {
                'ようこそ React と react-i18next へ。': 'ようこそ React と react-i18next へ。',
                言語を切り替え: '言語を切り替え',
                "Hover": "ホバー",
            },
        },
    },
    lng: 'en',
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ChakraProvider theme={theme}>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <NavBar />
                        <VStack spacing={8}>
                            <Hover url={this.props.url} />
                            <Pose url={this.props.url} />
                        </VStack>
                    </Grid>
                </Box>
            </ChakraProvider>
        );

    }
}