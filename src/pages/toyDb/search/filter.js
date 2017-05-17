import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import pageStyles from './filter.style';
let data = [
    {key: 'a', title: '价格区间', options: [{id: 1, name: '100~500'}, {id: 2, name: '500~1000'}, {id: 3, name: '1000~2000'}], type: 1},
    {key: 'b', title: '类型', options: [{id: 1, name: '早教启智'}, {id: 2, name: '户外玩具'}, {id: 3, name: '卡通周边'}]},
    {key: 'd', title: '品牌', options: [{id: 1, name: '顽童科技'}, {id: 2, name: '顽童科技'}, {id: 3, name: '顽童科技'}]},
    {key: 'e', title: '年龄', options: [{id: 1, name: '4-6岁'}, {id: 2, name: '4-12岁'}, {id: 3, name: '其他'}]}
];

class PriceInput extends Component {
    render() {
        return (
            <View style={pageStyles.item.inputBox}>
                <TextInput placeholder="自定义最低价" style={pageStyles.item.input}/>
                <Text>~</Text>
                <TextInput placeholder="自定义最高价" style={pageStyles.item.input}/>
            </View>
        );
    }
}

class FilterItem extends Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        let {item} = this.props, {active} = this.state;

        return (
            <View style={pageStyles.item.box}>
                <Text style={pageStyles.item.title}>{item.title}</Text>
                <View style={pageStyles.item.optionBox}>
                    {
                        item.options.map(function (option) {
                            let optionStyle = pageStyles.item.option,
                                textStyle = pageStyles.item.text;
                            if (option.id === active) {
                                optionStyle = [optionStyle, pageStyles.item.optionActive];
                                textStyle = [textStyle, pageStyles.item.textActive];
                            }
                            return <TouchableOpacity key={option.id} style={optionStyle}
                                                     onPress={this.onPress.bind(this, option)}>
                                <Text style={textStyle}>{option.name}</Text>
                            </TouchableOpacity>;
                        }.bind(this))
                    }
                </View>
                {item.type === 1 ? <PriceInput/> : null}
            </View>
        );
    }

    onPress(option) {
        this.setState({active: option.id});
    }

}

class PageComponent extends Component {
    static navigationOptions = {
        title: '筛选条件'
    };

    render() {
        return (
            <View style={pageStyles.container}>
                {
                    data.map(function (item) {
                        return <FilterItem key={item.key} item={item}/>;
                    })
                }
                <View style={pageStyles.foot.box}>
                    <TouchableOpacity style={[pageStyles.foot.btn, pageStyles.foot.btn1]}>
                        <Text style={pageStyles.foot.text}>重置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[pageStyles.foot.btn, pageStyles.foot.btn2]}>
                        <Text style={pageStyles.foot.text}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _navTo(name) {
        const {navigate} = this.props.navigation;
        navigate(name);
    }
}

export default PageComponent;