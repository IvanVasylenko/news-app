import { useDispatch } from "react-redux"

import { hideNotification, showNotification } from "../store/slices/commonSlice"

export const useTemporaryNotification = () => {
  const dispatch = useDispatch()

  const showNotificationMessage = (message) => {
    dispatch(showNotification(message))

    setTimeout(() => {
      dispatch(hideNotification())
    }, 3000)
  }

  return { showNotificationMessage }
}
