import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createOrEditCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'
import { updateCurrentUser } from '../../services/apiAuth'

export function useUpdateUser() {
  const queryClient = useQueryClient()

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User account successfully updated')
      //queryClient.setQueryData('user', user) // if the cache not renew, put the data in the cache manually
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isUpdating, updateUser }
}
