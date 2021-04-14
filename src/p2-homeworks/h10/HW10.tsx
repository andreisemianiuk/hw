import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { AppStoreType } from './bll/store'
import { loadingAC } from './bll/loadingReducer'
import preloader from './preloader/Spinner-2.gif'


function HW10() {
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
  const dispatch = useDispatch()
  
  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      console.log('loading...')
      dispatch(loadingAC(false))
    }, 2000)
    
  }
  
  return (
    <div>
      <hr/>
      homeworks 10
      
      {/*should work (должно работать)*/}
      {loading
        ? (
          <div>
            <img
              src={preloader}
              style={
                {
                  width: '50px',
                  height: '50px',
                  marginLeft: '10px',
                }
              }
              alt={'preloader'}/>
          </div>
        ) : (
          <div style={
            {
              height: '50px',
              marginBottom: '10px',
              marginLeft: '10px',
            }
          }>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }
      
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
