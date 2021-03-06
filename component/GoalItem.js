import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from "react-native";

const GoalItem = ( {title, id, onDelete}) =>{
    return(
         <TouchableOpacity onPress={onDelete.bind(this, id)}>
            <View style={styles.output} >
              <Text style={styles.font}>{title}</Text>
            </View>
         </TouchableOpacity>
    
    );
}

const styles = StyleSheet.create({
    output:{
        textAlign:"center",
        padding:10,
        marginVertical:10,
        borderWidth:1,
        marginHorizontal:10,
        backgroundColor:'#add8e6',
        
      },
      font:{
        textAlign:"center",
        fontSize:20,
      
      }
})

export default GoalItem;