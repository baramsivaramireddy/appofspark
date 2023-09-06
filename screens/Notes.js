
import {View, Linking,  TextInput,ActivityIndicator, FlatList, Text} from "react-native"

import React ,{useState, useEffect} from 'react'
import axios from "axios"
import {baseUrl} from "../base"
import { ScrollView } from "react-native-gesture-handler"
export default function Notes() {


    const [isLoading, setIsLoading] = useState(true)
    const [allNotes , setAllNotes] = useState(null)
    const [Query , setQuery] = useState('')


    const getAllNotes = async () => {

        await axios.get(`${baseUrl}/notes`).then(response => {
          
            setAllNotes(response.data.notes)
          
            setIsLoading(false)
        })

    } 

    useEffect(() => {
        getAllNotes()
    },[])


    if (isLoading) {
        return (
            <View  className="flex-1 items-center justify-center bg-white">
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }

    return (
        <View className="bg-white w-full h-screen">

     
        <View className="bg-white w-full   mb-10 p-1">

        <Text className="text-lg text-center   font-bold uppercase mt-5 mb-2 "> Notes </Text>


                <TextInput
                 className="ml-5  border-2 p-2 rounded border-green-100 flex justify-center items-center"
                placeholder="search  subject name"

                onChangeText={query => setQuery(query)}
                
            />
        <ScrollView>

            {
                allNotes .filter((subject) => {
                    if (subject.subjectName.includes(Query.toLowerCase())) {
                        return true
                    }
                    else if (query="") {
                        return true
                    }
                    else {
                        return false
                    }
                }).map((subject) => (

                    <View className="border-2  rounded m-2 p-1 border-sky-100 " key={subject._id}>

                        <Text className='text-lg uppercase'> {subject.subjectName}</Text>

                        <Text className="ml-4">
                            Units:
                        </Text>
                         {subject.units.map((unit) => (

                            <View className="flex flex-row justify-center" key={unit._id}>
                            <Text className="text-blue-600" onPress={() => Linking.openURL( unit.Link)} > {unit.unitName}</Text>

                            
                            </View>
                            ))} 


                        <View className="flex flex-row  border-t-2  border-dotted border-slate-100 justify-around mt-1 ">
                            <Text>{subject.regulation}</Text>
                            <Text>{subject.semister}</Text>
                        </View>

                            
                           
                      
                    </View>
                   
                ))
            }

        </ScrollView>
        <View>
            <Text>© by dept of CSD</Text>
        </View>

        </View>

        </View>
    )
}