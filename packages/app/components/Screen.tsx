import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
export const Screen: FC = ({ children }) => {
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
