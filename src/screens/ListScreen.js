import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{'name': 'Wesley', 'age': '26'},
		{'name': 'Caio', 'age': '27'},
		{'name': 'Hideo', 'age': '38'},
		{'name': 'Polito', 'age': '28'},
		{'name': 'Joinha', 'age': '23'},
	];

	return (
		<FlatList
			keyExtractor={friend => friend.name}
			data={friends}
			renderItem = {({ item }) => {
				return <Text style={styles.friendsStyle}>{ item.name} - Age {item.age}</Text>
			}}
		/>
	);
};

const styles = StyleSheet.create({
	friendsStyle: {
		marginVertical: 50,
	}
});

export default ListScreen;
