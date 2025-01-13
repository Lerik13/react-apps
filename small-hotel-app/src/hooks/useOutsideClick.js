import { useRef, useEffect } from 'react'

export function useOutsideClick(hadler, listenCapturing = true) {
  const ref = useRef()

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) hadler()
    }
    document.addEventListener('click', handleClick, listenCapturing)
    return () =>
      document.removeEventListener('click', handleClick, listenCapturing)
  }, [hadler, listenCapturing])

  return ref
}
