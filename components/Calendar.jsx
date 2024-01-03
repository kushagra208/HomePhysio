import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LeftArrow from "../assets/left-arrow.png"
import RightArrow from "../assets/right-arrow.png"
const Calendar = () => {
    const [week,setWeek] = useState(0);
const data = [
    [{
        Slot: "Slot",
        Mon: "Mon",
        Tue: "Tue",
        Wed: "Wed",
        Thurs: "Thurs",
        Fri: "Fri",
        Sat: "Sat",
        Sun: "Sun",
    },
    {
        Slot: "Morning",
        Mon: ["E1", "E2", "E3", "E4"],
        Tue: ["E1", "E2", "E3", "E4"],
        Wed: ["E1", "E2", "E3", "E4"],
        Thurs: ["E1", "E2", "E3", "E4"],
        Fri: ["E1", "E2", "E3", "E4"],
        Sat: ["E1", "E2", "E3", "E4"],
        Sun: ["E1", "E2", "E3", "E4"],
    },
    {
        Slot: "Afternoon",
        Mon: ["E3", "E4"],
        Tue: ["E3", "E4"],
        Wed: ["E3", "E4"],
        Thurs: ["E3", "E4"],
        Fri: ["E3", "E4"],
        Sat: ["E3", "E4"],
        Sun: ["E3", "E4"],
    },
    {
        Slot: "Evening",
        Mon: [],
        Tue: [],
        Wed: [],
        Thurs: [],
        Fri: [],
        Sat: [],
        Sun: [],
    },
    {
        Slot: "Night",
        Mon: [],
        Tue: [],
        Wed: [],
        Thurs: [],
        Fri: [],
        Sat: [],
        Sun: [],
    }],
    [{
        Slot: "Slot",
        Mon: "Mon",
        Tue: "Tue",
        Wed: "Wed",
        Thurs: "Thurs",
        Fri: "Fri",
        Sat: "Sat",
        Sun: "Sun",
    },
    {
        Slot: "Morning",
        Mon: ["E1", "E2", "E3", "E4"],
        Tue: ["E1", "E2", "E3", "E4"],
        Wed: ["E1", "E2", "E3", "E4"],
        Thurs: ["E1", "E2", "E3", "E4"],
        Fri: ["E1", "E2", "E3", "E4"],
        Sat: ["E1", "E2", "E3", "E4"],
        Sun: ["E1", "E2", "E3", "E4"],
    },
    {
        Slot: "Afternoon",
        Mon: ["E3", "E4"],
        Tue: ["E3", "E4"],
        Wed: ["E3", "E4"],
        Thurs: [],
        Fri: [],
        Sat: [],
        Sun: [],
    },
    {
        Slot: "Evening",
        Mon: [],
        Tue: [],
        Wed: [],
        Thurs: [],
        Fri: [],
        Sat: [],
        Sun: [],
    },
    {
        Slot: "Night",
        Mon: [],
        Tue: [],
        Wed: [],
        Thurs: [],
        Fri: [],
        Sat: [],
        Sun: [],
    }]
    
]
const handleRight = () => {
    if (week < data.length-1) {
        setWeek(week=>week+1);
    }
}
const handleLeft = () => {
    if (week > 0) {
        setWeek(week=>week-1);
    }
}

useEffect(() => {},[week])
  return (
    <View style={{display: 'flex'}}>
        <View style = {{display: 'flex', alignItems: 'center', flexDirection: 'row' , justifyContent: 'space-around', width: 140}}>
            <TouchableOpacity style={styles.arrow} onPress={handleLeft}>
                <Image source={LeftArrow} style={{width: 15, height: 15}} />
            </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: "bold"}}>Week {week+1}</Text>
            <TouchableOpacity style={styles.arrow} onPress={handleRight}>
                <Image source={RightArrow} style={{width: 15, height: 15}} />                
            </TouchableOpacity>
        </View>
        <View style={styles.calendar}>
            {data[week].map((el,i) => (
                <View key={i+100} style={{display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 4 , width: '100%', justifyContent:'space-between', }}>
                    <View style={{ display: 'flex', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2, justifyContent: 'center'}}>
                        <Text style={{fontSize: 8}}>{el.Slot}</Text>
                    </View>
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Mon) === 'object' ? el.Mon.map((el2, j)=>(
                            <View key = {j+200} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Mon}</Text></View>}
                    </View>
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Tue) === 'object' ? el.Tue.map((el2,j)=>(
                            <View key={j+300} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Tue}</Text></View>}
                    </View>
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Wed) === 'object' ? el.Wed.map((el2,j)=>(
                            <View key={400+j} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Wed}</Text></View>}
                    </View>
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Thurs) === 'object' ? el.Thurs.map((el2,j)=>(
                            <View key={j+500} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Thurs}</Text></View>}
                    </View>
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Fri) === 'object' ? el.Fri.map((el2,j)=>(
                            <View key={j+600} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Fri}</Text></View>}
                    </View>                   
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Sat) === 'object' ? el.Sat.map((el2,j)=>(
                            <View key={j+700} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Sat}</Text></View>}
                    </View>                 
                    <View style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', flexDirection: 'row', width: 40, height: 40, gap:2 , backgroundColor: 'white', borderRadius: 2}}>
                        {typeof(el.Sun) === 'object' ? el.Sun.map((el2,j)=>(
                            <View key={j+800} style={{width: 18, height: 18, display: 'flex' , alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 8}}>{el2}</Text></View>
                        )) : <View style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '100%'}}><Text style={{fontSize: 8}}>{el.Sun}</Text></View>}
                    </View>
                </View>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    calendar:{
        display: 'flex',
        alignItems: 'center',
        width: '98%',
        borderRadius: 10,
        padding: 6
    },
    arrow: {
        width: 25,
        height: 25,
        backgroundColor: "#6B71F2",
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

})
export default Calendar