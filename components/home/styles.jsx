import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAE1DF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#D89A9E'
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
        width: 250,
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
