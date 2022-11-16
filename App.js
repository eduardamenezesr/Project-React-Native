import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Pages/Login/Login';
import Servicos from './Pages/Servicos/Servicos';
import Cadastro from './Pages/Cadastro/Cadastro';
import ServicoCarro from './Pages/ServicoCarro/ServicoCarro';
import ServicoMoto from './Pages/ServicoMoto/ServicoMoto';
import ServicoBic from './Pages/ServicoBic/ServicoBic';
import ServicoOn from './Pages/ServicoOnibus/ServicoOn';


const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
        }}
        name="Login"
        component={Login} />
      <Stack.Screen 
      options={{
        title: '',
        headerTransparent: true,
        headerShow: false,
      }}
      name="Servicos"
      component={Servicos} />
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
        }}
        name="Cadastro"
        component={Cadastro} />
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
        }}
        name="ServicoCarro"
        component={ServicoCarro} />
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
        }}
        name="ServicoMoto"
        component={ServicoMoto} />
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
        }}
        name="ServicoBic"
        component={ServicoBic} />
      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
        }}
        name="ServicoOn"
        component={ServicoOn} />
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}