<template id="form_login">
    <v-form id="login_form">
      <div class="login-container">
        <!-- <div class="logo">
          <v-img src="https://wilcity.com/wp-content/uploads/2018/12/sample-logo-design-png-3-2.png" id="imglogo"></v-img>
        </div> -->
        <div class="login">
          <v-content>
            <v-container>
              <v-layout row class="text-lg-center">
                <v-flex>
                  <v-container class="cont _cont">
                    <v-card flat id="v-login">
                      <v-card-title primary-title>
                        <v-img :src="logo" width="150" height="150" id="selected-image"></v-img>
                      </v-card-title>
                      <v-form ref="loginform" id="v_form">
                        <v-text-field
                          name="Username"
                          label="Username"
                          :rules="checkEmail"
                          v-model="data.email"
                          append-icon="mdi-email"
                          rounded
                          background-color=""
                          solo
                          outlined
                        ></v-text-field>
                        <v-text-field
                          name="Password"
                          label="Password"
                          :type="viewpass?'password':'text'"
                          :rules="checkPass"
                          v-model="data.password"
                           solo
                          outlined
                          :append-icon="viewpass?'mdi-eye':'mdi-eye-off'"
                          @click:append="viewpass =! viewpass"
                          rounded
                        ></v-text-field>
  
                        <v-card-actions class="submit">
                          <v-btn large block @click="_submit" color="primary" elevation="2"
                          rounded
                            >Login</v-btn
                          >
                        </v-card-actions>
                      </v-form>
                    </v-card>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
            <v-snackbar v-model="snackbar">
              {{ text }}
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-content>
        </div>
      </div>
    </v-form>
  </template>
  <script>
  import logo from '@/assets/img/bir_logo.jpg';
  import VueCookies from "vue-cookies";
  export default {
    //   components: {
    //     Filters,
    //   },
    data() {
      return {
        data: {
          email: "",
          password: "",
        },
        snackbar: false,
        viewpass: true,
        logo,
        token: '',
        text: "",
        roles: [
          'total_sales',
          'add_order',
          'orders',
        ],
        checkEmail: [
          (v) => !!v || "Email required",
          // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        checkPass: [
          (v) => !!v || "Password required",
          // (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
      };
    },
    mounted(){
      // this.getDeviceToken();
    },
    methods: {
        initialize(token){
            this.token = token;
        },
      _submit() {

        if(!this.$refs.loginform.validate()) return;
        const thiss = this;
        var payload = {
            email: this.data.email,
            password: this.data.password,
        };
        this.axios.post("/v1/auth/login", payload)
          .then(function (response) {

            if (response.data.success) {
              VueCookies.set("token", response.data.data.access_token);
              VueCookies.set("user", response.data.data);
              thiss.$router.push({name :'main'});
              thiss.$awn.success('Successfully login')
            }  else {
              // thiss.snackbar = true;
              thiss.$awn.alert('Invalid Email/Password')
            }
          },this)
          .catch(function (error) {
            thiss.$awn.alert('Invalid Email/Password')
          });
      },
    },
  };
  </script>
  <style scoped>
  .login .cont {
    width: 500px;
    margin: auto;
    box-shadow: 0 3px 5px -1px rgba(100, 100, 0, 0.2),
      0 5px 8px 0 rgba(100, 100, 0, 0.14), 0 1px 14px 0 rgba(100, 100, 0, 0.12) !important;
  }
  #login_form {
    width: 100%;
    height: 100%;
    background: #1031b7;
    position: absolute
  }
  #login_form .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding-top: 8%;
  }
  #imglogo {
    width: 70%!important;
    margin: auto;
  }
  .theme--light.v-application {
    background-color: orange !important;
  }
  #v_form {
    padding: 0 16px;
  }
  ._cont {
    border-radius: 18px;
    padding: 0;
  } 
  ._cont .v-card {
    border-radius: 12px;
  }
  .flex{
    width: 450px !important;
  }
  .flex ._cont{
    width: 100%;
  }
  .v-card--flat{
    padding: 10px;
  }
   .v-card__title{
    justify-content: center;
        display: flex;
      flex-direction: column;
  }
  .submit button{
    background-color: #1031b7 !important;
  }
  
  </style>
