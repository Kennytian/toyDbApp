import { Platform } from 'react-native';

import Colors from '../../constants/colors';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  // 扩大按钮点击区域
  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },
  hitSlopSm: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },

  icon: {
    width: 18,
    height: 18,
    marginRight: 5
  },

  font: {
    size18: {
      fontSize: 18
    },
    size16: {
      fontSize: 16
    }
  },

  // 错误页面
  errorView: {
    icon: {
      width: DEVICE_WIDTH - 100,
      alignSelf: 'center'
    },
    msgWrapper: {
      marginTop: -80
    },
    text: {
      color: Colors.textColor,
      fontSize: 16,
      textAlign: 'center'
    },
    button: {
      borderRadius: 3,
      borderWidth: BORDER_WIDTH,
      width: 200,
      height: 46,
      marginTop: 60,
      justifyContent: 'center',
      alignSelf: 'center',
      borderColor: Colors.borderColor
    }
  },

  // 搜索条
  searchBar: {
    wrapper: {
      flexDirection: 'row',
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 1,
      borderColor: Colors.borderColor,
      borderRadius: 10,
      width: DEVICE_WIDTH - 60
    },
    magnifier: {
      marginLeft: 10,
      marginRight: Platform.select({android: 5, ios: 10}),
      alignSelf: 'center'
    },
    input: {
      paddingBottom: Platform.select({android: 5.5}),
      height: 30,
      width: DEVICE_WIDTH - 60 - 44
    },
    placeholderTextColor: Colors.inputColor
  },

  // icon 按钮
  iconButton: {
    container: {
      justifyContent: 'flex-end',
      alignSelf: 'center'
    },
    icon: {}
  },

  // tabBar 条
  tabBar: {
    container: {
      borderTopWidth: BORDER_WIDTH,
      borderTopColor: Colors.borderColor
    },
    innerWrapper: {
      borderBottomWidth: BORDER_WIDTH,
      borderBottomColor: Colors.borderColor,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
      height: 37
    },
    button: {
      fontWeight: '600',
      flex: 1,
      textAlign: 'center'
    },
    splitLine: {
      width: BORDER_WIDTH,
      height: 20,
      backgroundColor: Colors.borderColor
    },
    selected: {
      color: Colors.tabColor
    }
  }
};


export default styles;