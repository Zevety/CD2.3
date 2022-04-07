import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={{backgroundColor: 'brown'}}> 
      <Text style={styles.title}>111</Text>
      </View>
      <View style={{backgroundColor: 'blue'}}>
      <Text style={styles.middle1}>222</Text>
      </View>
      <View style={{backgroundColor: 'pink'}}>
      <Text style={styles.text}>333</Text>
      <Button
      color='black'
      onPress={() => Alert.alert('READ MORE')}
      title="READ MORE"/>
      </View>
      <View style={{backgroundColor: 'cyan'}}> 
      <Text style={styles.title}>444</Text>
      </View>
      <View style={{backgroundColor: 'green'}}> 
      <Text style={styles.title}>555</Text>
      </View>
      <View style={{backgroundColor: 'yellow'}}> 
      <Text style={styles.title}>666</Text>
      </View>
      <View style={{backgroundColor: 'red'}}> 
      <Text style={styles.title}>777</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    marginTop: 40,
    margin: 10

  },
  title: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 60
  },
  middle1: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop:60
  },
  middle2: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default FixedDimensionsBasics;