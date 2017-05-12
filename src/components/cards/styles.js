import { Platform } from 'react-native';

import Colors from '../../constants/colors';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';

const styles = {
  container: {
    flex: 1
  },

  // 扩大按钮点击区域
  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },

  // 图片 Card
  imageCard: {
    container: {},
    image: {
      height: 120,
      width: DEVICE_WIDTH - 20,
      borderRadius: 6
    },
    title: {
      mask: {
        backgroundColor: Colors.alphaBlack,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: Platform.select({ios: 6, android: 0}),
        borderBottomRightRadius: Platform.select({ios: 6, android: 0}),
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        flexDirection: 'row'
      },
      text: {
        fontSize: 16,
        color: Colors.white,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        textAlign: 'left',
        backgroundColor: 'transparent'
      }
    }
  }

};


export default styles;