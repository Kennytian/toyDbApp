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
        borderBottomLeftRadius: Platform.select({ios: 6, android: 0}),
        borderBottomRightRadius: Platform.select({ios: 6, android: 0}),
        bottom: 0,
        left: 0,
        position: 'absolute'
      },
      text: {
        fontSize: 16,
        color: Colors.white,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        textAlign: 'center'
      }
    }
  },

  // 评论 Card
  reviewCard: {
    container: {
      padding: 9,
      borderRadius: 5
    },
    textRow1: {
      fontSize: 10.5,
      fontWeight: '300'
    },
    textRow2: {
      fontSize: 11,
      fontWeight: '300',
      lineHeight: 12
    },
    splitLine: {
      marginTop: 8,
      marginBottom: 8,
      height: BORDER_WIDTH,
      backgroundColor: Colors.borderColor
    },
    reply: {
      marginTop: 5,
      backgroundColor: Colors.borderBottom,
      padding: 5,
      borderRadius: 5
    },
    textRow3: {
      fontSize: 11,
      fontWeight: '400',
      lineHeight: 15
    },
    bottomRow: {
      container: {
        flexDirection: 'row',
        marginBottom: -4
      },
      date: {
        flex: 2,
        fontSize: 9,
        fontWeight: '300',
        color: Colors.borderColor
      },
      like: {
        wrapper: {
          flexDirection: 'row',
          flex: 0.8,
          alignItems: 'center'
        },
        icon: {
          marginRight: 3,
          width: 12,
          height: 12
        },
        count: {
          fontSize: 9,
          fontWeight: '300',
          color: Colors.borderColor
        }
      },
      reply: {
        wrapper: {
          flex: 0.25
        },
        text: {
          fontSize: 9,
          fontWeight: '300',
          color: Colors.tabColor
        }
      }
    }
  }

};


export default styles;