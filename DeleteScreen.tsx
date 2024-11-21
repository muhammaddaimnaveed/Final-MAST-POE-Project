import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { dishes, setDishes } = route.params;
  const [currentDishes, setCurrentDishes] = useState(dishes);

  const handleDelete = (index: number) => {
    const updatedDishes = currentDishes.filter((_, i) => i !== index);
    setCurrentDishes(updatedDishes);
  };

  const handleSave = () => {
    setDishes(currentDishes);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Items</Text>
      <FlatList
        data={currentDishes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.dishName}>{item.dishName}</Text>
              <Text style={styles.price}>R{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#ff5252',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeleteScreen;
