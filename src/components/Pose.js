import React from 'react';
import {
    VStack,
    Text,
    Grid,
    GridItem,
    Button,
} from '@chakra-ui/react';

export default class Pose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pose: "",
        }
    }
    fetch = (value) => {
        console.log("fetch : " + this.state.pose);
        const url = this.props.url;
        console.log(url);

        const obj = {type: "pose", pose: value};
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
            console.log(data);
            //const resElement = document.querySelector("#res");
            //resElement.textContent = gatDate() + data;
            ////alert("success:"+ data); // sl内のcefでは表示されない
        }).
        catch((error) => {
            console.log(error);
            //alert("error:"+ error); // sl内のcefでは表示されない
        });

    }
    onPress = (value) => {
        this.fetch(value);
    }
    render() {
        return (
            <VStack w="80vw">
                <Text>Pose/Animation</Text>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem><Button w='100%' colorScheme="blue" onClick={() => this.onPress("ground sit")}>Ground Sit</Button></GridItem>
                    <GridItem><Button w='100%' colorScheme="blue" onClick={() => this.onPress("Dead")}>Dead</Button></GridItem>
                    <GridItem><Button w='100%' colorScheme="red" onClick={() => this.onPress("Stop Pose")}>Stop Pose</Button></GridItem>
                    <GridItem><Button w='100%' colorScheme="red" onClick={() => this.onPress("Stop Anims")}>Stop Anims</Button></GridItem>
                </Grid>
            </VStack>
        );
    }
}