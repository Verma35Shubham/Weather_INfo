import { StyleSheet } from 'react-native'

const sheet1 = StyleSheet.create({
    main:
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        height: '100%',
        margin: 5,
        padding: 3,
        marginTop: 20,
        paddingBottom: 25,
    },
    header:
    {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        backgroundColor: 'antiquewhite',
        height: '13%',
        width: '100%',
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'maroon',
    },
    appname:
    {
        fontWeight: 'bold',
        paddingLeft: 5,
        fontSize: 17,
        color: '#326e45'
    },
    searchbar:
    {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        textAlign: 'center',
        borderColor: '#326e45',
        width: '40%',
        height: 30,
        color: 'white',
        fontSize: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 15,
        alignItems: "flex-end",
    },
    searchicon:
    {
        height: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        color: 'brown',
        borderColor: '#326e45',
        fontSize: 30,
    },
    menueicon:
    {
        color: 'burlywood',
        fontSize: 30,
        
    },
    buttons:
    {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        // alignItems:'center',
    },
    days:
    {
        backgroundColor: 'burlywood',
        width: '20%',
        borderLeftColor: '#071112',
        borderBottomColor: 'midnightblue',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 5,
        borderRadius:5,
        padding: 7,

    },
    day:
    {
        color: 'darkblue',
        textAlign: 'center',
        fontSize: 15,
        textTransform: 'uppercase',
    }
})
export default sheet1;