<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Gérer les concerts</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list v-if="concerts.length > 0">
        <ion-item v-for="concert in concerts" :key="concert.id">
          <ion-label>
            <h2>{{ concert.artist }}</h2>
            <p>Date : {{ concert.date }}</p>
            <p>Lieu : {{ concert.location }}</p>
          </ion-label>
          <ion-buttons slot="end">
            <ion-button @click="editConcert(concert)">Modifier</ion-button>
            <ion-button @click="deleteConcert(concert)">Supprimer</ion-button>
          </ion-buttons>
        </ion-item>
      </ion-list>

      <div v-else>
        Aucun concert trouvé.
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

export default defineComponent({
  name: "ManageConcerts",
  data() {
    return {
      concerts: [] // Cette variable contiendra la liste des concerts récupérée depuis l'API
    };
  },
  created() {
    // Appeler une méthode pour récupérer la liste des concerts depuis l'API et les assigner à this.concerts
    // Utilisez Axios, fetch ou une autre bibliothèque pour effectuer la requête HTTP
  },
  methods: {
    logout() {
      // Logique de déconnexion
      // Redirigez l'utilisateur vers la page de connexion
      // Utilisez this.$router.push() pour effectuer la redirection
    },

    editConcert(concert) {
      // Logique de modification d'un concert
      // Redirigez l'utilisateur vers la page de modification du concert avec l'ID du concert en tant que paramètre
      // Utilisez this.$router.push() pour effectuer la redirection
    },
    deleteConcert(concert) {
      // Logique de suppression d'un concert
      // Appelez l'API pour supprimer le concert avec l'ID du concert
      // Mettez à jour la liste des concerts après la suppression
    }
  }
});
</script>

<style scoped>
ion-content {
  padding: 20px;
}

h2 {
  margin-bottom: 10px;
}

ion-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

ion-buttons {
  margin-left: 10px;
}

ion-button {
  --background: #007bff;
  --color: white;
  --border-radius: 4px;
}

ion-button:hover {
  --background: #0056b3;
}
</style>
