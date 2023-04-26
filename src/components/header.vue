<template>
  <div class="header-wrapper-info header-wrapper">
    <div class="pa-5 text-white text-center flex-1">
      WELCOME TO RR7B
    </div>
    <v-menu bottom>
        <template v-slot:activator="{ attrs, on }">
          <v-btn icon v-bind="attrs"   v-on="on" rounded class="pr-10"><v-icon color="#fff" size="30">mdi-account</v-icon></v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title @click="logout">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </div>
</template>


<script>
  import VueCookies from "vue-cookies";
  export default {
    data: () => ({
      role:'',
      items: [
        { title: 'info' },
        { title: 'logout' },
      ],
      links: [
        {
        text: "Category",
          route: "category",
        },
        {
        text: "Edit / Add items",
          route: "items",
        },
        {
          text: "Purchase History",
          route: "history",
        },
        {
          text: "Account Management",
          route: "employee_account",
        },
      ],
      roles :[
        'Admin',
        'Cashier',
        'Kitchen',
      ],
      payload :{
        logo:'/adminlogo.png',
        gcash_name: '',
        contact_number : '',
        contact_number : '',
      },
      logo : '',
      
      dialog :false,
      loading :false,
      curentRoles : ''
    }),
    mounted(){

      
    },
    methods:{
      // logout(){
      //   localStorage.removeItem('token');
      //   this.$awn.success('Logunt successfully')
      //   this.$router.push({ name: 'login'})
      // },
      logout(){
        var thiss = this;

        var payload={
          email:'test',
          pass:'test',
          fcm_token:'test',
        }
        this.axios.post("/v1/auth/logout")
          .then(function (response) {
            VueCookies.remove("token");
            VueCookies.remove("user");
            thiss.$router.push({name :'login'});
            thiss.$awn.success('Logout successfully')
          },this)
          .catch(function (error) {
            console.log(error);
          });
      },
    }
  }
</script>