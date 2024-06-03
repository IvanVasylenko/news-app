import { useTemporaryNotification } from "./useTemporaryNotification"

export const useEmailFormatChecking = () => {
  const { showNotificationMessage } = useTemporaryNotification()

  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const checkEmailFormat = (email) => {
    if (!validEmail.test(email)) {
      showNotificationMessage('Invalid Email format')

      return false
    }

    return true
  }

  return { checkEmailFormat }
}
