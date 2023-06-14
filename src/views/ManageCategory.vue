<template>
  <div class="manage-categories">
    <div class="logout-button">
      <button class="logout-button-red" @click="logout">Déconnexion</button>
    </div>
    <h2>Gérer les catégories</h2>
    <!-- Reste du code inchangé -->
  </div>
</template>

<script>
export default {
  // ...
  methods: {
    // ...
    logout() {
      // Logique de déconnexion
      // Appelez l'API ou effectuez les opérations nécessaires pour déconnecter l'utilisateur
    }
  }
};
</script>

<style scoped>
.manage-categories {
  padding: 20px;
}

.logout-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.logout-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.logout-button-red {
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button-red:hover {
  background-color: darkred;
}
</style>
