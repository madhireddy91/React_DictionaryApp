import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const [newWord, setNewWord] = useState("");
  const [checkedWord, setCheckedWord] = useState("");
  const [defintion, setDefinition] = useState("");
  const [example, setExample] = useState("");

  const searchWord = (enteredWord) => {
   setNewWord(enteredWord);
  };

  // getInfo = () => {
  //   var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + newWord;

  //   return fetch(url)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((response) => {
  //       var word = response[0].word;
  //       setCheckedWord(word);

  //       var def = response[0].meanings[0].definitions[0].definition;
  //       setDefinition(def);

  //       var eg = response[0].meanings[0].definitions[0].example;
  //       setExample(eg);
  //     });
  // };


  const speak = () => {
    Speech.speak(checkedWord);
  };
  
  const clear = () => {
    setCheckedWord("");
    setDefinition("");
    setExample("");
    setNewWord("");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style ={{flex: 1}}
        resizeMode = 'cover'
        source = {require('./assets/bckgrnd.png')}
        >
          <View style = {{flex: 0.2}} >
            <Image source={require('./assets/dict1.png')} 
            style ={styles.imageDesign}></Image>

          </View>
          <View style = {{flex: 0.8}}>
            <View style ={{justifyContent: 'center', alignItems: "center"}}>
              <TextInput 
              style = {styles.inputBox}
              placeholder= "Search a word"
              placeHolderTextColor = {"rgba(0,0,0,0.7)"}
              textAlign= "center"
              clearButtonMode= "always"
              onChangeText={searchWord}
              value = {newWord}
              ></TextInput>
            
            <View>
              <Text>{newWord}</Text>
            </View>
            <View 
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
              marginTop: 20,
              marginBottom: 20,
            }}
            >
              <TouchableOpacity 
              style={styles.buttonDesign}
              onPress={() => {
                getInfo();
              }}
              >
                <Text style={styles.buttonText}>Go..!</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.buttonDesign}
              
              onPress={()=>{
                clear();
              }}
              >
              <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => {
                speak();
              }}
              >
              <Image source={require('./assets/speaker.jpg')}
              style = {styles.speakerButton}
              ></Image>
              </TouchableOpacity>
            </View>
           <View>
            <Text style = {styles.textDesign}>
              Enter Word : {checkedWord}{" "}
            </Text>
            <Text style = {styles.textDesign}>
              Definition : {defintion}
            </Text>
            <Text style = {styles.textDesign}>
              Example : {example}
            </Text>
           </View>
             
             </View>
      
          </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },

  imageDesign: {
    width: '80%',
    height: '120%',
    marginLeft: 50,
    marginTop: 30
  },
  inputBox: {
    width: "80%",
    height: 50,
    borderWidth: 5,
    borderColor: 'rgba(80, 235, 236 ,1)',
    marginTop: 100,
    fontSize: 25
  },

  buttonDesign: {
    backgroundColor: "rgba(80, 235, 236,0.3)",
    width: 80,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    alignSelf: "center",
    marginTop: 5,
  },
  speakerButton: {
    width: 50,
    height: 40,
  },
  textDesign: {
    fontSize: 25,
    backgroundColor: "rgba(80, 235, 236,0.3)",
    marginTop: 10,
    alignSelf: "center",
  },
});
