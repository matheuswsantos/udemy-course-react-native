import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import RgbControl from '../components/RgbControl';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    const color = action.colorToChange;
    const value = state[color] + action.amount;

    if (value < 0 || value > 255) {
        return state;
    }

    return {...state, [color]: value};
}

const SquareScreen = () => {
    const [{red, green, blue}, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <RgbControl
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })}
                color="Red"
            />

            <RgbControl
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })}
                color="Green"
            />

            <RgbControl
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })}
                color="Blue"
            />

            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
