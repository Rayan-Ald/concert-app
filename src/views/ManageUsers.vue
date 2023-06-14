<template>
  <div class="manage-users">
    <div class="logout-button">
      <button class="logout-button-red" @click="logout">Déconnexion</button>
    </div>
    <h2>Gérer les utilisateurs</h2>
    <div v-if="users.length > 0" class="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom d'utilisateur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>
              <button @click="editUser(user)">Modifier</button>
              <button @click="deleteUser(user)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      Aucun utilisateur trouvé.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [] // Cette variable contiendra la liste des utilisateurs récupérée depuis l'API
    };
  },
  created() {
    // Appeler une méthode pour récupérer la liste des utilisateurs depuis l'API et les assigner à this.users
    // Utilisez Axios, fetch ou une autre bibliothèque pour effectuer la requête HTTP
  },
  methods: {
    editUser(user) {
      // Logique de modification d'un utilisateur
      // Redirigez l'utilisateur vers la page de modification de l'utilisateur avec l'ID de l'utilisateur en tant que paramètre
      // Utilisez this.$router.push() pour effectuer la redirection
    },
    deleteUser(user) {
      // Logique de suppression d'un utilisateur
      // Appelez l'API pour supprimer l'utilisateur avec l'ID de l'utilisateur
      // Mettez à jour la liste des utilisateurs après la suppression
    }
  }
};
</script>

<style scoped>
.manage-users {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.user-list {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.logout-button {
  text-align: right;
}

.logout-button-red {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
