import React, {useState} from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import styles from "./styles";

export default function Products(){

    const lista = [
        {
            id: '1',
            lanche: 'Xtudo',
            valor: 'R$25,00'
        },
        {
            id: '1',
            lanche: 'Xfrango',
            valor: 'R$25,00'
        },
        {
            id: '1',
            lanche: 'Xsalada',
            valor: 'R$25,00'
        },
        {
            id: '1',
            lanche: 'Xbacon',
            valor: 'R$25,00'
        },
        {
            id: '1',
            lanche: 'Xegg',
            valor: 'R$25,00'
        }
    ]

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Products:</Text>
                <FlatList>
                    data = {lista}
                    numColumns = {2}
                    renderItem={({item})=> 
                        <View>
                            <Text>
                                Lanche: {item.lanche} Valor: {item.valor}
                            </Text>
                        </View>
                    }
                </FlatList>
            </View>


        </View>
    )
}
