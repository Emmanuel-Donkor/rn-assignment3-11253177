import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ username, tasksCount }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.greeting}>Hello, {username}</Text>
        <Text style={styles.tasksCount}>{tasksCount} tasks today</Text>
      </View>
      <Image
        source={require("../icons/user-icon.png")} 
        style={styles.userIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 21,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  tasksCount: {
    fontSize: 16,
    color: 'gray',
  },
  userIcon: {
    width: 49,
    height: 49,
    borderRadius: 24,
  },
});

export default Header;
