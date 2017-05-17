import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Search from './../../components/search/searchScan';
import styles from '../../components/common/styles';
import ToyItem from './components/item';
import data from '../../data/toy';
import imageSource from '../../constants/imageSource';
import Colors from './../../constants/colors';
import { BORDER_WIDTH } from '../../constants/global';
import pageStyles from './components/index.style';

export default class Borrowing extends Component {
    static navigationOptions = (({navigation}) => {
        return {
            header: <Search navigation={navigation}/>
        };
    });

    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={pageStyles.filter.box}>
                    <TouchableOpacity style={pageStyles.filter.item} onPress={() => this._searchByHot()}>
                        <Text>热度</Text>
                        <Image source={imageSource.toyDb.select} style={pageStyles.filter.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[pageStyles.filter.item, {borderLeftColor: Colors.borderColor, borderLeftWidth: BORDER_WIDTH}]}
                                      onPress={() => this._navTo('SearchFilter')}>
                        <Text>筛选</Text>
                        <Image source={imageSource.toyDb.filter} style={pageStyles.filter.icon}/>
                    </TouchableOpacity>
                </View>
                <FlatList contentContainerStyle={pageStyles.list}
                          data={this.state.data}
                          renderItem={({item}) => {
                              return this.renderItem(item);
                          }}/>
            </View>
        );
    }

    _searchByHot() {
        let {isHot} = this.state;
        var newData = [].concat(data);
        newData.sort(function (a, b) {
            return isHot ? a.views - b.views : b.views - a.views;
        });
        this.setState({data: newData, isHot: !isHot});
    }

    _navTo(name) {
        const {navigate} = this.props.navigation;
        navigate(name);
    }

    renderItem(item) {
        return (
            <ToyItem item={item} onPressManufacturer={() => {
                this._navTo('ManufacturerDetail');
            }} onPress={() => this._navTo('ProductDetail')}/>
        );
    }
}
