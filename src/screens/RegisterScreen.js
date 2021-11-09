import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Input } from "react-native-elements";
import signupAPI from "../api/signupAPI";
const RegisterScreen = ({ navigation }) => {
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");

  const registerhandler = () => {
    const fetchSignUp = async () => {
      try {
        const signup = await signupAPI.checkPhone({
          phone: enteredPhoneNumber,
        });
        if (signup.status === 201) {
          const fetchSendOTP = async () => {
            const sendOTP = await signupAPI.sendOTP({
              phone: enteredPhoneNumber,
            });
          };
          fetchSendOTP();
          navigation.navigate("Verification", { phone: enteredPhoneNumber });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSignUp();
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={styles.image} source={require("../images/logo.png")} />
      <View style={styles.container2}>
        <Input
          onChangeText={(text) => setEnteredPhoneNumber(text)}
          placeholder="Số điện thoại"
        />
        <Button
          containerStyle={styles.button}
          title="Đăng kí"
          onPress={registerhandler}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container2: {
    width: "80%",
    marginTop: 50,
  },
  button: {
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
});
