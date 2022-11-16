import React, { useState } from 'react';
import { StyleSheet,  View, Image} from 'react-native';
import { Input, Text, Button, Icon } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}) {
  
  const [email, setEmail] = useState(null)  
  const [password, setPassword] = useState(null)

  const Logar = () => {
    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name:'Servicos'}]
    })
  }
  
  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const criar = () => {
    if (entrar()){
      console.log('Logou :)')
    }
  }
  
  return (
    <View style={styles.container}>
      <Text h3>Chave de Roda</Text>
      <Image 
        source={require('./logo2.png')}
      />
      
      <Input
      placeholder="E-mail"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType='email-address'
      />
      <Input
      placeholder="Senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
      <Button
              title={'Entrar'}
              onPress={() => Logar() + criar()}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
      <Button
              title={'Cadastre-se'}
              onPress={() => cadastrar()}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
