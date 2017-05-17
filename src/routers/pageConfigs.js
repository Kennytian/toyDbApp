import { StackNavigator } from 'react-navigation';

import HomeTabRouter from './homeTabRouter';
import Login from './../pages/auth/login';

import ProductDetail from './../pages/product/index';
import SpecialList from './../pages/special/specialList';
import SpecialDetail from './../pages/special/specialDetail';

import ReviewList from '../pages/review/reviewList';
import ManufacturerDetail from '../pages/manufacturer/detail';

import Error from '../pages/error';
import MyMessage from '../pages/myCenter/message/index';
import MyProfile from '../pages/myCenter/profile';
import MyViewHistory from '../pages/myCenter/viewHistroy';

import Search from '../pages/toyDb/search/index';
import SearchFilter from '../pages/toyDb/search/filter';
import SearchResult from '../pages/toyDb/search/result';
import ScanPreview from '../pages/scan/index';

const PageConfigs = StackNavigator({
  Main: {
    screen: Login
  },
  Home: {
    screen: HomeTabRouter,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  },
  Login: {screen: Login},
  SpecialList: {screen: SpecialList},
  SpecialDetail: {screen: SpecialDetail},

  ProductDetail: {screen: ProductDetail},

  ManufacturerDetail: {screen: ManufacturerDetail},

  ReviewList: {screen: ReviewList},

  Error: {screen: Error},

  MyMessage: {screen: MyMessage},
  MyProfile: {screen: MyProfile},
  MyViewHistory: {screen: MyViewHistory},

  Search: {screen: Search},
  SearchFilter: {screen: SearchFilter},
  SearchResult: {screen: SearchResult},
  ScanPreview: {screen: ScanPreview}
});

export default PageConfigs;