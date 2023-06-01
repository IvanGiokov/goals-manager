import { useCallback, useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = useCallback(() => { setModalIsVisible(true) }, [])
  const endAddGoalHandler = useCallback(() => setModalIsVisible(false), [])

  const addGoalHandler = useCallback((enteredGoalText) => {
    setCourseGoals((prev) => [...prev, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler()
  }, [])

  const removeGoalHandler = useCallback((id) => {
    setCourseGoals((prev) => prev.filter(goal => goal.id !== id))
  }, [])

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} closeModal={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem goal={itemData.item} onDelateGoal={removeGoalHandler} />
              )

            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
