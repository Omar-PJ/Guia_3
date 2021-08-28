import * as React from 'react';
import Constants from 'expo-constants';
import {AppRegistry} from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const DATA = [
 {
 id: '1',
 title: 'Pupusas',
 src:require('./src/img/pupusas.jpg'),
 text:"La pupusa es una tortilla gruesa de maíz o arroz hecha a mano que se rellena con uno o más ingredientes. Los ingredientes más comunes son el queso, el chicharrón, el ayote o los frijoles refritos.",
 },
 {
 id: '2',
 title: 'Empanadas',
 src:require('./src/img/empanadas.jpg'),
 text:"Riquísimos pastelitos a base de plátano maduro cocido que pueden ser rellenas de leche con maicena y canela o con frijoles molidos. Preparación: 30 minutos."
 },
 {
 id: '3',
 title: 'Tamal de elote',
 text:'Los tamales dulces de elote ✅ típicos de El Salvador son hechos a base de maíz tierno molido, mantequilla y manteca de cerdo. Dándo como resultado una mezcla con una consistencia muy suave y dulce que los hace un manjar de la cocina mexicana. ',
 src:require('./src/img/tamal.jpg'),
 },
 ];
 const Item = ({ title,text, img }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 <Image style={styles.title} source={img} />
 <Text style={styles.text}>{text}</Text>
 </View>
 );
   const renderItem = ({ item }) => (
 <Item title={item.title} img ={item.src} text={item.text} />
   );
return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#f9c2ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 alignItems: 'center'
 },
 title: {
 fontSize: 32,
 },
 text: {
   fontsize: 25,
 },
 img:{
   width:200,
   height:125,
   borderwidth:2,
   bordercolor: '#d35647',
   resizeMode: 'contain',
   margin:8
 }
}
);

