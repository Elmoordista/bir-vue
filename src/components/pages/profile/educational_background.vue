<template>
  <div>
        <template>
          <v-tabs
            v-model="tab"
          >
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      <v-card class="mt-2">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card class="p-5">
            <div class="flex justify-md-space-between align-center mb-3">
                <h2 class="font-bold ...">EDUCATION</h2>
                <v-btn
                    depressed
                    color="primary"
                    rounded
                    elevation="2"
                    @click="showeducationmodal = true"
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
                    :headers="header_education"
                    :items="education_data"
                    :items-per-page="6"
                >
                <template v-slot:item.course="{ item }">
                  <div>
                      {{ findCourse(item.Course) }}
                  </div>
                </template>
                <template v-slot:item.From="{ item }">
                  <div>
                      {{ convertDate(item.From)}}
                  </div>
                </template>
                <template v-slot:item.To="{ item }">
                  <div>
                      {{ convertDate(item.To)}}
                  </div>
                </template>
                <template v-slot:item.action="{ item }">
                  <div>
                      <v-icon size="20" color="green" @click="editEducationData(item)">mdi-pencil</v-icon>
                      |
                      <v-icon size="20" color="red">mdi-delete</v-icon>
                  </div>
                </template>
                </v-data-table>
            </div>
        </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="p-5">
            <div class="flex justify-md-space-between align-center mb-3">
                <h2 class="font-bold ...">ELIGIBILTY</h2>
                <v-btn
                    depressed
                    color="primary"
                    rounded
                    elevation="2"
                    @click="showeligibilitymodal = true"
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
                    :headers="header_eligibity"
                    :items="desserts"
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
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      <education-modal @closedialog="closedialog" :courselist="courselist" @submitData="submitData" @updateData="updateData" :showdialog="showeducationmodal" :educpayload="educpayload"></education-modal>
      <eligibility-modal @closedialog="closedialog" :showdialog="showeligibilitymodal"></eligibility-modal>
  </div>
</template>

<script>
import moment from "moment";
import EducationModal from  '@/components/modals/education.vue';
import EligibilityModal from  '@/components/modals/eligibility.vue';
import VueCookies from "vue-cookies";
export default {
  components:{
      EducationModal,
      EligibilityModal,
  },
  data () {
    return {
      search:null,
      tab: null,
      showeducationmodal:false,
      showeligibilitymodal:false,
      items: [
        'EDUCATION', 'ELIGIBILITY'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      header_education: [
        {
          text: 'EDUCATION',
          align: 'start',
          sortable: false,
          value: 'Education',
        },
        { text: 'NAME OF SCHOOL', value: 'NameOfSchool' },
        { text: 'BASIC EDUCATION/DEGREE/COURSE', value: 'course' },
        { text: 'FROM', value: 'From' },
        { text: 'TO', value: 'To' },
        { text: 'HIGHEST LEVEL/UNIT EARNED', value: 'UnitsEarned' },
        { text: 'YEAR GRADUATED', value: 'YearGraduated' },
        // { text: 'HONOR', value: 'iron' },
        { text: 'Action', value: 'action' },
      ],
      header_eligibity: [
        {
          text: 'LEVEL',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'RATING', value: 'calories' },
        { text: 'DATA OF EXAMINATION', value: 'fat' },
        { text: 'PLACE OF EXAMINATION', value: 'carbs' },
        { text: 'LICENCE NUMBER', value: 'protein' },
        { text: 'DATE OF VALIDITY', value: 'iron' },
        { text: 'Action', value: 'action' },
      ],
      education_data:[],
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
      courselist:[],
      educpayload:[]
    }
  },
  created(){
      this.initialized();
      this.getCourse();
    },
  mounted(){
    this.getEducation();
  },
  methods:{
      closedialog(){
          this.showeducationmodal = false;
          this.showeligibilitymodal = false;
      },
      convertDate(date){
        return moment(date).format("YYYY MMM DD")
      },
      findCourse(id){
        return this.courselist.find(x => x.id == id).name
      },
      async initialized(){
          this.userInfo = VueCookies.get("user");
      },
      submitData(data){
          var thiss = this;
          data.UserID = this.userInfo.user_id;
          data.EmployeeID = this.userInfo.employee_id;
          this.axios.post("/v1/employee/educations", data)
          .then(function (response) {
            thiss.$awn.success('Save record successfully')
            thiss.showeducationmodal = false;
            thiss.getEducation();
          },this)
          .catch(function (error) {
              Object.values(error.response.data.errors).forEach(element => {
                  thiss.$awn.warning(element[0])
              });
          });
      },
      updateData(data){
          var thiss = this;
          data.UserID = this.userInfo.user_id;
          data.EmployeeID = this.userInfo.employee_id;
          this.axios.put("/v1/employee/educations/"+data.EmployeeID, data)
          .then(function (response) {
            thiss.$awn.success('Update record successfully')
            thiss.showeducationmodal = false;
            thiss.getEducation();
          },this)
          .catch(function (error) {
              Object.values(error.response.data.errors).forEach(element => {
                  thiss.$awn.warning(element[0])
              });
          });
      },
      async getCourse(){
        var thiss = this;
        this.axios.get("/v1/courses")
        .then(function (response) {
          thiss.courselist = response.data.data.map(item=>{
            return{
              id:item.EducationID,
              name:item.Education,
            }
          })
        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
      },
      async getEducation(){
        var thiss = this;
        this.axios.get("/v1/employee/educations/"+this.userInfo.employee_id)
        .then(function (response) {
        thiss.education_data = response.data.data.educations;
        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
      },
      async editEducationData(data){
        this.educpayload = Object.assign(this.educpayload, data);
        this.showeducationmodal = true;
      },
  }
}
</script>