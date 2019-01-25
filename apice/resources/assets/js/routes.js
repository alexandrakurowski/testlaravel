/* |------------------------------------------------------------------------------- | routes.js |------------------------------------------------------------------------------- | Contains all of the routes for the application */ /* Imports Vue and VueRouter to extend with the routes. 
*/ 
//on va chercher Vue dan le node _module et le paquet vue router dans vue
import Vue from 'vue' 
import VueRouter from 'vue-router'

 /* Extends Vue to use Vue Router */ 
 //on dit a vue d'utilser vue router
 Vue.use(VueRouter)

 /* Makes a new VueRouter that we will use to run all of the routes for the app. */ 

 // initialisation des routes pour les différentes fonctionnalitées/pages etc...
 export default new VueRouter({ 
     routes: 
        [{ path: '/', 
        name: 'home', 
        component: Vue.component('Home', require('./pages/Home.vue')) },

        { path: '/offres', name: 'offres', component: Vue.component('Offres', require('./pages/Offres.vue')) },
//ajouter une offre ou favoris ? attention voir café !!!
        // { path: '/offres/new', name: 'newOffre', component: Vue.component('NewOffre', require('./pages/NewOffre.vue')) }, 

        { path: '/Offres/:id', name: 'offre', component: Vue.component('Offre', require('./pages/Offre.vue')) }] });

// **Chaque route est un objet dans un tableau de routes que nous utilisons lorsque nous construisons un nouveau VueRouter.Comme nous avons les itinéraires dans un fichier séparé, nous exportons le module par défaut afin de pouvoir l'importer dans notre fichier app.js.*/