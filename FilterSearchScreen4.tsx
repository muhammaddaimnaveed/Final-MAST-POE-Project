import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

interface Dish {
  imageUri: string;
  dishName: string;
  price: number;
  description: string;
}

const FilterSearchScreen4: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [savedDishes, setSavedDishes] = useState<Dish[]>([]);
  const [dishCount, setDishCount] = useState<number>(0);

  const permanentDishes: Dish[] = [
    
    {
      imageUri: 'https://th.bing.com/th/id/OIP.s1QegpuY5x626pPbsFgJKAHaE8?pid=ImgDet&w=184&h=122&c=7&dpr=1,3',
      dishName: 'Coffee',
      price: 25,
      description: 'Freshly brewed coffee served hot.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP.n-8RG6pDOoc5mX2AQ0rD0AHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3',
      dishName: 'Milkshakes',
      price: 40,
      description: 'Creamy milkshakes made with ice cream and milk, available in various flavors like chocolate, vanilla, and strawberry.',
    },

    {
      imageUri: 'https://img.freepik.com/premium-photo/refreshing-summer-delight-tangy-lemonade-with-zesty-lemon-slices_1000124-117324.jpg',
      dishName: 'Iced Lemonade',
      price: 35,
      description: 'A refreshing, tangy lemonade served over ice with a slice of lemon.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP.kPO_4gK2ANR_uEhPsRWORAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3',
      dishName: 'Water',
      price: 20,
      description: 'Cold and refreshing still water.',
    },

   ];
 

  useEffect(() => {
    setDishes(permanentDishes);
  }, []);

  useEffect(() => {
    if (route.params?.newDish) 
      { setDishes((prevDishes) => [...prevDishes, route.params.newDish]); }},
    [route.params?.newDish]);

  useEffect(() => {
    setDishCount(dishes.length);
  }, [dishes]);

  const navigateToAddDish = () => {
    navigation.navigate('AddDishScreen');};
  

  const saveDish = (dish: Dish) => {
    setSavedDishes((prevSavedDishes) => {
      if (!prevSavedDishes.some(savedDish => savedDish.dishName === dish.dishName)) {
      return [...prevSavedDishes, dish];}
      return prevSavedDishes;});
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.brandName}>Harvest Café</Text>

      <Image style={styles.logo} source={require('./assets/vgejlofd.png')} />

   

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilterSearchScreen')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Filter Search (Drinks)</Text>

      <ScrollView style={styles.scrollView}>
        
        {dishes.map((dish, index) => (

          <View key={index} style={styles.dishContainer}>

            <Image source={{ uri: dish.imageUri }} style={styles.image} />
            
            <View style={styles.textContainer}>
              <Text style={styles.dishName}>{dish.dishName}</Text>
              <Text style={styles.dishPrice}>Price: R{dish.price}</Text>
              <Text style={styles.dishDescription}>{dish.description}</Text>
              <TouchableOpacity style={styles.saveButton} onPress={() => saveDish(dish)}>
                <Text style={styles.saveButtonText}>Order</Text>
              </TouchableOpacity>
            </View>

          </View>  ))}
      

      </ScrollView>
  
     
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EAD6',
    alignItems: 'center',
    padding: 20, },
 
    scrollView: {
      width: '100%',
      maxHeight: 510,
      top:10, },
      
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign:'center',
    bottom: 15, },
 
   brandName: {
    fontSize: 40,
    color: '#000000',
    top: 15,
    left: 33,
    fontWeight: "bold", },
  
  logo: {
    borderRadius: 15,
    height: 70,
    width: 70,
    bottom: 45,
    right: 142, },
  
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    bottom: 30,
    right: 140, },

    saveButton: {
        backgroundColor: '#E6A57A',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 10,
        width: 50,},
     
      saveButtonText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',  },

  buttonText: {
    color: '#000',
    fontSize: 20, },

  welcome: {
      fontSize: 35,
      color: '#000000',
      bottom: 72,
      left: 30,
      textDecorationLine: 'underline', },
  
  add: {
    width: 25,
    height: 25,
    bottom: 93,
    left:75, },
 

  menu:{
    fontSize:30,
    bottom: 28,
    left: 10, },

  food:{
    bottom:77,
    right:138,
    height: 46,
    width: 46, },

  dishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    elevation: 2, },
 
  textContainer: {
    flex: 1,
    marginLeft: 10, },
  
  image: {
    width: 110,
    height: 110,
    borderRadius: 10, },
 
  dishName: {
    fontSize: 20,
    fontWeight: 'bold', },
  
  dishPrice: {
    fontSize: 20,
    color: '#333', },
  
  dishDescription: {
    fontSize: 15,
    color: '#666', },});

  
export default FilterSearchScreen4;



