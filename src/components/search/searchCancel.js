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

    render() {

        return (
            <View style={styles.searchView}>
                <SearchInput/>
                <TouchableOpacity>
                    <Text>取消</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Search;