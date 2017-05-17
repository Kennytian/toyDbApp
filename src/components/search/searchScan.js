import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import SearchInput from './input';
import SearchScan from './scan';
import styles from './style';


class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.searchView}>
                <SearchInput onFocus={this._onFocus}/>
                <SearchScan/>
            </View>
        );
    }

    _onFocus() {
        this.props.navigation.navigation('Search');
    }
}

export default Search;