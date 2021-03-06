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
import Environment from './components/Environment';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                'ようこそ React と react-i18next へ。': 'Welcome to React and react-i18next.',
                言語を切り替え: 'change language',

                "Avatar": "Avatar",
                "Items": "Items",
                "Environment": "Environment",

                "Hover": "hover",
                "Reset": "Reset",
                "Pose/Animation": "Pose/Animation",
                "Ground Sit": "Ground Sit",
                "Dead": "Dead",
                "Stop Pose": "Stop Pose",
                "Stop Anims": "Stop Anims",

                "Current region avatars":"Current region avatars",
                "Reload":"Reload",
                "Name": "Name",
                "Distance": "Distance",
                "RenderingCost": "RenderingCost",
                "ScriptCount": "ScriptCount",
                "Detail": "Detail",

                "DisplayName": "DisplayName",
                "Age": "Age",
                "Profile": "Profile",
            },
        },
        ja: {
            translation: {
                'ようこそ React と react-i18next へ。': 'ようこそ React と react-i18next へ。',
                言語を切り替え: '言語を切り替え',

                "Avatar": "アバター",
                "Items": "アイテム",
                "Environment": "環境",

                "Hover": "ホバー",
                "Reset": "リセット",
                "Pose/Animation": "ポーズ/アニメ",
                "Ground Sit": "地面に座る",
                "Dead": "死",
                "Stop Pose": "ポーズ停止",
                "Stop Anims": "全アニメ停止",

                "Current region avatars":"現在のリージョンにいるアバター",
                "Reload":"リロード",
                "Name": "アバター名",
                "Distance": "距離",
                "RenderingCost": "レンダリングコスト",
                "ScriptCount": "Script数",
                "Detail": "詳細",

                "DisplayName": "表示名",
                "Age": "年齢",
                "Profile": "プロフィール",
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

        this.state = {
            page: 'Avatar',
        }
    }
    onNavClick = (nav) => {
        this.setState({page: nav});
        console.log(this.state.page)
    }
    // TODO:ページ切り替え処理
    render() {
        return (
            <ChakraProvider theme={theme}>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <NavBar onNavClick={this.onNavClick} />
                        {this.state.page == 'Avatar' &&
                            <VStack spacing={8}>
                                <Hover url={this.props.url} />
                                <Pose url={this.props.url} />
                            </VStack>
                        }
                        {this.state.page == 'Environment' &&
                            <VStack spacing={8}>
                            <Environment url={this.props.url}></Environment>
                            </VStack>
                        }
                    </Grid>
                </Box>
            </ChakraProvider>
        );

    }
}