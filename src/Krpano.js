import React, {useState} from 'react'
import classNames from 'classnames'
import useDemoKrpano from './hooks/useDemoKrpano'
import './asset/demo-page.css'
import { Box,Center, Button, HStack, VStack, Stack, Text, Image, } from '@chakra-ui/react'
import malaysiaOff from './asset/button/01_Malaysia_1.png'
import malaysiaOn from './asset/button/01_Malaysia_2.png'
import languageOff from './asset/button/00_Language_1.png'
import languageOn from './asset/button/00_Language_2.png'
import yoloOff from './asset/button/03_Logo_2.png'
import yoloOn from './asset/button/03_Logo_1.png'
import showUnitOff from './asset/button/04_ShowUnit_1.png'
import showUnitOn from './asset/button/04_ShowUnit_2.png'
import salesGalleryOff from './asset/button/05_SalesGallery_1.png'
import salesGalleryOn from './asset/button/05_SalesGallery_2.png'
import eBrochureOff from './asset/button/06_Ebrochure_1.png'
import eBrochureOn from './asset/button/06_Ebrochure_2.png'
import videoOff from './asset/button/07_Video_1.png'
import videoOn from './asset/button/07_Video_2.png'
import contextViewOff from './asset/button/08_ContextView_1.png'
import contextViewOn from './asset/button/08_ContextView_2.png'
import ocr from './asset/button/OCR_LOGO.png'


const LoadingPage = ({ isFadingout = false }) => {
  const wrapperClasses = classNames('loading-page', {
    'loading-page--fade-out': isFadingout,
  })
  return (
    <div className={wrapperClasses}>
      <div className="hint">Loading...</div>
      <div className="loading-spin" />
    </div>
  )
}

const Krpano = () => {
  const {
    showLoadingPage,
    isLoaded,
    containerRef,
    toggleLockView,
    isLocked,
    toggleHideSpots,
    isHideSpots,
    currentScene,
    setCurrentScene,
    callKrpano
  } = useDemoKrpano()

  const [showMsiaMap, setShowMsiaMap] = useState(false)

  // function goToPano() {
    
  //   // var krpano = document.getElementById("krpanoSWFObject");
  //   // callKrpano("loadpano(" + 'aerial.xml' + ", null, MERGE, BLEND(1));");
  //   callKrpano("loadscene('scene_arial_(rgb)-01',null,MERGE,ZOOMBLEND(1,2,'easeInOutSine'));");
  // }


  return (
    <>
      {showLoadingPage && <LoadingPage isFadingout={isLoaded} />}



      <Box h="100vh" overflowX="hidden" bg="#FFD64E">
        <Box w="100%" ref={containerRef} />
        <HStack align="center" justify="center" bg="#FFD64E" h="7vh" w="100%" bottom="0" position="absolute" zIndex="2" >


          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image w="55%" _hover={{ src: {languageOn}}} draggable={false} src={languageOff}/>

          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={yoloOff} onClick= {() => callKrpano("loadscene('scene_arial_(rgb)-01',null,MERGE,ZOOMBLEND(1,2,'easeInOutSine'));")}/>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={contextViewOff} onClick={() =>  callKrpano("loadscene('scene_in_to_out_-_40_level-min',null,MERGE,ZOOMBLEND(1,2,'easeInOutSine'));")}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Context View</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={showUnitOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Show Unit</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={salesGalleryOff} onClick={() => callKrpano("loadscene('scene_Gallery_A',null,MERGE,ZOOMBLEND(1,2,'easeInOutSine'));")}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Sales Gallery</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={eBrochureOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">E-Brochure</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={videoOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Video</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={ocr}/>
          </Center>

      



        </HStack>
        {/* <div className="menu"> */}
          {/* <a href="/">Back to Home</a> */}
          {/* <Button
            onClick={toggleLockView}
            className={isLocked ? 'disable' : null}
          >
            Toggle Lock View
          </Button> */}
          {/* <Button
            onClick={toggleHideSpots}
            className={isHideSpots ? 'disable' : null}
          >
            Toggle Hide Spots
          </Button> */}
          {/* <Button
            onClick={goToPano}
            className={isHideSpots ? 'disable' : null}
          >
            Go To Aerial
          </Button> */}
          {/* <div className="scene-name">Current Scene Name: {currentScene}</div> */}
        {/* </div> */}



      </Box>
    </>
  )
}

export default Krpano