import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text
} from 'react-native';
import SearchInput from './input';
import styles from './style';


class Search extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        navigation: React.PropTypes.object
    };

    render() {

        return (
            <View style={styles.searchView}>
                <SearchInput autoFocus={true}/>
                <TouchableOpacity style={styles.searchCancel} onPress={() => this.props.navigation.goBack()}>
                    <Text>取消</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Search;