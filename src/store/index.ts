import { createStore, Store, useStore as baseUseStore, GetterTree, ActionTree, MutationTree } from 'vuex'
import { InjectionKey } from 'vue'
import axios from 'axios'
export type User = {
  username: string,
  token: string,
  role: string
}

export type State = { user: User }
const state: State = {
  user: {
    username: "",
    token: "",
    role: ""
  }
}
const getters: GetterTree<State, State> = {
  getUser: (state) => state.user,
}

const actions: ActionTree<State, State> = {
  register(state, registerForm) {
    return axios.post('http://localhost:8082/api/user/register', registerForm).then((response) => {

      if (response.status === 201) {
        state.commit("mutateregister", registerForm)
      } else {

        return { "statut": response.status, "message": response.statusText }
      }

    }).catch((error) => {
      return { "statut": error.response.status, "message": error.response.statusText }
    });

  },
  login(state, loginForm) {

    return axios.post("http://localhost:8082/api/user/login", loginForm).then((response) => {

      if (response.status === 200) {
        state.commit("mutatelogin", loginForm)
      } else {

        return { "statut": response.status, "message": response.statusText }
      }

    }).catch((error) => {
      return { "statut": error.response.status, "message": error.response.statusText }
    });
  },
  logout(state) {
    state.commit("mutatelogout")
  }
}

const mutations: MutationTree<State> = {
  mutatelogin(state, loginForm) {
    console.log("login mutation", loginForm);
    state.user.username = loginForm.value.username
    state.user.token = loginForm.value.token
    state.user.role = loginForm.value.role
  },
  mutatelogout(state) {
    console.log("logout mutation")
    state.user.username = ""
    state.user.token = ""
    state.user.role = ""
  },
  mutateregister(state, registerForm) {
    console.log("login mutation", registerForm);
    state.user.username = registerForm.value.username
    state.user.token = registerForm.value.token
    state.user.role = registerForm.value.role
  }

}

export const store: Store<State> = createStore({ state, getters, actions, mutations })
export const key: InjectionKey<Store<State>> = Symbol()
export function useStore() {
  return baseUseStore(key)
}