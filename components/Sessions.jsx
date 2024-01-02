import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LeftArrow from "../assets/left-arrow.png"
import RightArrow from "../assets/right-arrow.png"
import BackIcon from "../assets/back.png"
import NeckIcon from "../assets/neck.png"
const Sessions = () => {
    const [session, setSession] = useState(0);
    const data = [
        [
        {
            Exercise: "Back Pain",
            Reps: "10",
            Sets: "3",
            Duration: "5",
            image: BackIcon
        },
        {
            Exercise: "Neck Pain",
            Reps: "10",
            Sets: "3",
            Duration: "7",
            image: NeckIcon
        },
        {
            Exercise: "Back Pain",
            Reps: "10",
            Sets: "3",
            Duration: "9",
            image: BackIcon
        },
        {
            Exercise: "Neck Pain",
            Reps: "10",
            Sets: "3",
            Duration: "8",
            image: NeckIcon
        },],
        [
            {
                Exercise: "Back Pain",
                Reps: "10",
                Sets: "3",
                Duration: "5",
                image: BackIcon
            },
            {
                Exercise: "Back Pain",
                Reps: "15",
                Sets: "5",
                Duration: "15",
                image: BackIcon
            },
            {
                Exercise: "Back Pain",
                Reps: "10",
                Sets: "3",
                Duration: "9",
                image: BackIcon
            },
            {
                Exercise: "Neck Pain",
                Reps: "10",
                Sets: "3",
                Duration: "4",
                image: NeckIcon
            },]
    ]

    const handleRight = () => {
        if (session < data.length-1) {
            setSession(session=>session+1);
        }
    }
    const handleLeft = () => {
        if (session > 0) {
            setSession(session=>session-1);
        }
    }

    useEffect(() => {

    }, [session])
  return (
    <View>
            <View style = {{display: 'flex', alignItems: 'center', flexDirection: 'row' , justifyContent: 'space-around', width: 140, marginBottom: 20}}>
                <TouchableOpacity style={styles.arrow} onPress={handleLeft}>
                    <Image source={LeftArrow} style={{width: 15, height: 15}} />
                </TouchableOpacity>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>Session {session+1}</Text>
                <TouchableOpacity style={styles.arrow} onPress={handleRight}>
                    <Image source={RightArrow} style={{width: 15, height: 15}} />                
                </TouchableOpacity>
            </View>
            {data[session].map((el, i) => (
            <View key={i} style = {{display: 'flex', alignItems: 'center', marginBottom: 20}}>
                <TouchableOpacity style={styles.itemSet} >
                    <Image source={el.image} style={{width: 35, height: 35, backgroundColor: '#ECFFDC', borderRadius: 100}} />
                    <View style={[styles.item, styles.border]}>
                        <Text style={{fontWeight: 'bold'}}>Exercise {i+1}(E{i+1})</Text>
                        <Text>{el.Exercise} Exercise</Text>
                    </View>
                    <View style={[styles.item, styles.border]}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                            Reps / Set
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                            {el.Reps} / {el.Sets}
                        </Text>
                    </View>
                    <View style = {styles.item}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                            Duration
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                            {el.Duration} mins
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            ))}
        </View>
  )
}


const styles = StyleSheet.create({
    arrow: {
        width: 25,
        height: 25,
        backgroundColor: "#6B71F2",
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    itemSet: {
        width: '95%',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    item:{
        display: "flex",
        justifyContent: 'center',
        height: 60,
        paddingEnd: 10,
    },
    border: {
        borderEndColor: 'lightgray', 
        borderEndWidth: 1, 
    }
})
export default Sessions