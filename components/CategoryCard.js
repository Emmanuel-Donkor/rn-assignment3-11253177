import { View, Text, Image, StyleSheet } from 'react-native';

const imageMap = {
  1: require('../icons/man-online.png'),
  2: require('../icons/woman-online.png'),
};

const CategoryCard = ({ category, tasksCount, imageUri }) => {
  return (
    <View style={styles.cardContainer}>
			<View style={styles.textContainer}>
				<Text style={styles.categoryText}>{category}</Text>
				<Text style={styles.tasksCount}>{tasksCount} Tasks</Text>
			</View>
			<View style={styles.imageContainer}>
				<Image source={imageMap[imageUri]} style={styles.image} />
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 190,
		height: 190,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
		justifyContent: 'center'
  },
	textContainer: {
		marginRight: 50
	},
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
  image: {
    width: 100,
    height: 100,
		margin: 15,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0
  },
  tasksCount: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CategoryCard;
