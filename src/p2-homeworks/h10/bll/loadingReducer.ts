const initState = {
  isLoading: false,
}

type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState, action: LoadingACType): initStateType => {
  switch (action.type) {
    case 'SET-LOADING': {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }
    default:
      return state
  }
}

export type LoadingACType = {
  type: 'SET-LOADING',
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingACType => {
  return {
    type: 'SET-LOADING',
    isLoading,
  } as const
}