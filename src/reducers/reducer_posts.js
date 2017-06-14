import {FETCH_POSTS, CREATE_POST,FETCH_POST,DELETE_POST} from "../actions"

const PostsInitialState = {}
export const PostsReducer = (state = PostsInitialState, action) => {
   
    switch (action.type) {
        case FETCH_POST:
         
 
            //return newState
            if (action.payload.data)
            
                return {...state , [action.payload.data.id]: action.payload.data }
            else
                return state
        case FETCH_POSTS:
            
            const posts_map = {}
            action.payload.data.map( post => posts_map[post.id] = post )
            return posts_map
        case CREATE_POST: 
            let new_state = {...state}
            console.log("action",action)
            new_state[action.payload.data.id] = action.payload.data
            return new_state 
        case DELETE_POST:
            console.log(action)
            let id = action.payload
            let newState = {...state}
            delete newState[id]
            return newState
        default:
            return state
    }
}

export default PostsReducer