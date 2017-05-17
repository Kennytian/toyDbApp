import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';
import { Platform } from 'react-native';
import Colors from '../../constants/colors';

const styles = {
    searchView: {
        marginTop: Platform.select({ios: 25, android: 8}),
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    inputImg: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        flex: 1
    },
    sourceImg: {
        marginLeft: 15
    },
    textInputView: {
        marginLeft: 13,
        flex: 1,
        height: 30,
        marginRight: 13
    },
    searchCancel: {}
};

export default styles;