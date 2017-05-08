import { StackNavigator } from 'react-navigation';

import HomeTabRouter from './homeTabRouter';

import ProductList from './../pages/product/productList';
import ProductDetail from './../pages/product/productDetail';

import SpecialList from './../pages/special/specialList';

import paymentChooser from './../pages/payment/paymentChooser';

import ReviewList from '../pages/review/reviewList';

//开发入口
import DevEntry from '../pages/devEntry/index';
import OhError from '../pages/devEntry/ohError';
import PersonalChange from '../pages/myCenter/personalChange';

const PageConfigs = StackNavigator({
  Main: {
    screen: HomeTabRouter,
    navigationOptions: {
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
  OhError: {screen: OhError},

  PersonalChange: {screen: PersonalChange}
});

export default PageConfigs;