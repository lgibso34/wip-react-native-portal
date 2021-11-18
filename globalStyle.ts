import {ScaledSize, StyleSheet, useWindowDimensions} from 'react-native'

  export const useGlobalStyles = () => {
    const dimensions = useWindowDimensions();
    return makeStyles(dimensions);
  }

  function makeStyles(dimensions: ScaledSize){
    const screenWidth = dimensions.width;
    const screenHeight = dimensions.height;
    return StyleSheet.create({
      ...style,
      breakOutOfParent: {
        width: screenWidth,
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: -(screenWidth/2),
        marginRight: -(screenWidth/2),
      },
    // ? test this
      breakOutOfParentWithHeight: {
        width: screenWidth,
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: -(screenWidth/2),
        marginRight: -(screenWidth/2),
        marginTop: -(screenHeight/2),
        marginBottom: -(screenHeight/2),
      }
  })
  }

 const style = StyleSheet.create({
  appContainer: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: "lightgray",
    flex: 1,
  },
  container: {
    padding: 16,
  }
});


export default style;


// #root .App .breakOutOfParent {
//   margin: 1rem calc(50% - 50vw);
//}

// .full-width {
//   width: 100vw;
//   position: relative;
//   left: 50%;
//   right: 50%;
//   margin-left: -50vw;
//   margin-right: -50vw;
// }