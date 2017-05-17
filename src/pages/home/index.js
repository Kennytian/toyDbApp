/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity
} from 'react-native';

import styles from '../../components/common/styles';

import imageSource from './../../constants/imageSource';
import Title from './../../components/common/title';
import Search from './../../components/search/searchScan';
import ImageCard from '../../components/cards/imageCard';
import HotContent from './../../components/common/hotContent';
import data from '../../data/recommend';

export default class Home extends Component {
    static navigationOptions = (({navigation}) => {
        return {
            header: <Search navigation={navigation}/>
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
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            dataSourceAnother: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            dataSourceAnother: this.state.dataSource.cloneWithRows(data)
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SpecialDetail')}>
                    <Image source={imageSource.home.banner}/></TouchableOpacity>
                <Title
                    titleImg={imageSource.home.tittleImgOne}
                    titleText={this.state.titleText}
                    rightText={this.state.rightText}
                    onPressRight={() => navigate('SpecialList')}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Title
                    titleImg={imageSource.home.tittleImgTwo}
                    titleText={this.state.hotTitle}
                />
                <ListView
                    dataSource={this.state.dataSourceAnother}
                    renderRow={this.renderItemAnother}
                />
            </ScrollView>
        );
    }

    renderItem = (data) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SpecialDetail')}>
                <ImageCard width={140} height={70} hasMask={false} text={data.text} titlePosition="center"
                           style={{marginLeft: 10, marginBottom: 10, marginTop: 10}} source={data.source}/>
            </TouchableOpacity>
        );
    }

    toNav(name) {
        this.props.navigation.navigate(name);
    }

    renderItemAnother = (data) => {
        return (
            <HotContent
                HotImg={data.source}
                onPress={() => {
                    this.toNav('SpecialDetail');
                }}
                hotText={this.state.hotText}
                number={this.state.number}
                Time={this.state.Time}
                releaseTime={this.state.releaseTime}
            />
        );
    }
}