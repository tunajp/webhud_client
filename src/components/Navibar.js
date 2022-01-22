import React from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { withTranslation, WithTranslation } from 'react-i18next';

const Links = ['Avatar', 'Items', 'Environment'];

class NavLink extends React.Component {
    render() {
        return (
            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: ['gray.200', 'gray.700'],
                }}
                href={'#'}>
                {this.props.children}
            </Link>
        );
    }
}

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    componentDidMount() {
        console.log("mounted");
    }
    onOpen = () => {
        console.log("onOpen");
        this.setState({isOpen: true});
    }
    onClose = () => {
        console.log("onClose");
        this.setState({isOpen: false});
    }
    render() {
        const { t } = this.props;
        return(
            <>
                <Box px={4}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={this.state.isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={this.state.isOpen ? this.onClose : this.onOpen}
                        />
                        <HStack spacing={8} alignItems={'center'}>
                            <Box>WebHUD</Box>
                            <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{t(link)}</NavLink>
                            ))}
                            </HStack>
                        </HStack>
                        <Flex alignItems={'center'}>
                            <Menu>
                            <ColorModeSwitcher justifySelf="flex-end" />
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                size={'sm'}
                                src={
                                    'https://img.icons8.com/color/100/000000/language.png'
                                }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={()=>{this.props.i18n.changeLanguage("en");}}>English</MenuItem>
                                <MenuItem onClick={()=>{this.props.i18n.changeLanguage("ja");}}>日本語</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>

                    {this.state.isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{t(link)}</NavLink>
                        ))}
                        </Stack>
                    </Box>
                    ) : null}
                </Box>
            </>
        );
    }
}

export default withTranslation()(NavBar);