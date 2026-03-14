import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function App() {

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const formatPhone = (text: string) => {

    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 10) {
      cleaned = cleaned.slice(0, 10);
    }

    let formatted = cleaned;

    if (cleaned.length > 4 && cleaned.length <= 7) {
      formatted = cleaned.slice(0,4) + " " + cleaned.slice(4);
    }
    else if (cleaned.length > 7) {
      formatted =
        cleaned.slice(0,4) +
        " " +
        cleaned.slice(4,7) +
        " " +
        cleaned.slice(7,10);
    }

    return formatted;
  };

  const validatePhone = (number: string) => {
    const cleaned = number.replace(/\s/g,"");
    const regex = /^[0-9]{10}$/;
    return regex.test(cleaned);
  };

  const handleChange = (text: string) => {

    const formatted = formatPhone(text);
    setPhone(formatted);

    if (formatted.length > 0 && !validatePhone(formatted)) {
      setError("Số điện thoại không đúng định dạng");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {

    if (!validatePhone(phone)) {
      Alert.alert("Lỗi", "Số điện thoại không đúng định dạng");
      return;
    }

    Alert.alert("Thành công", "Số điện thoại hợp lệ");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        value={phone}
        onChangeText={handleChange}
      />

      {error !== "" && (
        <Text style={styles.error}>{error}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:30
  },

  label:{
    fontSize:16,
    marginBottom:10
  },

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:12,
    borderRadius:6
  },

  error:{
    color:"red",
    marginTop:5
  },

  button:{
    backgroundColor:"blue",
    marginTop:20,
    padding:15,
    borderRadius:6,
    alignItems:"center"
  },

  buttonText:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  }

});