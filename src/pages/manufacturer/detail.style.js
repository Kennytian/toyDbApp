import Colors from '../../constants/colors';
import { DEVICE_WIDTH, BORDER_WIDTH } from '../../constants/global';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  banner: {
    image: {
      width: DEVICE_WIDTH,
      height: 200,
      flexDirection: 'column'
    },
    mask: {
      backgroundColor: 'rgba(255,255,255,.9)',
      flex: 1,
      alignItems: 'center'
    },
    logo: {
      width: 80,
      height: 80,
      marginTop: 40,
      marginBottom: 5,
      borderRadius: 6
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
    }
  },
  desc: {
    box: {
      padding: 10,
      marginTop: 10,

      backgroundColor: 'white'
    },
    text: {
      color: Colors.textColor,
      lineHeight: 20
    },
    ctrl: {
      justifyContent: 'center',
      flexDirection: 'row',
      borderTopColor: Colors.borderGray,
      borderTopWidth: BORDER_WIDTH,
      paddingTop: 6,
      marginTop: 10
    }
  }
};

export default styles;