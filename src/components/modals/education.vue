<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800"
    >
      <v-card>
          <!-- <div class="ml-2 d-flex">
              <v-icon>mdi-information</v-icon> -->
              <v-card-title class="text-h5">
                  <label class="font-bold text-xl text-black">EDUCATION INFO</label>
              </v-card-title>
          <!-- </div> -->
        <hr/>
        <v-card-text>
          <v-form>
              <v-container>
                  <v-row>
                      <v-col cols="12" sm="6">
                          <label class="text-lg text-black">Education</label>
                          <v-text-field
                              placeholder="Education"
                              dense
                              outlined
                              hide-details
                              v-model="payload.Education"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" >
                          <label class="text-lg text-black">Name of school</label>
                          <v-text-field
                              placeholder="Name of school"
                              dense
                              outlined
                              hide-details
                              v-model="payload.NameOfSchool"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" class="pt-0">
                          <label class="text-lg text-black">Basic education/degree/course</label>
                          <v-select
                            :items="courselist"
                            dense
                            outlined
                            hide-details
                            placeholder="Select position"
                            v-model="payload.Course"
                            item-text="name"
                            item-value="id"
                            ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" class="pt-0">
                                    <label class="text-lg text-black">Highest level/unit</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                              v-model="payload.UnitsEarned"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" class="pt-0">
                                    <label class="text-lg text-black">Honor Recieve</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                              v-model="payload.HonorsReceived"
                          ></v-text-field>
                      </v-col>
                      <v-col
                      cols="12"
                      class="pt-0"
                      sm="6"
                      >
                      <label class="text-lg text-black">Year Graduated</label>
                      <v-menu
                          ref="menu_graduated"
                          :close-on-content-click="true"
                          :return-value.sync="payload.YearGraduated"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                      >
                          <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="payload.YearGraduated"
                              label="Date from"
                              append-icon="mdi-calendar"
                              dense
                              outlined
                              v-bind="attrs"
                              hide-details
                              v-on="on"
                          ></v-text-field>
                          </template>
                          <v-date-picker
                              v-model="payload.YearGraduated" no-title scrollable @change="saveDate">
                          </v-date-picker>
                      </v-menu>
                      </v-col>
                      <!-- <v-col cols="12" sm="6" class="pt-0">
                                    <label class="text-lg text-black">Honor</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                              v-model="payload.Hor"
                          ></v-text-field>
                      </v-col>
                       -->
                      <v-col
                      cols="12"
                      class="pt-0"
                      sm="6"
                      >
                      <label class="text-lg text-black">From</label>
                      <v-menu
                          ref="menu"
                          :close-on-content-click="true"
                          :return-value.sync="payload.From"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                      >
                          <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="payload.From"
                              label="Date from"
                              append-icon="mdi-calendar"
                              dense
                              outlined
                              v-bind="attrs"
                              hide-details
                              v-on="on"
                          ></v-text-field>
                          </template>
                          <v-date-picker
                              v-model="payload.From" no-title scrollable @change="saveDate">
                          </v-date-picker>
                      </v-menu>
                      </v-col>
                      <v-col
                      cols="12"
                      sm="6"
                      class="pt-0"
                      >
                      <label class="text-lg text-black">To</label>
                      <v-menu
                          ref="menu2"
                          :close-on-content-click="true"
                          :return-value.sync="payload.To"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                      >
                          <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="payload.To"
                              label="Date to"
                              append-icon="mdi-calendar"
                              dense
                              outlined
                              v-bind="attrs"
                              hide-details
                              v-on="on"
                          ></v-text-field>
                          </template>
                          <v-date-picker
                              v-model="payload.To" no-title scrollable @change="saveDate">
                          </v-date-picker>
                      </v-menu>
                      </v-col>
                  </v-row>
              </v-container>
          </v-form>
          <hr/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary darken-1"
            depressed
            @click="submitData"
            :loading="loading"
          >
            {{payload.EmployeeID ? 'Update':'save'}}
          </v-btn>
          <v-btn
            color="primary darken-1"
            depressed
            @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
data () {
  return {
    dialog: false,
    datefrom: null,
    dateto: null,
    menu: false,
    modal: false,
    menu2: false,
    loading: false,
    payload:{
      Education:null,
      NameOfSchool:null,
      Course:null,
      From:null,
      To:null,
      UnitsEarned:null,
      YearGraduated:null,
      HonorsReceived:null,
    }
  }
},
props: {
    courselist: {
        type: Array,
        default: [],
    },
    educpayload: {
        type: Array,
        default: [],
    },
    showdialog: {
        type: Boolean,
        default: false,
    },
},
created(){
},
methods:{
  closeDialog(){
      this.dialog = false;
      this.$emit('closedialog')
  },
  saveDate(){
      this.$refs.menu.save(this.payload.From)
      this.$refs.menu2.save(this.payload.To)
      this.$refs.menu_graduated.save(this.payload.YearGraduated)
  },
  submitData(){
    if(!this.payload.EmployeeID){
      this.$emit('submitData',this.payload)
    }else{
      this.$emit('updateData',this.payload)
    }
    this.loading = true;
  },
 
},
watch: {
      showdialog: {
          handler(val) {
             this.dialog = val;
          },
      },
      educpayload: {
          handler(val) {
             this.payload = val;
          },
      },
  },
  
}
</script>