import React, { useRef, useEffect } from 'react';

const OutsideClickNotifier = (props) => {
  const notifierRef = useRef(null);
  
  useEffect(() => {
    const onOutsideClick = (event) => {
      if (notifierRef.current 
          && !notifierRef.current.contains(event.target)
          && !props.excludeIds.includes(event.target.id)) {
        props.sideEffect();
      }
    }

    document.addEventListener('mouseup', onOutsideClick);
    return () => document.removeEventListener('mouseup', onOutsideClick)
  }, [notifierRef])

  return (
    <div ref={notifierRef}>
      {props.children}
    </div>
  )

}

export default OutsideClickNotifier;