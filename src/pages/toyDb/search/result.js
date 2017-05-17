import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ListView, ScrollView } from 'react-native';
import pageStyles from './result.style';
import toyList from '../../../data/toy';
import data from '../../../data/recommend';
import ToyItem from '../components/item';
import Search from './../../../components/search/searchCancel';
import imageSource from '../../../constants/imageSource';
import toyListStyle from '../components/index.style';
import HotContent from './../../../components/common/hotContent';

class PageComponent extends Component {
    static navigationOptions = (({navigation}) => {
        const {state} = navigation;
        return {
            header: <Search navigation={navigation} value={state.params.q}/>
        };
    });

    constructor(props) {
        super(props);
        this.state = {
            titleText: '热门专题',
            hotTitle: '热门内容',
            rightText: '更多',
            hotText: '超远距离接吻神器：KISS还是要提高自己的姿势水平',
            releaseTime: '发布时间',
            Time: '2017-3-3',
            number: '1211',
            dataSource1: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            dataSource2: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            dataSource1: this.state.dataSource1.cloneWithRows(toyList),
            dataSource2: this.state.dataSource2.cloneWithRows(data)
        });
    }

    render() {
        return (
            <ScrollView style={pageStyles.container}>
                <View style={pageStyles.area.box}>
                    <Text style={pageStyles.area.title}>厂商</Text>
                    <TouchableOpacity style={pageStyles.manufacturer.box} onPress={() => {
                        this._navTo('ManufacturerDetail');
                    }}>
                        <View style={pageStyles.manufacturer.imageBox}>
                            <Image source={require('../../../data/file/legao_logo.png')} style={pageStyles.manufacturer.image}/>
                        </View>
                        <View style={pageStyles.manufacturer.info.box}>
                            <Text style={pageStyles.manufacturer.info.title}>乐高（LEGO）</Text>
                            <Text style={pageStyles.manufacturer.info.info}>
                                视频数量<Text style={{marginLeft: 10}}>100</Text>
                            </Text>
                        </View>
                        <View style={pageStyles.manufacturer.arrow}>
                            <Image source={imageSource.arrow_right} style={pageStyles.manufacturer.arrorImage}/>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={pageStyles.area.box}>
                    <Text style={pageStyles.area.title}>玩具</Text>
                    {this._renderList()}
                </View>

                <View style={pageStyles.area.box}>
                    <Text style={pageStyles.area.title}>资讯</Text>
                    {this._renderNewsList()}
                </View>
            </ScrollView>
        );
    }

    _renderList() {
        return (
            <ListView contentContainerStyle={[toyListStyle.list, {backgroundColor: 'white'}]}
                      dataSource={this.state.dataSource1}
                      renderRow={this._renderItem}/>
        );
    }

    _renderNewsList() {
        return (
            <ListView contentContainerStyle={[{backgroundColor: 'white'}]}
                      dataSource={this.state.dataSource2}
                      renderRow={this._renderNewsItem}/>
        );
    }

    _navTo(name) {
        const {navigate} = this.props.navigation;
        navigate(name);
    }

    _renderItem = (item, key, index) => {
        if (index >= 2) {
            return null;
        }
        return <ToyItem item={item} onPressManufacturer={() => {
            this._navTo('ManufacturerDetail');
        }} onPress={() => this._navTo('ProductDetail')}/>;
    };

    _renderNewsItem = (data, key, index) => {
        if (index >= 3) {
            return null;
        }
        return <HotContent
            HotImg={data.source}
            onPress={() => {
                this._navTo('SpecialDetail');
            }}
            hotText={this.state.hotText}
            number={this.state.number}
            Time={this.state.Time}
            releaseTime={this.state.releaseTime}
        />;
    };
}

export default PageComponent;