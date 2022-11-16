import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Comentarios1 from '../ServicoCarro/Comentario.js';
import DataTime from '../ServicoCarro/Data.js';

export default function ServicoCarro({navigation}){
  const agendar = () => {
    navigation.reset({
      index: 0,
      routes: [{name:'Servicos'}]
  })
  }

  const oficinas = ["Oficina 1", "Oficina 2", "Oficina 3"]
  const [servicos, setServicos] = useState([])

  const alerta = () => {
    alert('Agendado com sucesso :)')
  }

  const options = [
    "Troca de óleo - R$ 600,00",
    "Alinhamento/balanceamento - R$ 200,00",
    "Troca de pneu - R$ 300,00",
    "Manutenção de embreagem - R$ 400,00"
  ]

  function pickServicos(selectedServico){

    if(servicos.includes(selectedServico)){
      setServicos(servicos.filter(servico => servico !== selectedServico))
      return;
    }

    setServicos(servicos=>servicos.concat(selectedServico))
  }
  
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>{"\n"}{"\n"}{"\n"}AGENDAMENTO</Text>
        <Text style={styles.txt}>{"\n"}Selecione a oficina:</Text>
        <SelectDropdown label="Selecione a Oficina"
            data={oficinas}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
          <Text style={styles.txt}>Selecione o serviço:</Text>
          <View style={styles.options}>
            {
              options.map(option=>
                <View key={option} style={styles.servicos}>
              <TouchableOpacity style={styles.CheckBox} onPress={()=>pickServicos(option)}>
                { servicos.includes (option) && <Text style={styles.check}>✅</Text>}
              </TouchableOpacity>
              <Text style={styles.servicosName}>{option}</Text>
              </View>)
            }
          </View>
          <DataTime></DataTime>
          <Text></Text>
          <Comentarios1></Comentarios1>
            <Button
              style={styles.button}
              title={'Agendar'}
              onPress={() => agendar() + alerta()}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
      paddingHorizontal: 10
  },
  txt: {
    fontSize: 18,
    fontWeight:'600',
  },
  titulo: {
    fontSize:20,
    fontWeight: 'bold',
  },
  options: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  servicos: {
    flexDirection:'row',
    marginVertical: 7,
  },
  CheckBox:{
    width:25,
    height: 25,
    borderWidth: 2,
    borderColor:'green',
    marginRight:5,
  },
  servicosName:{
    textTransform: 'capitalize',
    fontSize: 16,
  },
  check:{
    alignSelf:'center',
  },
});