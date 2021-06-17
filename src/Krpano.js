import React from 'react'
import classNames from 'classnames'
import useDemoKrpano from './hooks/useDemoKrpano'
import './asset/demo-page.css'
import { Box,Center } from '@chakra-ui/react'

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
  } = useDemoKrpano()

  return (
    <>
      {showLoadingPage && <LoadingPage isFadingout={isLoaded} />}

      <Box bg="green" className="demo-page">
        <div ref={containerRef} />
        <div className="menu">
          <a href="/">Back to Home</a>
          <button
            onClick={toggleLockView}
            className={isLocked ? 'disable' : null}
          >
            Toggle Lock View
          </button>
          <button
            onClick={toggleHideSpots}
            className={isHideSpots ? 'disable' : null}
          >
            Toggle Hide Spots
          </button>
          <div className="scene-name">Current Scene Name: {currentScene}</div>
        </div>

      </Box>
    </>
  )
}

export default Krpano