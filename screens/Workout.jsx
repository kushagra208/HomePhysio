import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Sessions from '../components/Sessions'
import Calendar from '../components/Calendar'
import exerIcon from "../assets/exercise.png"
import calIcon from "../assets/calendar.png"
import squatIcon from "../assets/squat.png"
import clockicon from "../assets/hourglass.png"
import messageIcon from "../assets/message.png"
import doctorIcon from "../assets/doctor.png"
import emailIcon from "../assets/email.png"
import phoneIcon from "../assets/phone.png"

import Donut from '../components/Donut'
const Workout = () => {
    const data = [
        {
            name: "Total Exercise",
            value: "5",
            image: exerIcon
        },
        {
            name: "Session/Days",
            value: "65/21",
            image: calIcon
        },
        {
            name: "Reps/ Sets",
            value: "50/15",
            image: squatIcon
        },
        {
            name: "Duration",
            value: "5 hrs",
            image: clockicon
        }]
  return (
    <View style = {{ backgroundColor: "#eeeeee" , flex: 1 , paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, }}>
      <ScrollView>
        <View>
            <Text style={styles.heading}>Back & neck pain exercise package</Text>
        </View>
        <View style = {styles.cards}>
        {data.map((el,i)=>(
            <View style={styles.card} key={i}>
            <Image source={el.image} style={styles.icon} />
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{el.value}</Text>
            <Text>{el.name}</Text>
        </View>
        ))}
        </View>
        <Sessions />
        <Calendar />
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>

        <View style={styles.performance}>
            <Donut spentAmount={9} color="#f59042" />
            <View style = {{display: "flex", width: '50%',alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold',display: 'flex', width: '100%'}}>Quality Score</Text>
            </View>
        </View>
        <View style={styles.performance}>
            <Donut spentAmount={6.5} color="#4287f5" />
            <View style = {{display: "flex", width: '50%',alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold',display: 'flex', width: '100%'}}>Completion Score</Text>
            </View>
        </View>
        </View>
        <View style={styles.consultation}>
            <Image source={doctorIcon} style={{width: 40, height: 40}} />
            <View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', gap: 10}}>
                <Text style={{fontWeight: 'bold'}}>Dr. Lorem Ipsum</Text>
                <Text style={{fontSize: 12, color: 'gray'}}>Center Name</Text>
                </View>
                <Text style={{color: 'gray'}}>Brand name</Text>
            </View>
            <View>
                <Image source={messageIcon} style={{width: 40, height: 40}}/>
            </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',gap: 20, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}>
            <View style={{gap: 5,alignItems: "center", flexDirection: 'row'}}>
            <Image source={phoneIcon} style={{width: 20, height: 20}} />
            <Text>+91 00000 00000</Text>
            </View>
            <View style={{gap: 5,alignItems: "center", flexDirection: 'row'}}>
            <Image source={emailIcon} style={{width: 20, height: 20}} />
            <Text>loremipsum@gmail.com</Text>
            </View>
        </View>
      </ScrollView>
    </View>

  )
}


const styles = StyleSheet.create({
    heading: {
        marginTop: 45,
        marginBottom: 30,
        marginLeft: 30,
        fontSize: 16,
        fontWeight: "bold"
    },
    cards:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 15,
        marginBottom: 30
    },
    card: {
        width: 160,
        height: 100,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon:{
        width: 40,
        height: 40
    },
    performance:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: "46%",
        padding: 5,
        backgroundColor: 'white',
        height: 100,
        borderRadius: 10,
        elevation: 10,
        marginLeft: 10,
        gap: 10

    },
    consultation: {
        width: '95%',
        height: 80,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 20
    }
})
export default Workout