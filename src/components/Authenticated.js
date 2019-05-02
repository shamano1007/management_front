// 参考：https://qiita.com/soutaito/items/691ac9dabe765e98d9f9
import React from 'react'
import { Redirect } from 'react-router-dom'


const Authenticated = (props) => (props.isLoggedIn ? props.children : <Redirect to={'/login'}/>)

export default Authenticated
