import { Platform } from 'react-native';
import { getWidth, getHeight } from '../../utils/size';

const styles = {
    searchView: {
        paddingTop: Platform.select({ios: 25, android: 8}),
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
    },
    inputImg: {
        flexDirection: 'row',
        marginRight: 12,
        alignItems: 'center',
        flex: 1,
        width: getWidth(594),
        height: getHeight(594, 58)
    },
    sourceImg: {
        marginLeft: 15,
        width: 16,
        height: 16
    },
    textInputView: {
        flex: 1,
        height: Platform.select({ios: 30, android: 32}),
        fontSize: 13,
        paddingLeft: 10
    },
    searchCancel: {}
};

export default styles;