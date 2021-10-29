import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}
