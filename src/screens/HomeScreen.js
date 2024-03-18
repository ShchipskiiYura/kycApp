import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  const [value, setValue] = useState('https://google.com/');

  const handleChange = text => {
    setValue(text);
  };

  return (
    <View style={{flex: 1, paddingTop: 50}}>
      <Text>Link input</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder="Link"
        style={{
          paddingVertical: 20,
          paddingHorizontal: 12,
          backgroundColor: '#DADADA',
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 50,
          backgroundColor: '#404040',
          justifyContent: 'center',
          padding: 20,
        }}
        onPress={() => {
          navigation.navigate('WebViewScreen', {link: value});
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Go to webView</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
