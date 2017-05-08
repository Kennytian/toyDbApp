import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from 'react-native';

import InformationList from './../../components/common/informationList';

import ImageSource from './../../constants/imageSource';
import styles from './personalChange.style';

class PersonalChange extends Component {

  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: '个人信息更改'
  };

  ccc = () =>{
    alert(1);
  }

  render(){
    return(
        <View style={styles.personalChange}>
          <View style={styles.main}>
            <InformationList
              press={this.ccc}
              icon={ImageSource.personal}
              text="头像更改"
              rightBtn={ImageSource.myCenter.rightBtn}
            />
            <InformationList
              press={this.ccc}
              icon={ImageSource.change}
              text="名称更改"
              rightBtn={ImageSource.myCenter.rightBtn}
            />
          </View>
        </View>
    );
  }

}
export default PersonalChange;