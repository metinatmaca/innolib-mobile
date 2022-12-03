import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from 'constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.deneme)}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
