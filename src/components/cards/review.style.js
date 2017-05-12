import colors from '../../constants/colors';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';

let styles = {
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginTop: 10
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
      flexDirection: 'row'
    },
    date: {
      flex: 2,
      fontSize: 13,
      fontWeight: '300',
      color: colors.borderColor
    },
    like: {
      wrapper: {
        flexDirection: 'row',
        flex: 0.6,
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
        flex: 0.25
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