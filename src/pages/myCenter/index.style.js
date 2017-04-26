import Colors from '../../constants/colors';


const styles={
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
    alignItems: 'center'
  },
  userName: {
    marginBottom: 30
  },
  main: {
    marginTop: 10
  },
  public: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderBottom
  },
  mypic: {
    marginLeft: 11
  },
  mytext: {
    marginLeft: 13,
    flex: 1
  },
  arrows: {
    marginRight: 15
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
    color: Colors.exit
  }
};
export default styles;