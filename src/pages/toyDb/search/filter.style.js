import colors from '../../../constants/colors';
import { BORDER_WIDTH } from '../../../constants/global';

export default {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        box: {
            margin: 10
        },
        title: {
            fontSize: 16,
            color: colors.gray3,
            fontWeight: 'bold',
            marginBottom: 10
        },
        optionBox: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        option: {
            borderRadius: 6,
            borderWidth: BORDER_WIDTH,
            borderColor: colors.borderGray,
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 10,
            paddingRight: 10,
            marginRight: 10,
            minWidth: 70,
            justifyContent: 'center',
            flexDirection: 'row'
        },
        optionActive: {
            backgroundColor: '#99ccff',
            borderColor: '#99ccff'
        },
        text: {
            color: colors.gray9,
            fontSize: 14
        },
        textActive: {
            color: 'white'
        },
        inputBox: {
            flexDirection: 'row'
        },
        input: {}
    },
    foot: {
        box: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center'
        },
        btn: {
            flex: 1,
            justifyContent: 'center',
            height: 40,
            flexDirection: 'row',
            alignItems: 'center'
        },
        btn1: {
            backgroundColor: '#99ccff'
        },
        btn2: {
            backgroundColor: '#6699ff'
        },
        text: {
            color: 'white'
        }
    }
};