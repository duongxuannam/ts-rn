import Dropdown from 'component/Dropdown';
import Tooltip from 'component/Tooltip';
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function Demo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Dropdown>
          <Text>1</Text>
        </Dropdown>
      </View>
      <View style={{marginTop: 200}}>
        <Dropdown>
          <Text>2</Text>
        </Dropdown>
      </View>
      <View style={{marginTop: 200, marginLeft: 100}}>
        <Tooltip>
          <Text>tooltip</Text>
        </Tooltip>
      </View>
      <View style={{marginTop: 200, marginLeft: 360}}>
        <Dropdown>
          <Text>4</Text>
        </Dropdown>
      </View>
      <View style={{marginTop: 200}}>
        <Dropdown>
          <Text>5</Text>
        </Dropdown>
      </View>
      <View style={{marginTop: 200}}>
        <Dropdown>
          <Text>6</Text>
        </Dropdown>
      </View>
      <View style={{marginTop: 200}}>
        <Dropdown>
          <Text>7</Text>
        </Dropdown>
      </View>

      <Text style={{marginTop: 100}}>hello</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
});
