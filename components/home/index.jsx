import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";

// default porque é algo singular
export default function Home({navigation}){

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    function logar(){
        if(user=='lin' && pass =='123'){
            console.log('Home')
        } else {
            console.log('LOSER')
        }
    }

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>
                    Welcome Home :)
                </Text>
            </View>


            {/* button */}
            <View style={styles.button2}> 
                <Pressable
                    style={styles.button}
                    onPress={()=> navigation.navigate('Products')}
                >
                    <Text style={styles.textButton}>
                        HomeCheck
                    </Text>
                </Pressable> 
            </View>

        </View>
    )
}
