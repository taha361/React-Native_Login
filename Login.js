import * as React from 'react';
import { View, Text ,Button ,TextInput ,StyleSheet } from 'react-native';
import {useState ,useEffect} from 'react';
function Login({navigation}) {

    const [name ,setName] =useState('')
    const [password ,setPassword] =useState('')
    const [email ,setEmail] =useState('')
    const[NameValid,setNameValid] =useState(true)
    const[EmailValid,setEmailValid] =useState(true)
    const[PasswordValid,setPasswordValid] =useState(true)
    const [FormIsValid,setFormIsValid] =useState(false)

    useEffect(()=>{
        const identifier = setTimeout(()=>{
          console.log("ouiii");
          setFormIsValid(
            email.includes('@') && password.trim().length > 6 && name.trim().length > 6     );
        },500)
        return ()=>{
          console.log("clearr")
    
          clearTimeout(identifier);
        }
      
      }, [email,password])


 function Submit(){
     alert('welcome  ' + name )
     navigation.navigate('Home')
 }
 function changeText(text){
    setNameValid(false)
     setName(text);
     if(text.length > 6){
         setNameValid(true)
     }}
     function changeEmail(text){
        setEmailValid(false)
        setEmail(text);
        if( text.includes('@')){
            setEmailValid(true)
        }
 }
 function changePassword(text){
    setPasswordValid(false)
    setPassword(text);
    if(text.length > 6 ){
        setPasswordValid(true)
    }
}
 
 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text  style={[styles.textSign, {
                        color: '#009387'
                    }]}> Demo Form </Text>
        <Text style={styles.label}>Enter Your Name</Text>
        <TextInput  style={styles.textInput
                          }
                          onChangeText={changeText}
          placeholder="UserName" />
           {!NameValid && (
          <Text style={styles.errorMsg}>Name must not be empty.</Text>
        )}
         
         <Text style={styles.label}>Enter Your Email</Text>
          <TextInput  style={styles.textInput
                        
                    }
                    onChangeText={changeEmail}
          placeholder="Email" />
          {!EmailValid && (
          <Text style={styles.errorMsg}>Email must include @.</Text>
        )}
       
       <Text style={styles.label}>Enter Your Password </Text>
        <TextInput  style={styles.textInput
                   }
                   onChangeText={changePassword}
          secureTextEntry={true}
          placeholder="Password"
        />
        {!PasswordValid && (
          <Text style={styles.errorMsg}>MinLength is 6.</Text>
        )}
        <Button style={styles.button}
        title="Login In" disabled={!FormIsValid}
        onPress={Submit}
        
      />
      
      </View>
    );
  }
  
const styles = StyleSheet.create({
  
   
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
  
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    label: {
        fontSize : 20,
        fontWeight: 'bold'
    }
  });
  export default Login;