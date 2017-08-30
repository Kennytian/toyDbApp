import { BORDER_WIDTH } from '../../../constants/global';
import Colors from './../../../constants/colors';

let pageStyles = {
  list: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  filter: {
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      borderBottomColor: Colors.borderGray,
      borderBottomWidth: BORDER_WIDTH
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      marginLeft: 5
    }
  }
};

export default pageStyles;