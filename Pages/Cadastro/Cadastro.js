import React, { useState } from 'react';
import { StyleSheet,  View} from 'react-native';
import { Input, Text, Button} from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../bd/firebaseConnection';

export default function Cadastro() {

  const [email, setEmail] = useState(null)  
  const [password, setPassword] = useState(null)
  const [nome, setNome] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)

  async function createUser(){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(value => {
      console.log('cadastrado \n' + value.user.uid)
    })
    .catch(error => console.log(error))
  };

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorNome(null)
    setErrorSenha(null)
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
      if (nome == null){
        setErrorNome("Preencha seu nome")
        error = true
      }
      if (password == null){
        setErrorSenha("Preencha sua senha")
        error = true
      }
      return !error
}
  const criar = () => {
    if (validar()){
      alert("Cadastrado com sucesso!")
    }
  }
  
  return (
    <View style={styles.container}>
      <Text h3>Cadastre sua conta</Text>
      
      <Input
      placeholder="Nome"
      leftIcon={{type: 'font-awesome', name: 'user'}}
      onChangeText={value => setNome(value)}
      keyboardType='nome'
      errorMessage={errorNome}
      />
      <Input
      placeholder="E-mail"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType='email-address'
      errorMessage={errorEmail}
      />
      <Input
      placeholder="Senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      errorMessage={errorSenha}
      />
    
    <Button
              title={'Cadastrar'}
              onPress={() => createUser() + criar()}
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
