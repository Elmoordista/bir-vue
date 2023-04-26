<template>
  <v-app id="inspire">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-navigation-drawer v-model="drawer" app id="drawer-wrapper">
      <div class="pa-4 text-center" id="drawer-wrapper">
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div class="text-white">JHON DOE</div>
        <small class="text-white">EMPLOYEE</small>
      </div>

      <div class="drawer-wrapper">
        <v-col id="left-list" class="pa-0">
            <v-list class="pt-0">

                <v-list-item-group v-model="model">
                    <template v-for="(item, i) in links">
                        <v-list-item class="sidebar-links" :key="i" @click="goTO(item.route)" v-if="!item.submenus" >
                          <v-list-item-icon class="mr-4 pa-0">
                              <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content  class="mr-4 pa-0">
                              <v-list-item-title v-text="item.text"  class="text-white"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                
                        <v-list-group  v-else
                          class="menu-icons" :key="item.id" >
                          <template v-slot:activator>
                            <v-list-item-icon class="mr-4 pa-0">
                                <v-icon v-text="item.icon" color="white"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title class="text-white">{{item.text}}</v-list-item-title>
                            </v-list-item-content>
                          </template>
                          <v-list-item  v-for="(menu, i) of item.submenus" :key="i" link @click="goTO(menu.route)" id="submenus" active-class="submenus-active">
                            <v-list-item-icon class="mr-4 pa-0">
                              <v-icon v-text="menu.icon" ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content  class="mr-4 pa-0">
                              <v-list-item-title v-text="menu.text"  class="text-white"></v-list-item-title>
                          </v-list-item-content>
                          </v-list-item>
                          <hr/>
                        </v-list-group>
                     
                  </template>
                  
                </v-list-item-group>

            </v-list>
        </v-col>
      </div>  
    </v-navigation-drawer>

    <v-main class="flex flex-column">
      <header-layout/>
      <div class="pa-10 flex-1">
        <router-view/>
      </div>
      <!-- <footer-layout></footer-layout> -->
    </v-main>
  </v-app>
</template>

<script>
import HeaderLayout from './components/header.vue'
import FooterLayout from './components/footer.vue'
  export default {
    components: { HeaderLayout,FooterLayout},
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      model: null,
      links: [
        // {
        //   text: "Dashboard",
        //   route: "dashboard",
        //   icon : 'mdi-view-dashboard',
        // },
       
        {
          text: "Personal Profile",
          route: "profile",
          icon : 'mdi-account-settings',
          submenus:[
              {
              icon: 'mdi-history',
              text: 'Assignment History',
              route: 'assignment-history',
            },
            {
              icon: 'mdi-school',
              text: 'Educational Background',
              route: 'educational-background',
            },
            {
              icon: 'mdi-gender-male',
              text: 'Family background',
              route: 'family-background',
            },
            {
              icon: 'mdi-gender-male',
              text: 'Gender and Development',
              route: 'gender-development',
            },
            {
              icon: 'mdi-format-list-bulleted-type',
              text: 'Health Information',
              route: 'health-info',
            },
            {
              icon: 'mdi-information',
              text: 'Learning and Development',
              route: 'learning-development',
            },
            {
              icon: 'mdi-information',
              text: 'Other Information',
              route: 'other-information',
            },
            {
              icon: 'mdi-format-list-bulleted-type',
              text: 'Performance Rating',
              route: 'performance-rating',
            },
            {
              icon: 'mdi-format-list-bulleted-type',
              text: 'Personal Information',
              route: 'personal-info',
            },
            {
              icon: 'mdi-file',
              text: 'Upload Documents',
              route: 'uploaded-document',
            },
            {
              icon: 'mdi-format-list-bulleted-type',
              text: 'Violation and Offences',
              route: 'violation-offence',
            },

          ]
        },
        {
          text: "Leave Management",
          route: "leave-management",
          icon :"mdi-view-dashboard",
        },

      ],
    }),
    methods:{
      goTO(route){
        this.$router.push({name:route})
      }
    }
  }
</script>