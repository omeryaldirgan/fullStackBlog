 import * as types from './types'
//Action: Bir javascript objesidir. Store’da hangi state’in değişeceği bilgisini(type) ve state verisini taşır(payload)

export const fetchPosts=()=>{
   return {
      type:types.FETCH_POSTS,
      payload: []
   }
}
