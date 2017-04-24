import { Platform } from 'react-native';

import Colors from '../../constants/colors';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';

const styles = {
  container: {
    flex: 1
  },

  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },

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
      marginRight: 10,
      alignSelf: 'center'
    },
    input: {
      paddingBottom: Platform.select({android: 5}),
      height: 30,
      width: DEVICE_WIDTH - 60
    },
    placeholderTextColor: Colors.inputColor
  },

  scanButton: {
    container: {
      justifyContent: 'flex-end',
      alignSelf: 'center'
    },
    icon: {}
  }
};


export default styles;