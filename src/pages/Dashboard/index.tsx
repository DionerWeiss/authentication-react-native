import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

const Dashboard: React.FC = () => {
    const { singOut } = useContext(AuthContext);
    // console.log(signed);


    function handleSignOut() {
        singOut()
    }

    return (
        <View style={styles.container}>
            <Button title="Sing Out" onPress={handleSignOut} />
        </View>
    )
}

export default Dashboard;