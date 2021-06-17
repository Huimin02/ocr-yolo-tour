import React, {useEffect} from 'react'
import classNames from 'classnames'
import useDemoKrpano from './hooks/useDemoKrpano'
import './asset/demo-page.css'
import { Box,Center, Button } from '@chakra-ui/react'

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

      <Box bg="green" className="demo-page">
        <div ref={containerRef} />
        <div className="menu">
          <a href="/">Back to Home</a>
          <Button
            onClick={toggleLockView}
            className={isLocked ? 'disable' : null}
          >
            Toggle Lock View
          </Button>
          <Button
            onClick={toggleHideSpots}
            className={isHideSpots ? 'disable' : null}
          >
            Toggle Hide Spots
          </Button>
          <Button
            onClick={goToPano}
            className={isHideSpots ? 'disable' : null}
          >
            Go To Aerial
          </Button>
          <div className="scene-name">Current Scene Name: {currentScene}</div>
        </div>

      </Box>
    </>
  )
}

export default Krpano