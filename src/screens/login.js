import React from "react";
import { StyleSheet, SafeAreaView, Image, View } from "react-native";
import { baseStyle, images, routes, theme, } from "../config";
import { Checkbox, Button, Heading, Paragraph, Input } from "../components";
import { useNavigation } from "@react-navigation/native";


export const Login = () => {

  const navigation = useNavigation();

  const submitHandler = () => {
    navigation.navigate(routes.SECCURE_ACCOUNT);
  };






  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.logo} resizeMode="contain" style={styles.logo} />
      <Image source={images.bubbles} resizeMode="contain" />
      <View style={styles.card}>
        <Heading center>Login To Your Account.</Heading>
        <Paragraph center style={styles.paragraph}>Please Enter your login details</Paragraph>
        <Input style={styles.input} placeholder=" Email" keyboardType="email-address" />
        <Input style={styles.input} placeholder=" Password" secureTextEntry />
        <View style={styles.forgetContainer}>
          <Checkbox text="Remember Me" />
          <Paragraph>Forgot Password</Paragraph>
        </View>

        <Button type='filled' onPress={submitHandler}>
          Login</Button>

        <View style={styles.line} />
        <Paragraph center>Don't have an account?</Paragraph>

        <Button
          type='outlined'
          style={styles.btn}
          onPress={() => navigation.navigate(routes.REGISTER)}>

          Register</Button>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AC2CC',
    alignItems: 'center',
  },
  logo: { marginVertical: baseStyle.marginVertical(10) },
  paragraph: {
    marginTop: baseStyle.marginTop(5),
    marginBottom: baseStyle.marginBottom(15),
  },
  card: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
    borderTopRightRadius: baseStyle.borderTopRightRadius(32),
    position: 'absolute',
    //   paddingHorizontal: 30,
    //  paddingTop: 30,
    //   paddingBottom: 60, 
    paddingVertical: baseStyle.paddingVertical(30),
    paddingHorizontal: baseStyle.paddingHorizontal(30),
    width: '100%',
    bottom: 0,
  },

  input: { marginBottom: baseStyle.marginBottom(20) },

  forgetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: baseStyle.marginBottom(20),
  },

  line: {
    marginVertical: baseStyle.marginVertical(20),
    borderBottomColor: theme.colors.black,
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  rememberContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: { marginTop: baseStyle.marginTop(10) },
});
