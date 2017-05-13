import Colors from '../../constants/colors';

let pageStyles = {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    paddingBottom: 30
  },
  title: {
    color: Colors.gray3,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    lineHeight: 20
  },
  info: {
    color: Colors.gray6,
    fontSize: 13,
    marginBottom: 20
  },
  mainFont: {
    fontSize: 16,
    color: Colors.gray6,
    lineHeight: 20,
    marginBottom: 10
  },
  image: {
    marginBottom: 10
  },
  footCtrl: {
    box: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center'
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center',
      flexDirection: 'row'
    }
  }
};

export default pageStyles;