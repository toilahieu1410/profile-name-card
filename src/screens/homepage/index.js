import React, {Fragment, useState, useEffect} from 'react'

const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
  },[])
  return {width}
}

const HomePage = ({children}) => {

  const viewPort = useViewPort()
  const isMobile = viewPort.width <= 991
  
  if(isMobile) {
    return (
      <div className='layout-mobile'>
        <Fragment>
          <div className='hoplongtech'>
              {children}
          </div>
        </Fragment>
      </div>
    )
  }
  return (
    <div className='layout-desktop'>
      <Fragment>
        <div className='hoplongtech'>
            {children}
        </div>
      </Fragment>
    </div>
  )
}
export default HomePage