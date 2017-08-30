import colors from '../../../constants/colors';
import { DEVICE_WIDTH, BORDER_WIDTH } from '../../../constants/global';

export default {
  container: {
    flex: 1
  },
  title: {
    color: colors.gray6,
    padding: 10
  },
  list: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    width: (DEVICE_WIDTH - 20) * .5,
    alignItems: 'center',
    flexDirection: 'row',
    height: 36
  },
  itemTopBorder: {
    borderTopColor: colors.borderGray,
    borderTopWidth: BORDER_WIDTH
  },
  itemRightBorder: {
    borderRightColor: colors.borderGray,
    borderRightWidth: BORDER_WIDTH,
    marginRight: 10,
    flex: 1
  },
  text: {
    color: colors.gray6
  }
};