import React, {useState} from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import styles from "./styles";

export default function Products(){

    const lista = [
        {
            id: '1',
            brinco: 'Stud',
            valor: 'R$25,00'
        },
        {
            id: '2',
            brinco: 'Stud',
            valor: 'R$25,00'
        },
        {
            id: '3',
            brinco: 'Ear Cuff',
            valor: 'R$25,00'
        },
        {
            id: '4',
            brinco: 'Ear Hook',
            valor: 'R$25,00'
        },
        {
            id: '5',
            brinco: 'Brinco Cascata',
            valor: 'R$25,00'
        }
    ]

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Products:</Text>
                <FlatList
                    data = {lista}
                    numColumns = {2}
                    renderItem={({item})=> 
                        <View >
                            <Text >
                                {item.brinco} - {item.valor} <br/>
                            </Text>
                        </View>
                    }
                />
            </View>


        </View>
    )
}
