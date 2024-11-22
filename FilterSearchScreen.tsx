
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const FilterSearchScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('MenuScreen');
  };

  /* This Screen allows the users to filter search and select menu items from 4 different food courses (Starters, Main Course, Deserts, Drinks).*/

  return (

    <View style={styles.container}>

      <Text style={styles.brandName}>Harvest Café</Text>

      <Image
        style={styles.logo}
        source={require('./assets/vgejlofd.png')}/>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.welcome}>Filter Search</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('FilterSearchScreen1')}>
      <Image
        style={styles.bread}
        source={require('./assets/bread.png')}/>
       </TouchableOpacity>
      
      <Text style={styles.text1}>Starters</Text>
     
      <TouchableOpacity onPress={() => navigation.navigate('FilterSearchScreen2')}>
      <Image
        style={styles.bread}
        source={require('./assets/chicken.png')} />
      </TouchableOpacity>

      <Text style={styles.text2}>Main Course</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('FilterSearchScreen3')}>
      <Image
        style={styles.bread}
        source={require('./assets/cake.png')}/>
      </TouchableOpacity>
      
      <Text style={styles.text3}>Desserts</Text>
      
      
      <TouchableOpacity onPress={() => navigation.navigate('FilterSearchScreen4')}>
      <Image
        style={styles.bread}
        source={require('./assets/drink.png')} />
      </TouchableOpacity>
     
      <Text style={styles.text4}>Drinks</Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#001f3e',
    alignItems: 'center',
    justifyContent: 'center', },
  
  brandName: {
    fontSize: 40,
    color: '#ffffff',
    bottom: -35,
    left: 35,
    fontWeight: "bold", },
  
  logo: {
    borderRadius: 15,
    height: 70,
    width: 70,
    bottom: 25,
    right: 142, },
  
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    bottom: 10,
    right: 142, },
  
  buttonText: {
    color: '#000',
    fontSize: 20, },
  
  welcome: {
    fontSize: 35,
    color: '#ffffff',
    bottom: 52,
    left: 30,
    textDecorationLine: 'underline', },
  
  bread: {
    height: 90,
    width: 90,
    bottom: 40,
    right: -10,
    marginVertical: 10, },
  
  text1: {
    fontSize: 25, 
    bottom:60,
    left:10,
    color:"#ffffff", },
  
  text2: {
    fontSize: 25,
    bottom:55,
    left:10,
    color:"#ffffff", },
 
  text3: {
    fontSize: 25,
    bottom:52,
    left:10,
    color:"#ffffff", },
 
  text4: {
    fontSize: 25,
    bottom:45,
    left:14,
    color:"#ffffff", },});
 

export default FilterSearchScreen;
