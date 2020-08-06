import React, { } from 'react'
import { Text } from 'react-native'
import { Block } from 'galio-framework'
import VectorIcon from 'components/common/VectorIcon'
import ImageCropper from 'react-native-simple-image-cropper'
import { screenWidth, screenHeight } from 'utils/utils'

const IMAGE = 'https://hubcv-storage.s3.ap-south-1.amazonaws.com/hubcv-dev/5e460367c70f910017b15a07/videos-transcode/f8a247d0-2615-4bde-9f4e-df4cc8b65b34.mp4'
export default class NewFeeds extends React.PureComponent {
  setCropperParams = () => {

  }

 getSize = (uri, done) => {
   done(screenWidth, screenHeight / 2)
 }

 render() {
   return (
     <Block
       flex={1}
       middle
     >
       <ImageCropper
         imageUri={IMAGE}
         cropAreaWidth={screenWidth}
         cropAreaHeight={screenHeight / 2}
         containerColor="black"
         areaColor="black"
         setCropperParams={this.setCropperParams}
         getSize={this.getSize}
       />
       <Block style={{ position: 'absolute' }}>
         <VectorIcon
           name="play"
         />
       </Block>
     </Block>
   )
 }
}
