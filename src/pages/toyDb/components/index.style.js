import { BORDER_WIDTH } from '../../../constants/global';
import colors from './../../../constants/colors';

let pageStyles = {
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  },
  filter: {
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      borderBottomColor: colors.borderBottom,
      borderBottomWidth: BORDER_WIDTH
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    }
  }
};

export default pageStyles;