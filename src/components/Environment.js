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
                {Name:"test1", uuid:"xxx-xxx-xxx", Distance:10, RenderingCost:25.4, ScriptCount: 100},
                {Name:"test2", uuid:"yyy-yyy-yyy", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test3", uuid:"zzz-zzz-zzz", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test4", uuid:"aaa-aaa-aaa", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test5", uuid:"bbb-bbb-bbb", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test6", uuid:"ccc-ccc-ccc", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test7", uuid:"ddd-ddd-ddd", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test8", uuid:"eee-eee-eee", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test9", uuid:"fff-fff-fff", Distance:12, RenderingCost:25.5, ScriptCount: 101},
                {Name:"test10", uuid:"ggg-ggg-ggg", Distance:12, RenderingCost:25.5, ScriptCount: 101},
            ],
        };
    }
    onReloadClick = () => {
        // TODO:fetchしてsetStateでthis.state.avatarsを書き換える
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
            //const resElement = document.querySelector("#res");
            //resElement.textContent = gatDate() + data;
            ////alert("success:"+ data); // sl内のcefでは表示されない
        }).
        catch((error) => {
            console.log(error);
            //alert("error:"+ error); // sl内のcefでは表示されない
        });
    }
    onDetailClick = (uuid) => {
        // TODO:fetchしでDetailを得る
        console.log(uuid);
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
            </VStack>
        );
    }
}

export default withTranslation()(Environment);