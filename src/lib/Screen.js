import screensName from 'navgation/screens'
import StatefulComponent from './StatefulComponent'

export default class Screen extends StatefulComponent {
  getParam = this.props.navigation.getParam;

  navigate = (screenName, param) => () => {
    if (screenName && this.screensName[screenName]) {
      this.props.navigation.navigate(screenName, param)
    }
  }

  openDrawer = () => {
    this.props.navigation.toggleDrawer()
  }

  screensName = screensName;

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  };
}
