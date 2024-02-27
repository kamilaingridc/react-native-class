import { StyleSheet } from "react-native";

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
        marginTop:30,
    },

    text2:{
        fontSize: 25,
        fontWeight:'bold',

    },

    box:{
        width: 250,
        height: 40,
        borderRadius: 10,
        padding: 10, 
        backgroundColor: '#ddd',
        fontSize: 16,
        color: '#000',
        marginTop: 20,
        borderColor: '#D89A9E'
    },

    button: {
        backgroundColor: '#D89A9E',
        width:'30%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    
    produto:{
        width:150,
        height: 190,
        backgroundColor:'white',
        padding:10,
        margin:20,
        alignItems:'center',
    },

    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    boxbox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button2: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles
