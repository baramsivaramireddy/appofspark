
import {View, ActivityIndicator, ScrollView, Text} from "react-native"
import axios from 'axios'
import React ,{useState, useEffect} from 'react'

import {baseUrl} from "../base"

import { Col, Row, Grid } from "react-native-easy-grid";


export default function TimeTable() {

  const [isLoading, setIsloading] = useState(true)
  const [timetables , setTimetables] = useState([])

  const getTimetable = async () => {
    await axios.get(`${baseUrl}/timetables`).then(response =>{
     
      setTimetables(response.data.timetables)
        setIsloading(false)
     

    })
    .catch(error => {
        console.error(error)
    })
  }
  useEffect(() => {

       
        getTimetable()
        
} ,[])

    if (isLoading){
        return (
            <View className="flex-1 items-center justify-center bg-white">
                <ActivityIndicator  size="large"/>
            </View>
        )

}




return (
    <View className="bg-white w-full   mb-10 p-5">
        <Text className="text-lg text-center  font-bold uppercase mt-5 mb-2 "> timetables  </Text>

      

      <ScrollView>

        {/* all timetable */}

        {/* diplay all the year and sections */}

        {timetables.map(timetable => <View key={timetable._id}>
        
        <Text className="uppercase text-xl mt-5" > {timetable.year } year  {timetable.section} section</Text>


        <Grid className="mt-2 border-2 border-slate-100 rounded" >
    <Col className="border-r-2 border-slate-100 border-dotted" >
       
        <Row className="border-b-2 border-slate-100 p-1 border-dotted" >
        <Text>{timetable.data[0][0]}</Text>
        </Row>
        <Row className="border-b-2 border-slate-100 p-1 border-dotted">
        <Text>{timetable.data[1][0]}</Text>
        </Row >
        <Row className="border-b-2 border-slate-100 p-1 border-dotted">
        <Text>{timetable.data[2][0]}</Text>
        </Row>
        <Row className="border-b-2 border-slate-100 p-1 border-dotted">
        <Text>{timetable.data[3][0]}</Text>
        </Row >
        <Row className="border-b-2 border-slate-100 p-1 border-dotted">
        <Text>{timetable.data[4][0]}</Text>
        </Row>
        <Row className="border-b-2 border-slate-100 p-1 border-dotted">
        <Text>{timetable.data[5][0]}</Text>
        </Row>
    </Col>
    <Col  className="border-r-2 border-slate-100 border-dotted" >
       
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[0][1]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[1][1]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[2][1]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[3][1]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[4][1]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[5][1]}</Text>
       </Row>
   </Col>
    <Col  className="border-r-2 border-slate-100 border-dotted" >
       
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[0][2]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[1][2]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[2][2]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[3][2]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[4][2]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[5][2]}</Text>
       </Row>
   </Col>
    <Col  className="border-r-2 border-slate-100 border-dotted" >
       
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[0][3]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[1][3]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[2][3]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[3][3]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[4][3]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[5][3]}</Text>
       </Row>
   </Col>
    <Col  className="border-r-2 border-slate-100 border-dotted" >
       
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[0][4]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[1][4]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[2][4]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[3][4]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[4][4]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[5][4]}</Text>
       </Row>
   </Col>
    <Col  className="border-r-2 border-slate-100 border-dotted" >
       
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[0][5]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[1][5]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[2][5]}</Text>
       </Row >
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[3][5]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[4][5]}</Text>
       </Row>
       <Row className="border-b-2 border-slate-100 p-1 border-dotted">
       <Text>{timetable.data[5][5]}</Text>
       </Row>
   </Col>
</Grid>
            </View>
        )}
      </ScrollView>
      <View>
            <Text>© by dept of CSD</Text>
        </View>
    </View>
    
)
}