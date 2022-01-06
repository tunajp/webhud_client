import React from 'react';
import {Button} from '@chakra-ui/react';

export default class MyButton extends React.Component {

    #str;

    constructor(props) {
        super(props);
        this.state = {
            name: null,
        };
        this.state.name = props.name;
    }
    componentDidMount() {
        console.log("mounted");
    }
    onPress = () => {
        this.setState({name: "Clicked"});
    }

    render() {
        return(
            <div>
                <Button onClick={this.onPress} colorScheme="blue">MyButton {this.state.name}</Button>
            </div>
        );
    }
}