<template>
  <div class="concert-detail">
    <div class="logout-button">
      <button class="logout-button-red" @click="logout">Déconnexion</button>
    </div>
    <h2>Détails du concert</h2>
    <div v-if="concert" class="concert-info">
      <h3>{{ concert.artist }}</h3>
      <p>Date: {{ concert.date }}</p>
      <p>Lieu: {{ concert.location }}</p>
      <p>Description: {{ concert.description }}</p>
    </div>
    <div v-else>
      Concert non trouvé.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      concert: null // Cette variable contiendra les détails du concert récupérés depuis l'API
    };
  },
  created() {
    // Récupérez l'ID du concert à partir des paramètres d'URL ou des propriétés de composant
    const concertId = this.$route.params.id;

    // Appeler une méthode pour récupérer les détails du concert depuis l'API en utilisant l'ID du concert
    // Utilisez Axios, fetch ou une autre bibliothèque pour effectuer la requête HTTP
    // Assurez-vous d'assigner les détails du concert à this.concert
  },
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
.concert-detail {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.concert-info {
  margin-top: 20px;
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
</style>
