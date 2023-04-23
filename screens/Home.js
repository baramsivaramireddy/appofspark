
import {View, ScrollView,Linking, Image, Text} from "react-native"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Home() {

    return (

        <ScrollView className="bg-white">
            <View className="m-2 p-2" >
            
            <Image
            className="h-64   w-full"
             source={require("../assets/icon.png")}
            />
            <Text  >  
               
            <Text className="text-xl "> SPARK </Text> 
                 
                is a non-profit Students
                association  and We are the student of  data science department of kits college</Text>
           

            <Text>  App is made by spark team with 

            <MaterialCommunityIcons name="heart" color='red' size={26} />
            </Text>




            {/* contact hod */}

            <View>

                <Text className="text-xl mt-5"> Contact </Text>
                <View> 
                        <Text className="ml-6 ">
                        Name:    <Text className="font-bold" > MR. BHANU  PRAKASH</Text>
                        </Text>

                 

                    <Text className="ml-5" > Position : Head of Department</Text>
                    <View className="flex flex-row mt-1 justify-evenly p-5">
                    <MaterialCommunityIcons name="phone"   onPress={() => Linking.openURL('tel:++919440081856')} color="blue" size={26} />
                    <MaterialCommunityIcons name="email" onPress={() => Linking.openURL('mailto:prakashbattula33@gmail.com')}  color="black" size={26} />

                    </View>
                </View>
                
            </View>
            </View>
        </ScrollView>
      

    )
}
