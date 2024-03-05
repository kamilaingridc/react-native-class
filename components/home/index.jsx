import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

// default porque é algo singular
export default function Home({navigation}){

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
