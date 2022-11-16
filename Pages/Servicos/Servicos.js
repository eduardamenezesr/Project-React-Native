import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Servicos({navigation}){

    const ServicoCarro = () => {
        navigation.navigate("ServicoCarro")
      }

      const ServicoMoto = () => {
        navigation.navigate("ServicoMoto")
      }

      const ServicoBic = () => {
        navigation.navigate("ServicoBic")
      }

      const ServicoOn = () => {
        navigation.navigate("ServicoOn")
      }

    return(
        <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.txt}>{"\n"}{"\n"}SERVIÇOS{"\n"}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => ServicoCarro()}
        >
          <Image style={styles.imagem}
            source={require('./carro.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => ServicoMoto()}
        >
          <Image style={styles.imagem}
            source={require('./moto.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => ServicoBic()}
        >
          <Image style={styles.imagem}
            source={require('./bicicleta.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => ServicoOn()}
        >
          <Image style={styles.imagem}
            source={require('./onibus.jpg')}
        />
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    imagem: {
        width:400,
        height:150,
        resizeMode: 'stretch',
    },
    txt:{
        fontSize: 20,
        fontWeight: 'bold',
    }
  });