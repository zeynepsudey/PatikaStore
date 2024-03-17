import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin: 10,
        height: Dimensions.get('window').height / 2.5,
        width: Dimensions.get('window').width / 2.23,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginBottom: 5,
        paddingLeft: 10,
    },
    price:{
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        margin: 15,
    },
    inStock: {
        fontSize:15,
        fontWeight:"bold",
        color:"red",
        paddingLeft: 10,

    },


});