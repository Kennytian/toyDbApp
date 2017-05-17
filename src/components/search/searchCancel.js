import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text
} from 'react-native';
import SearchInput from './input';
import styles from './style';
import colors from '../../constants/colors';


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
                <SearchInput {...this.props} autoFocus={true} onSubmit={(e) => this.onSubmit(e)}/>
                <TouchableOpacity style={styles.searchCancel} onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color: colors.blue}}>取消</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onSubmit(event) {
        let val = event.nativeEvent.text;
        this.props.navigation.navigate('SearchResult', {q: val});
    }
}

export default Search;