// src/store/main/mutations.js

// Will contain all the mutations or functions that will alter the state of this module

let mutations = {
    /**
     * Sets pokemon state variable to the array received on payload results
     */
    // SAVE_POKEMONS: (state, payload) => {
    //     state.pokemons = payload;
    // },
    setPostData(state, payload) {
        state.posts = payload
      },
      setCurrentPost(state, payload) {
        state.currentPost = payload
      },
      setCurrentPostComments(state, payload) {
        state.currentPostComments = payload
      },
      setShowCurrentPost(state) {
       return  !state.showCurrentPost
      }
}


export default mutations;