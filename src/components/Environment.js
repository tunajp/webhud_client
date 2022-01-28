import React from 'react';
import {
    Text,
    VStack,
    HStack,
    Button,

    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Link,
  } from '@chakra-ui/react';
import { withTranslation } from 'react-i18next';

class Environment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatars:[
                // ex.
                {Name:"test1", uuid:"xxx-xxx-xxx", Distance:10, RenderingCost:25.4, ScriptCount: 100},
            ],
            isDialogOpen: false,
            avatar:{
                DisplayName:"test",
                Name:"test1",
                uuid:"xxx-xxx-xxx",
                Age:"",
                Distance: "",
                RenderingCost: "",
                ScriptCount: "",
                ProfileLink: "secondlife://xxx",
                AttachedObjects:[
                    {Name: "hair", Creator: "Creator"},
                    {Name: "head", Creator: "Creator"},
                ]
            }
        };
    }
    componentDidMount() {
        this.getAvatars();
    }
    getAvatars = () => {
        // fetchしてsetStateでthis.state.avatarsを書き換える
        console.log("fetch : ");
        const url = this.props.url;
        console.log(url);

        const obj = {type: "environment", envronment: "avatars"};
        const method = "POST";
        const body = JSON.stringify(obj);
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        fetch(url, {method, headers, body})
        .then((res)=> {
            //return res.json();
            return res.text();
        })
        .then( (data) => {
            const json = JSON.parse(data);
            console.dir(json);
            this.setState({avatars: json.avatars});
        }).
        catch((error) => {
            console.log(error);
        });
    }
    onReloadClick = () => {
        this.getAvatars();
    }
    getAvatarDetail = (uuid) => {
        // fetchしてsetStateでthis.state.avatarsを書き換える
        console.log(uuid);
        const url = this.props.url;
        console.log(url);

        const obj = {type: "environment", uuid: uuid};
        const method = "POST";
        const body = JSON.stringify(obj);
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        fetch(url, {method, headers, body})
        .then((res)=> {
            //return res.json();
            return res.text();
        })
        .then( (data) => {
            const json = JSON.parse(data);
            console.dir(json);
            this.setState({avatar: json.avatar});
            this.setState({isDialogOpen: true});
        }).
        catch((error) => {
            console.log(error);
        });

    }
    onDetailClick = (uuid) => {
        this.getAvatarDetail(uuid);
    }
    onDialogClose = () => {
        this.setState({isDialogOpen: false});
    }
    render() {
        const { t } = this.props;
        return (
            <VStack w="80vw">
                <HStack>
                    <Text>{t("Current region avatars")}</Text>
                    <Button colorScheme="blue" onClick={this.onReloadClick}>{t("Reload")}</Button>
                </HStack>

                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>{t("Name")}</Th>
                            <Th isNumeric>{t("Distance")}</Th>
                            <Th isNumeric>{t("RenderingCost")}</Th>
                            <Th isNumeric>{t("ScriptCount")}</Th>
                            <Th>{t("Detail")}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.avatars.map((avatar) => (
                            <Tr key={avatar['uuid']}>
                                <Td>{avatar["Name"]}</Td>
                                <Td isNumeric>{avatar["Distance"]}</Td>
                                <Td isNumeric>{avatar["RenderingCost"]}</Td>
                                <Td isNumeric>{avatar["ScriptCount"]}</Td>
                                <Td><Button onClick={() => { this.onDetailClick(avatar["uuid"]);}}>{t("Detail")}</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>{t("Name")}</Th>
                            <Th isNumeric>{t("Distance")}</Th>
                            <Th isNumeric>{t("RenderingCost")}</Th>
                            <Th isNumeric>{t("ScriptCount")}</Th>
                            <Th>{t("Detail")}</Th>
                        </Tr>
                    </Tfoot>
                </Table>

                <Modal size="xl" isOpen={this.state.isDialogOpen} onClose={this.onDialogClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <VStack>
                                <Text>{t("DisplayName")}: {this.state.avatar.DisplayName}</Text>
                                <Text>{t("Name")}: {this.state.avatar.Name}</Text>
                                <Text>uuid: {this.state.avatar.uuid}</Text>
                                <Text>{t("Age")}: {this.state.avatar.Age}</Text>
                                <Text>{t("Distance")}: {this.state.avatar.Distance}</Text>
                                <Text>{t("RenderingCost")}: {this.state.avatar.RenderingCost}</Text>
                                <Text>{t("ScriptCount")}: {this.state.avatar.ScriptCount}</Text>
                                <Text>{t("Profile")}: <Link _hover={{textDecoration: 'none', bg: ['gray.200', 'gray.700'],}} href={this.state.avatar.ProfileLink}>Profile</Link></Text>

                                <Table variant='simple'>
                                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Creator</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    {this.state.avatar.AttachedObjects.map((object) => (
                                        <Tr key={object['Name']}>
                                            <Td>{object["Name"]}</Td>
                                            <Td>{object["Creator"]}</Td>
                                        </Tr>
                                    ))}
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Creator</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </VStack>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={this.onDialogClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </VStack>
        );
    }
}

export default withTranslation()(Environment);