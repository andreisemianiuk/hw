import { PeopleType } from '../HW8'

type ActionType = {
  type: string
  payload: string | number
}

export const homeWorkReducer = (state: PeopleType, action: ActionType): PeopleType => {
  switch (action.type) {
    case 'sort': {
      let copy = [...state]
      if (action.payload === 'up') {
        copy.sort((a, b) => a.age - b.age)
      } else if (action.payload === 'down') {
        copy.sort((a, b) =>b.age - a.age)
      }
      return copy
    }
    case 'check': {
      return [...state.filter(u => u.age >= action.payload)]
    }
    default:
      return state
  }
}