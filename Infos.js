import { StyleSheet } from 'react-native';


const sheet1 = StyleSheet.create({
    card:
    {
        backgroundColor: 'ghostwhite',
        height: '100%',
        width: '100%',
        backgroundColor: "#6aa19b",
        display: 'flex',
        padding: 4,
    },
    section1:
    {
        // paddingTop:20,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'honeydew',
        alignItems: 'center',
    },
    logo:
    {
        margin: 7,
        fontSize: 100,
        color: 'goldenrod',
    },
    section2:
    {
        width: "100%",
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor:'orange',
        alignItems: 'center',
    },
    datetime:
    {
        paddingTop: 20,
        paddingBottom: 20,
        width: "30%",
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'lightgoldenrodyellow',
        alignItems: 'center',
        marginLeft: 1,
    },
    tempcountry:
    {
        height: '100%',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        width: "70%",
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'oldlace',
        alignItems: 'center',
        marginLeft: 1,
    },
    section3:
    {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor:'linen',
        alignItems:'center',
    },


})

export default sheet1;