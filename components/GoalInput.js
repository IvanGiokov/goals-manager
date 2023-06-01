import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState, useCallback } from 'react';

const GoalInput = ({ onAddGoal, isVisible, closeModal }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const addGoalHandler = useCallback(() => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }, [enteredGoalText])

    return (
        <Modal visible={isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/goal.png')}
                    // source='/some/path/to/nowhere.png'
                />
                <TextInput style={styles.textIput} placeholder='Your course goal!' onChangeText={setEnteredGoalText} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={closeModal} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add a Goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textIput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
        borderRadius: 6,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 150,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
})

export default GoalInput;