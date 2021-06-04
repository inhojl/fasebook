import React, { useRef, useEffect } from 'react';

const OutsideClickNotifier = (props) => {
  const notifierRef = useRef(null);
  
  useEffect(() => {
    const onOutsideClick = (event) => {
      if (notifierRef.current && !notifierRef.current.contains(event.target)) {
        props.sideEffect();
      }
    }

    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick)
  }, [notifierRef])

  return (
    <div ref={notifierRef}>
      {props.children}
    </div>
  )

}

export default OutsideClickNotifier;