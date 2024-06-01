import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import TaskItem from './components/TaskItem';

const categories = [
  { category: 'Work', tasksCount: 8, imageUri: 1 },
  { category: 'Exercise', tasksCount: 6, imageUri: 2 },
  { category: 'Hobbies', tasksCount: 5, imageUri: 1 },
  { category: 'Chores', tasksCount: 4, imageUri: 2 },
  { category: 'Social', tasksCount: 7, imageUri: 1 },
  { category: 'Learning', tasksCount: 9, imageUri: 2 },
  { category: 'Health', tasksCount: 3, imageUri: 1 },
  { category: 'Travel', tasksCount: 2, imageUri: 2 },
  { category: 'Relaxation', tasksCount: 6, imageUri: 1 },
  { category: 'Shopping', tasksCount: 5, imageUri: 2 },
];

const tasks = [
  'Complete Project Report',
  'Attend Yoga Class',
  'Paint a Landscape',
  'Clean the Kitchen',
  'Call Mom',
  'Finish Online Course',
  'Go for a Run',
  'Read a Book',
  'Grocery Shopping',
  'Visit Dentist',
  'Plan Vacation',
  'Watch a Movie',
  'Meditate',
  'Water the Plants',
  'Write a Blog Post',
];

const App = () => {
  const renderTaskItem = ({ item }) => <TaskItem task={item} />;
  
  const renderCategoryCard = ({ item }) => (
    <CategoryCard
      category={item.category}
      tasksCount={item.tasksCount}
      imageUri={item.imageUri}
    />
  );

  const renderHeader = () => (
    <>
      <Header username="Devs" tasksCount={16} />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require("./icons/Filter.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategoryCard}
        keyExtractor={(item, index) => index.toString()}
        style={styles.categoriesContainer}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
    </>
  );

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 52,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: 'white',
    height: 47
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
});

export default App;
