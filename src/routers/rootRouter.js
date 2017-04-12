import { StackNavigator } from 'react-navigation';

import FrameNavigator from './../pages/frameNavigator';

import ProductList from './../pages/product/productList';
import ProductDetail from './../pages/product/productDetail';

import SpecialList from './../pages/special/specialList';

import paymentChooser from './../pages/payment/paymentChooser';

const rootRouter = StackNavigator({
  Main: {
    screen: FrameNavigator,
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

  SpecialList: {screen: SpecialList},

  ProductList: {screen: ProductList},
  ProductDetail: {screen: ProductDetail}
});

export default rootRouter;