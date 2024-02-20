import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";

// default porque é algo singular
export default function Login({navigation}){

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    function logar(){
        if(user=='lin' && pass =='123'){
            navigation.navigate('Home')
        } else {
            console.log('LOSER')
        }
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

            {/* button */}
            <View style={styles.button2}> 
                <Pressable
                    style={styles.button}
                    onPress={()=> logar()}
                >
                    <Text style={styles.textButton}>
                        Enter
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}
