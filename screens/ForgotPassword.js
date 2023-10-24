import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default function ForgotPassword({ resetPasswordButton }) {
    const [email, setEmail] = useState("");

    const handleResetPassword = () => {
        // Handle reset password logic here
        console.log(`Reset password for email: ${email}`);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Forgot your Password?</Text>
        <Text style={styles.subtitle}>
            Enter your email address and we'll send you a link to reset your
            password.
        </Text>
        <TextInput
            style={{
            height: 40,
            minWidth: "95%",
            textAlign: "center",
            borderColor: "#159BC9",
            borderWidth: 2,
            borderRadius: 20,
            marginBottom: 15,
            fontSize: 18,
            backgroundColor: "#ffffff",
            textTransform: "none",
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            tabIndex={0}
            blurOnSubmit={false}
        />
        <TouchableOpacity
            ref={(button) => {
            resetPasswordButton = button;
            }}
            style={{
            backgroundColor: "#159BC9",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 50,
            marginBottom: 20,
            }}
            onPress={handleResetPassword}
            tabIndex={1}
            blurOnSubmit={false}
        >
            <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#159BC9",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
