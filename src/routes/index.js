import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/Home'
import { Search } from '../pages/Search'
import { Inbox } from '../pages/Inbox'
import { Profile } from '../pages/Profile'
import { New } from '../pages/New'
import Ionicons  from '@expo/vector-icons/Ionicons'
import { ButtonNew } from '../components/ButtonNew/Index'

const Tab = createBottomTabNavigator();

export function Routes() {
    const size = 24;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarStyle: {
                    backgroundColor: "#000",
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, rize, color }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color} />
                        }

                        return <Ionicons name="home-outline" size={size} color={color} />
                    },
                    tabBarActiveTintColor: "#fff",
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ focused, rize, color }) => {
                        if (focused) {
                            return <Ionicons name="search" size={size} color={color} />
                        }

                        return <Ionicons name="search-outline" size={size} color={color} />

                    },
                    tabBarActiveTintColor: "#fff",
                }}

            />

            <Tab.Screen
                name='New'
                component={New}
                options={{
                    tabBarIcon: ({ size }) => {
                        return <ButtonNew size={size} />

                    }
                }}
            />
            <Tab.Screen
                name='Inbox'
                component={Inbox}
                options={{
                    tabBarIcon: ({ focused, rize, color }) => {
                        if (focused) {
                            return <Ionicons name="ios-chatuba-ellipse" size={size} color={color} />
                        }

                        return <Ionicons name="ios-chatuba-ellipse-outline" size={size} color={color} />
                    },
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, rize, color }) => {
                        if (focused) {
                            return <Ionicons name="person" size={size} color={color} />
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />
                    },
                }}
            />
        </Tab.Navigator>
    )
}