import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";
import axios from "axios";

// default porque é algo singular
export default function Register({navigation}){

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const auth = getAuth(app);

    function pesquisar(){
        console.log('u re innn')
        axios.get('https://viacep.com.br/ws/'+ cep +'/json/')
        .then((response)=> {
            console.log(response.data.logradouro)
        })
    }

    function cadastrar(){        

        createUserWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            navigation.navigate('Home')
            // Signed in 
            const user = userCredential.user;
    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>
                    Login
                </Text>
            </View>

            {/* login */}
            <View>
                <TextInput 
                placeholder="User" 
                style={styles.box} 
                onChangeText={setUser}
                value={user}
                />
            </View>

            {/* password */}
            <View style={styles.boxbox}>
                <TextInput 
                    placeholder="Password" 
                    style={styles.box} 
                    onChangeText={setPass}
                    value={pass}
                    secureTextEntry={true}
                />
            </View>

            {/* cep */}
            <View style={styles.boxbox}>
                <TextInput 
                    placeholder="CEP" 
                    style={styles.box} 
                    onChangeText={setCep}
                    value={cep}
                />
            </View>

            {/* button */}
            <View style={styles.button2}> 
                <Pressable
                    style={styles.button}
                    onPress={()=> pesquisar()}
                >
                    <Text style={styles.textButton}>
                        Enter
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}
