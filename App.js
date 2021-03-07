import React, {useState} from 'react'
import {View,Button , StyleSheet, FlatList} from 'react-native'
import GoalInput from "./component/GoalInput";
import GoalItem from "./component/GoalItem";
const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modal, setModal] = useState(false);



  const onAddGoal = (goalTitle) =>{
      if( goalTitle === ""){
        alert('Please input somethings')
      }else{
        setCourseGoals(currentGoal => 
          [...currentGoal, {id: Math.random().toString(), value:goalTitle}])
      }
      setModal(false)
      // setEnteredGoal('') 
    
  }

  const removeGoal = (goalId) =>{
    return setCourseGoals(currentGoal => currentGoal.filter((goal) => goal.id != goalId))
  }

  const cancelHandler = () => {
    setModal(false);
  }

  return (
    <View style={styles.container}>
       <View style={styles.inputContainer}>
        <Button onPress={() => setModal(true)} title="Add Your Goal" />
        <GoalInput 
         onAddGoal={onAddGoal}
         show={modal}
         onCancel={cancelHandler}
        />
       </View>
         <FlatList 
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={ itemData =>(
              <GoalItem
               id={itemData.item.id}
               onDelete={removeGoal} 
               title={itemData.item.value}
              />
          )}
         />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginVertical:65,
   
  },
  inputContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  input:{
    width:"60%",
    borderColor:"blue",
    borderWidth:1,
    height:40,
    textAlign:"center"
    
  },
 
})
export default App
