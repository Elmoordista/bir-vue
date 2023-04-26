<template>
    <div>
        <v-card class="p-5">
            <div class="flex justify-md-space-between align-center mb-3">
                <h2 class="font-bold ...">ASSIGNMENT HISTORY</h2>
                <v-btn
                    depressed
                    color="primary"
                    rounded
                    elevation="2"
                    @click="showAssignmentModal = true"
                    >
                    Add
                </v-btn>
            </div>
            <hr class="mb-3"/>
            <div id="table">
                <div class="search-field">
                    <v-text-field
                        class="pa-2 w-30"
                        v-model="search"
                        prepend-icon="mdi-magnify"
                        label="Search"
                        hide-details
                        dense
                        solo
                    ></v-text-field>
                </div>
                <v-data-table
                    :headers="header"
                    :items="desserts"
                    :search="search"
                    :items-per-page="6"
                >
                <template v-slot:item.action="{ item }">
                <div>
                    <v-icon size="20" color="green">mdi-pencil</v-icon>
                    |
                    <v-icon size="20" color="red">mdi-delete</v-icon>
                </div>
                </template>
                </v-data-table>
            </div>
        </v-card>
        <assignment-development @closedialog="closedialog" :showdialog="showAssignmentModal" @saveData="saveData"></assignment-development>
        <!-- <education-modal @closedialog="closedialog" :showdialog="showAssignmentModal"></education-modal>
        <eligibility-modal @closedialog="closedialog" :showdialog="showeligibilitymodal"></eligibility-modal> -->
    </div>
</template>

<script>
  import AssignmentDevelopment from  '@/components/modals/assignment.vue';
  import VueCookies from "vue-cookies";
  export default {
    components:{
        AssignmentDevelopment,
    },
    data () {
      return {
        search:null,
        showAssignmentModal:false,
        showeligibilitymodal:false,
        header: [
          {
            text: 'Tittle',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'From', value: 'calories' },
          { text: 'To', value: 'fat' },
          { text: 'Number of Hours', value: 'carbs' },
          { text: 'Type of learning', value: 'protein' },
          { text: 'Sponsored By', value: 'iron' },
          { text: 'Action', value: 'action' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
        userInfo:[],
      }
    },
    created(){
        this.initialized();
       
    },
    mounted(){
      this.getAssignment();
    },
    methods:{
        async initialized(){
            this.userInfo = VueCookies.get("user");
        },
        closedialog(){
            this.showAssignmentModal = false;
        },
        saveData(data){
            var thiss = this;
            data.EmployeeID = this.userInfo.employee_id;
            this.axios.post("/v1/employee/assignments", data)
            .then(function (response) {
              thiss.showAssignmentModal = false;
              thiss.$awn.success('Save record successfully')
            },this)
            .catch(function (error) {
                Object.values(error.response.data.errors).forEach(element => {
                    thiss.$awn.warning(element[0])
                });
            });
        },
        getAssignment(){
            this.axios.get("/v1/employee/assignments/"+this.userInfo.employee_id)
            .then(function (response) {
                console.log(response,'getAssignment');
            },this)
            .catch(function (error) {
                Object.values(error.response.data.errors).forEach(element => {
                    thiss.$awn.warning(element[0])
                });
            });
        }
    }
  }
</script>