import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from 'screens/Login'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { NewFeeds } from 'screens/NewFeeds'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getHeight, setValue } from 'utils/utils'
import { IconTabbarCustom } from 'components/common'
import colors from 'utils/colors'
import axios from 'axios'
import VietNam from 'screens/VietNam/VietNam'
import { AuthContext } from './context'
import screens from './screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Home() {
  return (
    <Tab.Navigator
      initialRouteName={screens.NewFeeds}
      screenOptions={({ route }) => ({
        tabBarLabel: () => null,
        tabBarIcon: (props) => (
          <IconTabbarCustom {...props} route={route} />
        )
        ,
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        activeBackgroundColor: colors.PRIMARY,
        style: {
          height: getHeight(56),
          // borderTopWidth: 0,
        },
        // tabStyle: {
        //   height: 31,
        //   borderRadius: setValue(6),
        // },
      }}

    >
      <Tab.Screen name={screens.NewFeeds} component={NewFeeds} />
      <Tab.Screen name={screens.VietNam} component={VietNam} />
    </Tab.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      {/* Auth */}
      <Stack.Screen
        options={{ headerMode: 'none' }}
        name={screens.Login}
        component={Login}
      />
      {/* <Stack.Screen
        options={{ headerMode: 'none' }}
        name={screens.ForgotPassWord}
        component={ForgotPassWord}
      />
      <Stack.Screen
        options={{ headerMode: 'none' }}
        name={screens.SetNewPassWord}
        component={SetNewPassWord}
      /> */}
    </Stack.Navigator>
  )
}

function App({ logged }) {
  const [authStack, setAuthStack] = React.useState(true)
  const [onboarding, setOnboarding] = React.useState(true)
  const [touchID, setTouchID] = React.useState(true)
  const authContext = React.useMemo(() => ({
    onBoardingStack: () => {
      setOnboarding(false)
    },
    authStack: () => {
      setAuthStack(true)
      setOnboarding(true)
    },
    authStackCancel: () => {
      setAuthStack(true)
      setOnboarding(true)
      setTouchID(false)
    },
    mainStack: () => {
      setAuthStack(false)
      // setOnboarding(false)
    },
    loginTouchID: () => {
      setTouchID(false)
    },
    logoutTouchID: () => {
      setTouchID(true)
    },
  }), [])

  React.useEffect(() => {
    axios.defaults.headers.common['x-rapidapi-key'] = '00caedb47fmsh57c7d930ca62b74p11531bjsn108f00b50638'
    axios.defaults.headers.common.useQueryString = true
    if (!logged) {
      setAuthStack(true)
      setOnboarding(true)
    } else {
      setAuthStack(false)
      setOnboarding(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {/* {authStack ? (
            <Stack.Screen
              name={screens.AuthStack}
              component={AuthStack}
            />
          ) : ( */}

          <Stack.Screen
            options={{ headerMode: 'none' }}
            name={screens.Home}
            component={Home}
          />

          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const mapStateToProps = ({ authStore }) => {
  const logged = get(authStore, 'LoginData')
  return {
    logged,
  }
}

export default connect(mapStateToProps)(App)
