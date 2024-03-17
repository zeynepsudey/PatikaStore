import React from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, SafeAreaView, FlatList, Image } from 'react-native';
import store_datas from './store_datas.json';
import Cards from './components/Cards';

function App() {
  const renderStore = ({item}) => <Cards store={item} />
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <FlatList
    keyExtractor={item => item.id.toString()}
    data={store_datas}
    renderItem={renderStore}
    numColumns={2}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
},

})
export default App;