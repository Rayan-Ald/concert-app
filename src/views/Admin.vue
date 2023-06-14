<template>
    <div class="admin">
        <div class="logout-button">
            <button class="logout-button-red" @click="logout">Déconnexion</button>
        </div>
        <h2>Administration</h2>
        <div class="buttons">
            <router-link to="/admin/users" class="button">Gérer les utilisateurs</router-link>
            <router-link to="/admin/categories" class="button">Gérer les catégories</router-link>
            <router-link to="/admin/concerts" class="button">Gérer les concerts</router-link>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Admin',
    setup() {
        
    },
})
</script>

  
<style scoped>
.admin {
    padding: 20px;
    text-align: center;
}

.buttons {
    margin-top: 20px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 10px;
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
  