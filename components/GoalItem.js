import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ goal, onDelateGoal }) => {
    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={() => onDelateGoal(goal.id)}
            >
                <Text style={styles.goalText}>{goal.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: 'white',
    },
})

export default GoalItem;