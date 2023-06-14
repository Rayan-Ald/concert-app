<template>

    <div class="home">
      <div class="logout-button">
        <ion-button class="logout-button-red" @click="logout()">Déconnexion</ion-button>
      </div>
      <h1>Bienvenue sur ConcertApp</h1>
      <p>Connectez-vous pour accéder à votre compte ou créez un nouveau compte.</p>
      <ion-button router-link="/login">Se connecter</ion-button>
      <ion-button router-link="/register">S'inscrire</ion-button>
    </div>
  </template>
  
  <script lang="ts">
import { RouterLink } from 'vue-router';

import { defineComponent,computed } from "vue";
import {IonButton,alertController,toastController} from "@ionic/vue"
// import {useStore} from "../store"
import {useRoute,useRouter} from "vue-router"
export default defineComponent({
    name: "Home",
    setup(){

    const route = useRoute();
    const router = useRouter();

    const logout = async () => {
     
      const alert = await alertController.create({
        header: "Supprimer cette tâche",
        message: "Voulez-vous supprimer cette tâche ?",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            handler: () => {
              console.log("Annuler");
            },
          },
          {
            text: "Oui, je confirme",
            role:"confirm",
            handler: () => {
              router.push("/");
            },
          },
        ],
      });

      await alert.present();
      
    };




    return {logout}
  },
  components: {
    IonButton
  },
  });
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
    text-align: center;
  }
  
  .button {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  