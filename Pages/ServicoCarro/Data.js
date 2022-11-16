import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("Data escolhida: ", date);
    hideDatePicker();
  };

  const showDatePicker1 = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker1 = () => {
    setDateTimeVisibility(false);
  };

  const handleConfirm1 = (time) => {
    console.warn("Horário escolhido: ", time);
    hideDatePicker();
  };

  return (
    <View>
      <Text></Text>
      <Button title="ESCOLHA A DATA" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View>
      <Text></Text>
      <Button title="ESCOLHA A HORA" onPress={showDatePicker1} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm1}
        onCancel={hideDatePicker1}
      />
    </View>
    </View>
  );
};

export default Example;