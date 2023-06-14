<template>
  <div class="login">
    <h2>Connexion</h2>
    <form @submit="login">
      <div class="form-group">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="button">Se connecter</button>
    </form>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
export default defineComponent({
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  setup() {
    const store = useStore();
    
    function login(event) {
      event.preventDefault();

      // Construire le corps de la requête
      const requestBody = {
        login: this.username,
        password: this.password,
      };
      
      store.dispatch("login", requestBody)


    }
    function push() {
      const router = useRouter();
      router.push("/home");
      window.location.href = '/manageConcerts';
    }
    return {
      login,
      push
    }
  }

});
</script>
  
<style scoped>
.login {
  padding: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

.label {
  display: block;
  text-align: left;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
</style>
  