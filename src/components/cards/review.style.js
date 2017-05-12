import colors from '../../constants/colors';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';

let styles = {
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginTop: 10
  },
  reviewOnly: {
    container: {
      borderBottomWidth: BORDER_WIDTH,
      borderBottomColor: colors.borderColor,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0
    },
    info: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    bottomRow: {
      justifyContent: 'flex-end',
      marginTop: 5
    }
  },
  avatar: {
    box: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden'
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20
    }
  },
  avatarRight: {
    marginLeft: 10,
    flex: 1
  },
  textRow1: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.gray6
  },
  textRow2: {
    fontSize: 14.5,
    fontWeight: '300',
    lineHeight: 18,
    paddingBottom: 5
  },
  splitLine: {
    marginTop: 8,
    marginBottom: 8,
    height: BORDER_WIDTH,
    backgroundColor: colors.borderColor
  },
  reply: {
    marginTop: 5,
    backgroundColor: colors.borderBottom,
    padding: 10,
    paddingTop: 6,
    borderRadius: 5
  },
  textRow3: {
    fontSize: 14.5,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.gray3
  },
  bottomRow: {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    ctrlBox: {
      flexDirection: 'row'
    },
    date: {
      fontSize: 13,
      fontWeight: '300',
      color: colors.borderColor
    },
    like: {
      wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        marginRight: 3,
        width: 16,
        height: 16
      },
      count: {
        fontSize: 13,
        fontWeight: '300',
        color: colors.borderColor
      }
    },
    reply: {
      wrapper: {
        marginLeft: 20
      },
      text: {
        fontSize: 13,
        fontWeight: '300',
        color: colors.tabColor
      }
    }
  }
};

export default styles;