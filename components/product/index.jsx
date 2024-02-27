import { View, Text, Pressable, Image } from "react-native"
import styles from "./styles"

export default function Product({navigation, route}){

    const {id, produto, preco, foto } = route.params
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Product</Text>
            <Image source={require= foto} style={{width:100, height:100}}></Image>
        </View>
    )
}