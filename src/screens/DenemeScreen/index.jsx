import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DenemeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DenemeScreen</Text>
    </View>
  );
};

export default DenemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
