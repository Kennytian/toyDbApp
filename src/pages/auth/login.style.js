import Colors from '../../constants/colors';
import { DEVICE_WIDTH, BORDER_WIDTH, DEVICE_HEIGHT, IS_ANDROID } from '../../constants/global';
import { ACTIVE_OPACITY } from '../../constants/toyDb';

const styles = {
  underline: 'transparent',
  keyboardType: 'numeric',
  placeholderTextColor: Colors.borderColor,
  activeOpacity: ACTIVE_OPACITY,

  container: {
    paddingTop: IS_ANDROID ? '30%' : '50%',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
  },

  phoneNumView: {
    container: {
      width: DEVICE_WIDTH - 70,
      flexDirection: 'row',
      alignSelf: 'center',
      height: 40
    },
    wrapper: {
      borderBottomWidth: BORDER_WIDTH,
      borderBottomColor: Colors.tabColor
    },
    code: {
      width: 55,
      fontSize: 18
    },
    phone: {
      fontSize: 18
    }
  },

  validateCodeView: {
    wrapper: {
      marginTop: 20,
      width: DEVICE_WIDTH - 70,
      flexDirection: 'row',
      alignSelf: 'center',
      height: 40,
      borderBottomWidth: BORDER_WIDTH,
      borderBottomColor: Colors.tabColor
    },
    phone: {
      fontSize: 18,
      flex: 1
    },
    btn: {
      wrapper: {
        backgroundColor: Colors.tabColor,
        borderRadius: 5,
        padding: IS_ANDROID ? 4 : 8,
        alignSelf: 'center',
        justifyContent: 'center'
      },
      text: {
        color: Colors.white,
        alignSelf: 'center',
        fontSize: 13
      }
    }
  },

  loginButton: {
    wrapper: {
      backgroundColor: Colors.tabColor,
      width: DEVICE_WIDTH - 70,
      marginTop: 40,
      height: 40,
      borderRadius: 5,
      alignSelf: 'center',
      justifyContent: 'center'
    },
    text: {
      color: Colors.white,
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '500'
    }
  }

};

export default styles;