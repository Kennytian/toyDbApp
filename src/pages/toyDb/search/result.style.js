import colors from '../../../constants/colors';

export default {
    container: {
        flex: 1
    },
    area: {
        title: {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            marginBottom: 6,
            color: colors.gray3,
            fontSize: 16
        }
    },
    manufacturer: {
        box: {
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row'
        },
        imageBox: {
            width: 40,
            height: 40,
            borderRadius: 3,
            overflow: 'hidden',
            marginRight: 10
        },
        image: {
            width: 40,
            height: 40,
            borderRadius: 3
        },
        info: {
            box: {
                flex: 1
            },
            title: {
                fontSize: 15,
                color: colors.gray6,
                marginBottom: 3
            },
            info: {
                color: colors.gray9
            }
        },
        arrow: {
            width: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        arrowImage: {
            width: 32,
            height: 32
        }
    }

};