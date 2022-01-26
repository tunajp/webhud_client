import React from 'react';
import {
    Text,
    VStack,
    HStack,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react';
import { withTranslation } from 'react-i18next';

class Environment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatars:[
                // ex.
                {Name:"test1", uuid:"xxx-xxx-xxx", Distance:10, RenderingCost:25.4, ScriptMemory: 100},
                {Name:"test2", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test3", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test4", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test5", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test6", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test7", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test8", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test9", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
                {Name:"test10", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptMemory: 101},
            ],
        };
    }
    onReloadClick = () => {
        // TODO:fetchしてsetStateでthis.state.avatarsを書き換える
    }
    onDetailClick = (uuid) => {
        // TODO:fetchしでDetailを得る
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
                            <Th isNumeric>{t("ScriptMemory")}</Th>
                            <Th>{t("Detail")}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.avatars.map((avatar) => (
                            <Tr>
                                <Td>{avatar["Name"]}</Td>
                                <Td isNumeric>{avatar["Distance"]}</Td>
                                <Td isNumeric>{avatar["RenderingCost"]}</Td>
                                <Td isNumeric>{avatar["ScriptMemory"]}</Td>
                                <Td><Button onClick={() => { this.onDetailClick(avatar["uuid"]);}}>{t("Detail")}</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>{t("Name")}</Th>
                            <Th isNumeric>{t("Distance")}</Th>
                            <Th isNumeric>{t("RenderingCost")}</Th>
                            <Th isNumeric>{t("ScriptMemory")}</Th>
                            <Th>{t("Detail")}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </VStack>
        );
    }
}

export default withTranslation()(Environment);