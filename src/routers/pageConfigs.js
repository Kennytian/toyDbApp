import { StackNavigator } from 'react-navigation';

import HomeTabRouter from './homeTabRouter';

import ProductList from './../pages/product/productList';
import ProductDetail from './../pages/product/productDetail';

import SpecialList from './../pages/special/specialList';

import paymentChooser from './../pages/payment/paymentChooser';

const PageConfigs = StackNavigator({
  Main: {
    screen: HomeTabRouter,
    navigationOptions: {
      header: {
        title: '玩具', // 默认后退标题文字
        style: {
          backgroundColor: '#fff'
        }
      }
    }
  },

  paymentChooser: {screen: paymentChooser},

  ProductList: {screen: ProductList},

  SpecialList: {screen: SpecialList},

  ProductDetail: {screen: ProductDetail}
});

export default PageConfigs;