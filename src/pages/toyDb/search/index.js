import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import pageStyles from './index.style';
import data from '../../../data/search/hot';
import Search from './../../../components/search/searchCancel';

class PageComponent extends Component {
    static navigationOptions = (({navigation}) => {
        return {
            header: <Search navigation={navigation}/>
        };
    });

    render() {
        return (
            <View style={pageStyles.container}>
                <Text style={pageStyles.title}>热门搜索</Text>
                <View style={pageStyles.content}>
                    {this._renderList()}
                </View>
            </View>
        );
    }

    _renderList() {

        return (
            <FlatList contentContainerStyle={pageStyles.list} data={data}
                      renderItem={(item) => this._renderItem(item)} refreshing={false} onRefresh={this._onRefresh}/>
        );
    }

    _navTo(name) {
        const {navigate} = this.props.navigation;
        navigate(name);
    }

    _renderItem(json) {
        var index = json.index, item = json.item;
        var itemStyle = pageStyles.item;
        if (index > 1) {
            itemStyle = [itemStyle, pageStyles.itemTopBorder];
        }
        return (
            <TouchableOpacity style={itemStyle} onPress={() => this._navTo('SearchResult', {q: item.title})}>
                <View style={index % 2 === 0 ? pageStyles.itemRightBorder : {flex: 1}}>
                    <Text style={pageStyles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default PageComponent;