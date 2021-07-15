import * as React from 'react';
import { View, Text ,Button ,Image} from 'react-native';

function HomeScreen({navigation}) {

   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
        <Image
  source={{ uri: 'data:image/png;base64,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' }}
  style={{ width: 200, height: 200}}
  
/>
        <Button
        title="Login IN"
        style={ {
            marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  
          }}
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    );
  }
  export default HomeScreen ;