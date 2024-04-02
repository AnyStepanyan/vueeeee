// src/store/main/actions.js

// Will contain  all actions of this module
import axios from "axios";

let actions = {
    /**
     * Example action fetching Pokemons data and saving it on the state, using a mutation
     */
//     getPosts: (state) => {
//         return new Promise((resolve, reject) => {
//             fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(response => response.json())
//                 .then(posts => {
//                     state.commit("setPostData", posts);
//                 }).catch((err) => {
//                 reject(err);
//             });
//         });
        
//     },
// };
getPosts: (state) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
  state.commit('setPostData', res.data)
  })
},
getComments: (state) => {
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(res => {
  state.commit('setCurrentPostComments', res.data)
  })
}
}
export default actions;