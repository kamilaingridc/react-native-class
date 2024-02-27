import { View, SafeAreaView, Text, Pressable, FlatList, Image } from "react-native"
import styles from "./styles"

export default function Products({navigation}){

    const lista = [
        {
            id: 1,
            nome: 'Brinco Stud',
            preco: 'R$ 25,00',
            foto: './images/brinco-stud-maxi'
        },
        {
            id: 2,
            nome: 'Brinco Ear Cuff',
            preco: 'R$ 15,00',
            foto: './images/ear-cuff.jpeg'
        },
        {
            id: 3,
            nome: 'Brinco Ear Hook',
            preco: 'R$ 20,00',
            foto: './images/ear-hook.jpeg'
        },
        {
            id: 4,
            nome: 'Brinco Ear Ganho',
            preco: 'R$ 30,00',
            foto: './images/ganho.jpeg'
        }
        
    ]

    return(
        < SafeAreaView style={styles.container}>
            <Text style={styles.text}>Produtos</Text>
            <FlatList
                data={lista}
                numColumns={2}
                renderItem={({ item }) =>
                    <View style={styles.produto}>
                        <Text style={styles.text2}>{item.nome}</Text>
                        <Pressable
                         onPress={()=>navigation.navigate(
                            "Product", {
                            id: item.id,
                            produto: item.nome,
                            preco: item.preco,
                            foto: item.foto
                         }
                         )}
                        
                        >
                            <Image source={require= item.foto } style={{ width: 90, height: 90 }} />
                        </Pressable>
                        <Text style={styles.text2}>{item.preco}</Text>

                    </View>

                } />
        </SafeAreaView>
    )
}