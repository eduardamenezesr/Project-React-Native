import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Deixe o seu comentário! 🛠"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

export default PizzaTranslator;