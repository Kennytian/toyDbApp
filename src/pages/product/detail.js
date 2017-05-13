import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import ErrorView from './../../components/common/errorView';
import LoadingView from './../../components/common/loadingView';
import Colors from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/global';
import AutoSizeImage from '../../components/common/autoSizeImage';

let imageWidth = DEVICE_WIDTH - 20;
let pageStyles = {
  info: {
    box: {
      margin: 10,
      flexDirection: 'row'
    },
    image: {
      width: 110,
      height: 100,
      borderRadius: 20
    },
    infoRight: {
      paddingLeft: 10,
      flex: 1
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.gray6
    },
    category: {
      color: Colors.gray6,
      marginTop: 5,
      marginBottom: 5
    },
    desc: {
      color: Colors.gray6,
      lineHeight: 18
    }
  },
  ctrl: {
    box: {
      margin: 10,
      flexDirection: 'row'
    },
    btn: {
      flex: 1,
      borderRadius: 6,
      height: 34,
      backgroundColor: '#91b8f8',
      flexDirection: 'row',
      alignItems: 'center'
    },
    btnPrimary: {
      backgroundColor: '#ff6b6b',
      marginRight: 10
    },
    text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      flex: 1
    }
  },
  productImage: {
    width: imageWidth,
    margin: 10
  }
};

class ProductDetail extends Component {

  _renderErrorView() {
    return <ErrorView text={this.props.errorMessage}/>;
  }

  _renderLoadingView() {
    return <LoadingView />;
  }

  render() {
    if (this.props.isFetching && !this.props.errorMessage) {
      return this._renderLoadingView();
    }

    if (this.props.errorMessage) {
      return this._renderErrorView();
    }

    return this._renderContent();
  }


  _renderContent() {

    return (
      <View>
        <View style={pageStyles.info.box}>
          <Image source={require('../../data/file/1.png')} style={pageStyles.info.image}/>
          <View style={pageStyles.info.infoRight}>
            <Text style={pageStyles.info.title}>乐高积木</Text>
            <Text style={pageStyles.info.category}>益智 | 遥控 | 拼装 | 电动</Text>
            <Text style={pageStyles.info.desc}>通过一段极其夸张的开头动画，《喷射侠》简单明了地交代了这款游戏的背景故事。有一天，某个在油漆工厂上班的普通工人意外发现了老板的秘密。</Text>
          </View>
        </View>
        <View style={pageStyles.ctrl.box}>
          <TouchableOpacity onPress={() => {
          }} style={[pageStyles.ctrl.btn, pageStyles.ctrl.btnPrimary]}>
            <Text style={pageStyles.ctrl.text}>立即购买</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this._navTo('ManufacturerDetail')}
                            style={[pageStyles.ctrl.btn]}>
            <Text style={pageStyles.ctrl.text}>厂商频道</Text>
          </TouchableOpacity>
        </View>
        <View>
          <AutoSizeImage source={require('../../data/product/product.png')} style={pageStyles.productImage} width={DEVICE_WIDTH - 20}/>
        </View>
      </View>
    );
  }

  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }
}

export default ProductDetail;