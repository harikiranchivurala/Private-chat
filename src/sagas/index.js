import {takeEvery} from 'redux-saga/effects'
import * as types from '../constants/actionTypes'

const handleNewUser = function* handleNewUser(params){
    yield takeEvery('types.ADD_USER',(action)=>{
        // console.log('params are',params)
        // console.log('action is..',action)
        // params.socket.send(JSON.stringify(action))
    })
}

export default handleNewUser