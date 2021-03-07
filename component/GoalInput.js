import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({onAddGoal, show,onCancel}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler =()=>{
    onAddGoal(enteredGoal);
    setEnteredGoal('')
  }

  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
       <View style={styles.btnG}>
          <View style={styles.btnw}> 
            <Button  title="Cancel" onPress={onCancel} color="red"/>
          </View> 
          <View style={styles.btnw}>  
            <Button  title="ADD" onPress={addGoalHandler}  />
          </View>  
             {/* alternative on press bind method and above method is called anonymous arrow function */}
             {/* onPress={props.onAddGoal.bind(this, enteredGoal)} */}
       </View>
      </View>
     </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin:5
  },
  btnw:{
    width:'44%'
  },
  btnG:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'40%'
  }
});

export default GoalInput;
