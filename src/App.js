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

import Hover from './components/Hover';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ChakraProvider theme={theme}>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <ColorModeSwitcher justifySelf="flex-end" />
                        <VStack spacing={8}>
                            <Text>
                                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
                            </Text>

                            <Hover url={this.props.url} />
                        </VStack>
                    </Grid>
                </Box>
            </ChakraProvider>
        );

    }
}