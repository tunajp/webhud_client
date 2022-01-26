import React from 'react';
import {
    Text,
    VStack,
    HStack,
    Button,
} from '@chakra-ui/react';
import { withTranslation } from 'react-i18next';

class Environment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { t } = this.props;
        return (
            <Text>{t("Environment")}</Text>
        );
    }
}

export default withTranslation()(Environment);