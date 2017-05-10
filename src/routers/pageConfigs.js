import { StackNavigator } from 'react-navigation';

import HomeTabRouter from './homeTabRouter';

import ProductDetail from './../pages/product/detail';
import ProductExponent from './../pages/product/exponent';
import ProductGrade from './../pages/product/grade';
import ProductRecommend from './../pages/product/recommend';

import SpecialList from './../pages/special/specialList';

import paymentChooser from './../pages/payment/paymentChooser';

import ReviewList from '../pages/review/reviewList';

import ManufacturerDetail from '../pages/manufacturer/detail';

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

  SpecialList: {screen: SpecialList},

  ProductDetail: {screen: ProductDetail},
  ProductExponent: {screen: ProductExponent},
  ProductGrade: {screen: ProductGrade},
  ProductRecommend: {screen: ProductRecommend},

  ManufacturerDetail: {screen: ManufacturerDetail},

  ReviewList: {screen: ReviewList},

  DevEntry: {screen: DevEntry},
  OhError: {screen: OhError},

  PersonalChange: {screen: PersonalChange}
});

export default PageConfigs;