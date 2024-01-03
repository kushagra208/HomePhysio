import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import KneeIcon from "../assets/knee.png"
import BackIcon from "../assets/back.png"
import NeckIcon from "../assets/neck.png"
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
  return (
    <View style = {{ backgroundColor: "#fff" , flex: 1 , paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, alignItems: 'center' }}>
        <View style = {styles.header}>
            <Text style = {styles.heading}>Home Physio</Text>
        </View>
      <ScrollView>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("workout")}>
                <Image source={NeckIcon} style = {styles.image} />
                <Text style={{fontSize: 20}}>Neck Pain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("workout")}>
                <Image source={BackIcon} style = {styles.image} />
                <Text style={{fontSize: 20}}>Back Pain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("workout")}>
                <Image source={KneeIcon} style = {styles.image} />
                <Text style={{fontSize: 20}}>Knee Pain</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        textAlign: "left",
        marginLeft: 30,
        color: "white",
        textTransform: "uppercase"
    },
    header: {
        width: 400,
        height: 150,
        backgroundColor: "#6B71F2",
        display: "flex",
        justifyContent: "center",
        marginBottom: 20
    },
    card:{
        display: "flex",
        flexDirection: "row",
        width: 300,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        shadowColor: '#000',
        elevation: 2,
        borderRadius: 3,
        marginBottom: 10

    },
    image: {
        width: 100,
        height:  100,
    }
})

export default Home