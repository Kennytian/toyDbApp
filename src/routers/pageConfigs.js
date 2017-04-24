import { StackNavigator } from 'react-navigation';

import HomeTabRouter from './homeTabRouter';

import ProductList from './../pages/product/productList';
import ProductDetail from './../pages/product/productDetail';

import SpecialList from './../pages/special/specialList';

import paymentChooser from './../pages/payment/paymentChooser';

import ReviewList from './../pages/reviewList';

//开发入口
import DevEntry from '../pages/devEntry/index';
import OhError from '../pages/devEntry/ohError';

const PageConfigs = StackNavigator({
  Main: {
    screen: HomeTabRouter,
    navigationOptions: {
      headerTitle: '玩具', // 默认后退标题文字
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  },

  paymentChooser: {screen: paymentChooser},

  ProductList: {screen: ProductList},

  SpecialList: {screen: SpecialList},

  ProductDetail: {screen: ProductDetail},

  ReviewList: {screen: ReviewList},

  DevEntry: {screen: DevEntry},
  OhError: {screen: OhError}
});

export default PageConfigs;