import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import imageSource from './../../constants/imageSource';
import Colors from './../../constants/colors';

const styles = {
    main: {
        flexDirection: 'row',
        height: 40,
        borderBottomColor: Colors.borderGray,
        borderBottomWidth: 0.5,
        marginLeft: 10,
        marginRight: 10
    },
    mainTittle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    more: {
        fontSize: 16,
        marginRight: 10,
        color: '#666'
    },
    hotTittle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 6,
        color: '#7ba9f6'
    },
    titleImg: {
        width: 22,
        height: 22
    }
};

class Title extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.mainTittle}>
                        <Image
                            style={styles.titleImg}
                            source={this.props.titleImg}
                            resizeMode='contain'
                        />
                        <Text style={styles.hotTittle}>{this.props.titleText}</Text>
                    </View>
                    {this.props.rightText ?
                        <TouchableOpacity style={styles.rightText} onPress={this.props.onPressRight}>
                            <Text style={styles.more}>{this.props.rightText}</Text>
                            <Image
                                style={styles.rightBtn}
                                source={imageSource.home.rightBtn}
                            />
                        </TouchableOpacity> : null
                    }
                </View>

            </View>
        );
    }
}
export default Title;