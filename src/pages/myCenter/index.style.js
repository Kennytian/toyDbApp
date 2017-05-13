import Colors from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/global';

const styles = {
  myCenterWrap: {
    flex: 1,
    backgroundColor: Colors.bgColor
  },
  tittle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  center: {
    fontSize: 16
  },
  setImage: {
    position: 'absolute',
    right: 20
  },
  headerImg: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: DEVICE_WIDTH
  },
  userName: {
    marginBottom: 30
  },
  main: {
    marginTop: 10
  },
  exit: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginTop: 20
  },
  exitText: {
    fontSize: 15,
    color: Colors.tabColor
  }
};
export default styles;