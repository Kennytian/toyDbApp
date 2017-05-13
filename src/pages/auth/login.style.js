import Colors from '../../constants/colors';
import { DEVICE_WIDTH, BORDER_WIDTH, DEVICE_HEIGHT } from '../../constants/global';
import { ACTIVE_OPACITY } from '../../constants/toyDb';

const styles = {
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
  },

  underline: 'transparent',
  keyboardType: 'numeric',
  placeholderTextColor: Colors.borderColor,
  activeOpacity: ACTIVE_OPACITY,

  phoneNumView: {
    wrapper: {
      width: DEVICE_WIDTH - 70,
      flexDirection: 'row',
      alignSelf: 'center',
      height: 40
    },
    code: {
      width: 55,
      fontSize: 18,
      borderBottomWidth: BORDER_WIDTH,
      borderBottomColor: Colors.tabColor
    },
    phone: {
      fontSize: 18,
      flex: 1,
      marginLeft: 25,
      borderBottomWidth: BORDER_WIDTH,
      borderBottomColor: Colors.tabColor
    }
  },

  validateCodeView: {
    wrapper: {
      marginTop: 10,
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
        alignSelf: 'center',
        justifyContent: 'center'
      },
      text: {
        color: Colors.white,
        alignSelf: 'center',
        fontSize: 13,
        padding: 2
      }
    }
  },


  loginButton: {
    wrapper: {
      backgroundColor: Colors.tabColor,
      width: DEVICE_WIDTH - 70,
      marginTop: 20,
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