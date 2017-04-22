import Colors from '../../constants/colors';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';

const styles = {
  container: {
    flex: 1
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
  }

};


export default styles;