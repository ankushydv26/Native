import React, {useState} from 'react'
import {View, Text, TextInput,Button , StyleSheet, ScrollView, FlatList} from 'react-native'
import GoalInput from "./component/GoalInput";
import GoalItem from "./component/GoalItem";
const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);



  const onAddGoal = (goalTitle) =>{
      if( goalTitle === ""){
        alert('Please input somethings')
      }else{
        setCourseGoals(currentGoal => 
          [...currentGoal, {id: Math.random().toString(), value:goalTitle}])
      }
      // setEnteredGoal('') 
    
  }

  return (
    <View style={styles.container}>
       <View style={styles.inputContainer}>
        
        <GoalInput 
         onAddGoal={onAddGoal}
        />
       </View>
         <FlatList 
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={ itemData =>(
              <GoalItem 
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
