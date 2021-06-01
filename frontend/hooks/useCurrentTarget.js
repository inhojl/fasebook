import { useState } from 'react';

export const useCurrentTarget = (initialState = '') => {
  const [ value, setValue ] = useState(initialState)
  const onEvent = (event) => setValue(event.target.value)
  return [ value, onEvent ];
}