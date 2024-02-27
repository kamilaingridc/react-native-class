import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAE1DF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    text:{
        fontSize: 40,
        fontWeight:'bold',
        color: 'white'
    },
    button: {
        backgroundColor: '#D89A9E',
        width:'30%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default styles