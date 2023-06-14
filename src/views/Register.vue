<template>
  <div class="register">
    <h2>Inscription</h2>
    <form @submit="register">
      <div class="form-group">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmez le mot de passe:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>
      <button type="submit" class="button">S'inscrire</button>
    </form>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
export default defineComponent({
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register(event) {
      event.preventDefault();

      
      // Construire le corps de la requête
      const requestBody = {
        login: this.username,
        password: this.password,
        role: "client"
      };

      const store = useStore();
            store.commit("register", requestBody);
    },
    push() {
      const router = useRouter();
      // router.push("/login");
      window.location.href = '/manageConcerts';
    }
  }
});
</script>
  
<style scoped>
.register {
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
  