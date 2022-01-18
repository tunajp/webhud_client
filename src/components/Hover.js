import React from 'react';
import {
    Text,
    VStack,
    HStack,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,

} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default class Hover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: 0.0,
        }
    }

    fetch = () => {
        console.log("fetch : " + this.state.hover);
        const url = this.props.url;
        console.log(url);

        const obj = {hover: this.state.hover};
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

    onNumberChange = (e) => {
        this.setState({hover: e});
        this.fetch();
    }
    onSliderChange = (e) => {
        this.setState({hover: e});
        this.fetch();
    }

    render() {
        return (
            <VStack w="80vw">
                <HStack>
                    <Text>Hover</Text>
                    <NumberInput min={-20.0} max={20.0}  defaultValue={0.0} precision={1} step={0.1} onChange={this.onNumberChange} value={this.state.hover}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </HStack>
                <Slider aria-label="slider-ex-1" min={-20.0} max={20.0} defaultValue={0.0} step={0.1} onChange={this.onSliderChange} value={this.state.hover}>
                    <SliderMark value={-20} mt='1' ml='-2.5' fontSize='sm'>
                        -20.0
                    </SliderMark>
                    <SliderMark value={-10} mt='1' ml='-2.5' fontSize='sm'>
                        -10.0
                    </SliderMark>
                    <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
                        0
                    </SliderMark>
                    <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
                        10.0
                    </SliderMark>
                    <SliderMark value={20} mt='1' ml='-2.5' fontSize='sm'>
                        20.0
                    </SliderMark>

                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </VStack>
        );
    }
}