import { StackNavigator } from 'react-navigation';

import HomeTabRouter from './homeTabRouter';

import ProductDetail from './../pages/product/index';
import SpecialList from './../pages/special/specialList';
import SpecialDetail from './../pages/special/specialDetail';

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

  SpecialList: {screen: SpecialList},
  SpecialDetail: {screen: SpecialDetail},

  ProductDetail: {screen: ProductDetail},

  ManufacturerDetail: {screen: ManufacturerDetail},

  ReviewList: {screen: ReviewList},

  DevEntry: {screen: DevEntry},
  OhError: {screen: OhError},

  PersonalChange: {screen: PersonalChange}
});

export default PageConfigs;