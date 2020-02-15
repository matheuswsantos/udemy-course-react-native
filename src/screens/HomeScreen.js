import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View>
			<Button
				style={styles.buttonScreen}
				title="Go to List Screen"
				onPress={() => navigation.navigate('List')}
			/>

			<Button
				style={styles.buttonScreen}
				title="Go to Image Screen"
				onPress={() => navigation.navigate('Image')}
			/>

			<Button
				style={styles.buttonScreen}
				title="Go to Counter Screen"
				onPress={() => navigation.navigate('Counter')}
			/>

			<Button
				style={styles.buttonScreen}
				title="Go to Color Screen"
				onPress={() => navigation.navigate('Color')}
			/>

			<Button
				style={styles.buttonScreen}
				title="Go to Square Screen"
				onPress={() => navigation.navigate('Square')}
			/>

			<Button
				style={styles.buttonScreen}
				title="Go to Text Screen"
				onPress={() => navigation.navigate('Text')}
			/>

			<Button
				style={styles.buttonScreen}
				title="Go to Box Screen"
				onPress={() => navigation.navigate('Box')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonScreen: {
		marginBottom: 10,
	}
});

export default HomeScreen;
