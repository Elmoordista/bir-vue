<template>
    <div>
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
                    :items="desserts"
                    :items-per-page="6"
                ></v-data-table>
            </div>
            
            <hr class="my-5 border-2"/>
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
                ></v-data-table>
            </div>
        </v-card>
        <education-modal @closedialog="closedialog" :showdialog="showeducationmodal"></education-modal>
        <eligibility-modal @closedialog="closedialog" :showdialog="showeligibilitymodal"></eligibility-modal>
    </div>
</template>

<script>
  import EducationModal from  '@/components/modals/education.vue';
  import EligibilityModal from  '@/components/modals/eligibility.vue';
  export default {
    components:{
        EducationModal,
        EligibilityModal,
    },
    data () {
      return {
        search:null,
        showeducationmodal:false,
        showeligibilitymodal:false,
        header_education: [
          {
            text: 'EDUCATION',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'NAME OF SCHOOL', value: 'calories' },
          { text: 'BASIC EDUCATION/DEGREE/COURSE', value: 'fat' },
          { text: 'FROM', value: 'carbs' },
          { text: 'TO', value: 'protein' },
          { text: 'HIGHEST LEVEL/UNIT EARNED', value: 'iron' },
          { text: 'YEAR GRADUATED', value: 'iron' },
          { text: 'HONOR', value: 'iron' },
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
      }
    },
    methods:{
        closedialog(){
            this.showeducationmodal = false;
            this.showeligibilitymodal = false;
        }
    }
  }
</script>