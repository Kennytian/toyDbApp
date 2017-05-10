import { BORDER_WIDTH } from '../../../constants/global';
import colors from '../../../constants/colors';

let styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },


  grade: {
    box: {
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 5
    },
    starList: {
      flexDirection: 'row',
      flex: 1
    },
    starImage: {
      width: 18,
      height: 18,
      marginRight: 6
    },
    left: {
      flex: 2
    },
    right: {
      flex: 1,
      marginTop: 5,
      marginBottom: 4
    },
    rightBorderBox: {
      borderWidth: BORDER_WIDTH,
      borderColor: '#91b8f8',
      borderRadius: 6,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 4,
      paddingBottom: 4
    },
    label: {
      marginRight: 20,
      color: colors.gray6,
      fontSize: 14
    },
    score: {
      color: '#ffac2d',
      fontSize: 45,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    tip: {
      color: colors.gray6,
      fontSize: 14,
      textAlign: 'center'
    },

    ctrl: {
      btn: {
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#ffac2d',
        flexDirection: 'row',
        alignItems: 'center'
      },
      btnText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        flex: 1
      }
    }

  },
  area: {
    marginTop: 20
  },
  font: {
    margin: 10,
    marginBottom: 0,
    color: colors.gray6,
    lineHeight: 18
  }
};

export default styles;