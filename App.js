import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollapsibleTabView from "./CollapsibleTabView";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        headerShadowVisible: false,
                    },
                    headerStyle: {
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerShadowVisible: false,
                }}
            >
                <Stack.Screen
                    name="CollapsibleTabView"
                    component={CollapsibleTabView}
                    options={() => ({
                        headerTitle: "",
                        headerLeft: () => (
                            <Ionicons
                                name="person-circle-outline"
                                size={40}
                                color="black"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                                style={{
                                    marginBottom: 10,
                                }}
                            />
                        ),
                        headerRight: () => (
                            <Ionicons
                                name="md-notifications"
                                size={28}
                                color="black"
                                style={
                                    {
                                        // marginBottom: 10,
                                    }
                                }
                            />
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
