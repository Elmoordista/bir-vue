<template>
    <v-row justify="center">
        <v-card>
            <!-- <div class="ml-2 d-flex">
                <v-icon>mdi-information</v-icon> -->
                <v-card-title class="text-h5">
                    <label class="font-bold text-xl text-black">Health Information</label>
                </v-card-title>
            <!-- </div> -->
          <hr/>
          <v-card-text>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="6" sm="6" class="pt-0">
                          <div class="flex justify-lg-space-between mb-2 align-center">
                            <label class="text-base text-black">Allergies</label>
                            <v-btn
                              color="primary darken-1"
                              depressed
                              @click="add_allergies =! add_allergies"
                            >
                              {{add_allergies ? 'Close':'Add'}}
                            </v-btn>
                          </div>
                          <div id="table">
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Type of Allergies
                                  </th>
                                  <th class="text-left">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="add_allergies">
                                  <td>
                                      <v-text-field
                                        placeholder="Type your allergy"
                                        dense
                                        solo
                                        hide-details
                                        v-model="allergy.Allergies"
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-icon size="25" color="green" @click="saveAllergies">mdi-content-save</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="add_allergies = false">mdi-close-circle</v-icon>
                                  </td>
                                </tr>
                                <tr
                                  v-for="item in allergy_data"
                                  :key="item.AllergiesID"
                                >
                                  <td>{{ item.Allergies }}</td>
                                  <td>
                                    <v-icon size="25" color="green" @click="editAllergies(item)">mdi-pencil-circle</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="deleteAllergy(item)">mdi-delete-circle</v-icon>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                          <div class="flex justify-lg-space-between mb-2 align-center">
                            <label class="text-base text-black">Vaccine</label>
                            <v-btn
                              color="primary darken-1"
                              depressed
                              @click="add_vaccine =! add_vaccine"
                            >
                              {{ !add_vaccine ? 'Add' : 'Close' }}
                            </v-btn>
                          </div>
                          <div id="table">
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Type of Vaccine
                                  </th>
                                  <th class="text-left">
                                    Vacination Date
                                  </th>
                                  <th class="text-left">
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="add_vaccine">
                                  <td>
                                      <v-text-field
                                        placeholder="Vacine type"
                                        dense
                                        solo
                                        hide-details
                                        v-model="vacine.TypeOfVaccine"
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-menu
                                    ref="DateOfVaccine"
                                    :close-on-content-click="true"
                                    :return-value.sync="vacine.DateOfVaccine"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="vacine.DateOfVaccine"
                                        append-icon="mdi-calendar"
                                        placeholder="select date"
                                        dense
                                        solo
                                        hide-details
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="vacine.DateOfVaccine" no-title scrollable @change="saveDate">
                                    </v-date-picker>
                                </v-menu>
                                  </td>
                                  <td>
                                    <v-icon size="25" color="green" @click="saveVacine">mdi-content-save</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="add_vaccine = false">mdi-close-circle</v-icon>
                                  </td>
                                </tr>
                                <tr
                                  v-for="item in vacine_data"
                                  :key="item.name"
                                >
                                  <td>{{ item.TypeOfVaccine }}</td>
                                  <td>{{ item.DateOfVaccine }}</td>
                                  <td>
                                    <v-icon size="25" color="green" @click="editVacine(item)">mdi-pencil-circle</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="deleteVacine(item)">mdi-delete-circle</v-icon>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                          <div class="flex justify-lg-space-between mb-2 align-center">
                            <label class="text-base text-black">Medical History</label>
                            <v-btn
                              color="primary darken-1"
                              depressed
                              @click="add_med_history =! add_med_history"
                            >
                              {{add_med_history ? 'Close':'Add'}}
                            </v-btn>
                          </div>
                          <div id="table">
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Medical
                                  </th>
                                  <th class="text-left">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="add_med_history">
                                  <td>
                                      <v-text-field
                                        placeholder="Type here your medical"
                                        dense
                                        solo
                                        hide-details
                                        v-model="medical.Medical"
                                    ></v-text-field>
                                  </td>

                                  <td>
                                    <v-icon size="25" color="green" @click="saveMedical">mdi-content-save</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="add_med_history = false">mdi-close-circle</v-icon>
                                  </td>
                                </tr>
                                <tr
                                  v-for="item in medical_data"
                                  :key="item.name"
                                >
                                  <td>{{ item.Medical }}</td>
                                  <td>
                                    <v-icon size="25" color="green" @click="editMedical(item)">mdi-pencil-circle</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="deleteMedical(item)">mdi-delete-circle</v-icon>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                          <div class="flex justify-lg-space-between mb-2 align-center">
                            <label class="text-base text-black">Medical Prescription</label>
                            <v-btn
                              color="primary darken-1"
                              depressed
                              @click="add_med_pres =! add_med_pres"
                            >
                              {{!add_med_pres ? 'Add' : 'Close'}}
                            </v-btn>
                          </div>
                          <div id="table">
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Medical Prescription
                                  </th>
                                  <th class="text-left">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="add_med_pres">
                                  <td>
                                      <v-text-field
                                        placeholder="Type here your Medical Prescription"
                                        dense
                                        solo
                                        hide-details
                                        v-model="medpres.MedicalPrescription"
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-icon size="25" color="green" @click="saveMedPres">mdi-content-save</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="add_med_pres = false">mdi-close-circle</v-icon>
                                  </td>
                                </tr>
                                <tr
                                  v-for="item in medpres_data"
                                  :key="item.MedicalPrescriptionID"
                                >
                                  <td>{{ item.MedicalPrescription }}</td>
                                  <td>
                                    <v-icon size="25" color="green" @click="editMedPres(item)">mdi-pencil-circle</v-icon>
                                    |
                                    <v-icon size="25" color="red" @click="deleteMedPres(item)">mdi-delete-circle</v-icon>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                          </div>
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
            >
              Save Record
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-row>
  </template>
  
  <script>
  import VueCookies from "vue-cookies";
  export default {
  data () {
    return {
      dialog: false,
      add_allergies: false,
      add_vaccine: false,
      add_med_history: false,
      add_med_pres: false,
      datefrom: null,
      dateto: null,
      menu: false,
      modal: false,
      menu2: false,
      payload:{
        education:null,
        name_of_school:null,
        degree:null,
        highest_level:null,
        honor:null,
        year_graduate:null,
        datefrom:null,
        dateto:null,
      },
      background_info: [],
      userInfo: [],
      vacine: {
          TypeOfVaccine : null,
          DateOfVaccine:null,
      },
      allergy: {
        Allergies : null,
      },
      medical: {
        Medical : null,
      },
      medpres: {
        MedicalPrescription : null,
      },
      allergy_data: [],
      vacine_data: [],
      medical_data: [],
      medpres_data: [],
    }
  },
  props: {
        showdialog: {
            type: Boolean,
            default: false,
        },
    },
  created(){
    this.initialized();
    this.getVacine();
    this.getAllergies();
    this.getMedical();
    this.getMedPres();
  },
  methods:{
    async initialized(){
        this.userInfo = VueCookies.get("user");
    },
    closeDialog(){
        this.dialog = false;
        this.$emit('closedialog')
    },
    saveAllergies() {
        this.loading = true;
        var thiss = this;
        if(!this.allergy.AllergiesID){
          this.allergy.EmployeeID = this.userInfo.employee_id;
          this.axios.post("/v1/employee/allergies", this.allergy)
          .then(function (response) {
            thiss.getAllergies()
            thiss.$awn.success('Save successfully')
            thiss.add_allergies = false;
          },this)
          .catch(function (error) {
              console.log(error.response.data.errors);
              Object.values(error.response.data.errors).forEach(element => {
                  thiss.$awn.warning(element[0])
              });
          });
        }
        else{
          this.axios.put("/v1/employee/allergies/"+this.allergy.AllergiesID, this.allergy)
          .then(function (response) {
            thiss.getAllergies()
            thiss.add_allergies = false;
            thiss.$awn.success('Update successfully')
          },this)
          .catch(function (error) {
              Object.values(error.response.data.errors).forEach(element => {
                  thiss.$awn.warning(element[0])
              });
          });
        }

    },
 
    getAllergies() {
        var thiss = this;
        this.axios.get("/v1/employee/allergies")
        .then(function (response) {
          thiss.allergy_data = response.data.data.employee.allergies;
        },this)
        .catch(function (error) {
            console.log(error.response.data.errors);
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
    },
    editAllergies(data) {
      this.allergy = Object.assign(this.allergy,data);
      this.add_allergies = true
    },
    deleteAllergy(data) {
      var thiss = this;
        this.axios.delete("/v1/employee/allergies/"+data.AllergiesID)
        .then(function (response) {
          thiss.$awn.success('Delete successfully')
          thiss.getAllergies()
        },this)
        .catch(function (error) {
            thiss.getVacine()
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
    },

    //vacine function
    saveVacine() {
        this.loading = true;
        var thiss = this;
        if(!this.vacine.VaccineID){
          this.vacine.EmployeeID = this.userInfo.employee_id;
          this.axios.post("/v1/employee/vaccines", this.vacine)
          .then(function (response) {
            thiss.getVacine()
            thiss.$awn.success('Save successfully')
            thiss.add_vaccine = false;
          },this)
          .catch(function (error) {
              console.log(error.response.data.errors);
              Object.values(error.response.data.errors).forEach(element => {
                  thiss.$awn.warning(element[0])
              });
          });
        }
        else{
          this.axios.put("/v1/employee/vaccines/"+this.vacine.VaccineID, this.vacine)
          .then(function (response) {
            thiss.getVacine()
            thiss.add_vaccine = false;
            thiss.$awn.success('Update successfully')
          },this)
          .catch(function (error) {
              Object.values(error.response.data.errors).forEach(element => {
                  thiss.$awn.warning(element[0])
              });
          });
        }

    },
 
    getVacine() {
        var thiss = this;
        this.axios.get("/v1/employee/vaccines")
        .then(function (response) {
          thiss.vacine_data = response.data.data;
        },this)
        .catch(function (error) {
            console.log(error.response.data.errors);
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
    },
    editVacine(data) {
      this.vacine = Object.assign(this.vacine,data);
      this.add_vaccine = true
    },
    deleteVacine(data) {
      var thiss = this;
        this.axios.delete("/v1/employee/vaccines/"+data.VaccineID)
        .then(function (response) {
          thiss.$awn.success('Delete successfully')
        },this)
        .catch(function (error) {
            thiss.getVacine()
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
    },
    saveDate(){
        this.$refs.DateOfVaccine.save(this.vacine.DateOfVaccine)
    },


    //medical function
    saveMedical() {
      this.loading = true;
      var thiss = this;
      if(!this.medical.MedicalID){
        this.medical.EmployeeID = this.userInfo.employee_id;
        this.axios.post("/v1/employee/medicals", this.medical)
        .then(function (response) {
          thiss.getMedical()
          thiss.$awn.success('Save successfully')
          thiss.add_med_history = false;
        },this)
        .catch(function (error) {
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
      }
      else{
        this.axios.put("/v1/employee/medicals/"+this.medical.MedicalID, this.medical)
        .then(function (response) {
          thiss.getMedical()
          thiss.add_med_history = false;
          thiss.$awn.success('Update successfully')
        },this)
        .catch(function (error) {
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
      }

  },

  getMedical() {
      var thiss = this;
      this.axios.get("/v1/employee/medicals")
      .then(function (response) {
        thiss.medical_data = response.data.data.employee.medicals;
      },this)
      .catch(function (error) {
          console.log(error.response.data.errors);
          Object.values(error.response.data.errors).forEach(element => {
              thiss.$awn.warning(element[0])
          });
      });
  },
  editMedical(data) {
    this.medical = Object.assign(this.medical,data);
    this.add_med_history = true
  },
  deleteMedical(data) {
    var thiss = this;
      this.axios.delete("/v1/employee/medicals/"+data.MedicalID)
      .then(function (response) {
        thiss.$awn.success('Delete successfully')
      },this)
      .catch(function (error) {
          thiss.getMedical()
          Object.values(error.response.data.errors).forEach(element => {
              thiss.$awn.warning(element[0])
          });
      });
  },

   //medical prescription function
   saveMedPres() {
      this.loading = true;
      var thiss = this;
      if(!this.medpres.MedicalPrescriptionID){
        this.medpres.EmployeeID = this.userInfo.employee_id;
        this.axios.post("/v1/employee/medicalprescriptions", this.medpres)
        .then(function (response) {
          thiss.getMedPres()
          thiss.$awn.success('Save successfully')
          thiss.add_med_pres = false;
        },this)
        .catch(function (error) {
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
      }
      else{
        this.axios.put("/v1/employee/medicalprescriptions/"+this.medpres.MedicalPrescriptionID, this.medpres)
        .then(function (response) {
          thiss.getMedPres()
          thiss.add_med_pres = false;
          thiss.$awn.success('Update successfully')
        },this)
        .catch(function (error) {
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
      }

  },

  getMedPres() {
      var thiss = this;
      this.axios.get("/v1/employee/medicalprescriptions")
      .then(function (response) {
        thiss.medpres_data = response.data.data.employee.medicalPrescriptions;
      },this)
      .catch(function (error) {
          Object.values(error.response.data.errors).forEach(element => {
              thiss.$awn.warning(element[0])
          });
      });
  },
  editMedPres(data) {
    this.medpres = Object.assign(this.medpres,data);
    this.add_med_pres = true
  },
  deleteMedPres(data) {
    var thiss = this;
      this.axios.delete("/v1/employee/medicalprescriptions/"+data.MedicalPrescriptionID)
      .then(function (response) {
        thiss.getMedPres()
        thiss.$awn.success('Delete successfully')
      },this)
      .catch(function (error) {
          thiss.getMedical()
          Object.values(error.response.data.errors).forEach(element => {
              thiss.$awn.warning(element[0])
          });
      });
  },
    saveDate(){
        this.$refs.DateOfVaccine.save(this.vacine.DateOfVaccine)
    },
  },
  watch: {
        showdialog: {
            handler(val) {
               this.dialog = val;
            },
        },
    },
    
  }
  </script>