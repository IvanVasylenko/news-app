import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { enableLoading, disableLoading } from '../store/slices/commonSlice'

const containImage = url => {
  return new Promise(resolve => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      resolve(true)
    }
    img.onerror = () => {
      resolve(false)
    }
  })
}

export const useImageCheck = path => {
  const dispatch = useDispatch()

  const [validOrEmptyPath, setValidOrEmptyPath] = useState('')

  useEffect(() => {
    let isSubscribed = true

    dispatch(enableLoading())

    containImage(path).then(result => {
      if (isSubscribed) {
        setValidOrEmptyPath(result ? path : '')

        dispatch(disableLoading())
      }
    })

    return () => {
      isSubscribed = false
    }
  }, [path, dispatch])

  return validOrEmptyPath
}
