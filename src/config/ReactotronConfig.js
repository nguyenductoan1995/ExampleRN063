import Reactotron, { trackGlobalErrors, openInEditor, overlay, asyncStorage, networking } from 'reactotron-react-native' // eslint-disable-line
import { reactotronRedux } from 'reactotron-redux' // eslint-disable-line
import { NativeModules } from 'react-native'
import url from 'url'

if (__DEV__) {// eslint-disable-line
  const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)
  Reactotron
    .configure({ name: 'Example063', host: hostname })
    .useReactNative()
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}
