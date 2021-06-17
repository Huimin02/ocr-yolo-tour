import React, {useEffect} from 'react'
import classNames from 'classnames'
import useDemoKrpano from './hooks/useDemoKrpano'
import './asset/demo-page.css'
import { Box,Center, Button, HStack, VStack, Stack, Text, Image, } from '@chakra-ui/react'
import malaysiaOff from './asset/button/01_Malaysia_1.png'
import malaysiaOn from './asset/button/01_Malaysia_2.png'

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


  useEffect(() => {
    
  }, [])

  function goToPano() {
    
    // var krpano = document.getElementById("krpanoSWFObject");
    // callKrpano("loadpano(" + 'aerial.xml' + ", null, MERGE, BLEND(1));");
    callKrpano("loadscene('scene_arial_(rgb)-01',null,MERGE,ZOOMBLEND(1,2,'easeInOutSine'));");
  }

  return (
    <>
      {showLoadingPage && <LoadingPage isFadingout={isLoaded} />}



      <Box h="100vh" overflowX="hidden" bg="#FFD64E">
        <Box w="100%" ref={containerRef} />
        <HStack align="center" justify="center" bg="#FFD64E" h="8vh" w="100%" bottom="0" position="absolute" zIndex="2" >


          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image  draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
          </Center>

          <Center cursor="pointer" flexDir="column" w="15%" >
            <Image draggable={false} w="60%" src={malaysiaOff}/>
            <Text fontSize={["0.6rem","0.6rem","1rem","1rem"]}  mt="10" pos="absolute">Malaysia</Text>
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