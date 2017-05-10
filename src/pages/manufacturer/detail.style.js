import Colors from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/global';

const styles = {
  container: {
    flex: 1
  },
  holderImage: {
    width: DEVICE_WIDTH,
    height: 200
  },
  holderImageHot: {
    width: DEVICE_WIDTH,
    height: 300
  },
  descText: {
    margin: 10,
    color: Colors.textColor,
    lineHeight: 20
  }
};

export default styles;