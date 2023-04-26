<template>
    <v-row justify="center">
        <v-card>
            <!-- <div class="ml-2 d-flex">
                <v-icon>mdi-information</v-icon> -->
                <v-card-title class="text-h5">
                    <label class="text-xxl text-black">Personal Information</label>
                </v-card-title>
            <!-- </div> -->
          <hr/>
          <v-card-text class="personal-wrapper">
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="8" id="infor-wrapper">
                            <v-col cols="12" sm="4">
                                <label class="text-base text-black">Employee No.</label>
                                <v-text-field
                                    placeholder="Type employee no."
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.EmployeeNo"
                                    ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" >
                                <label class="text-base text-black">Surname *</label>
                                <v-text-field
                                    placeholder="Type surname"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.Surname"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <label class="text-base text-black">First name *</label>
                                <v-text-field
                                    placeholder="Type firstname"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.FirstName"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                        <label class="text-base text-black">Middle Name *</label>
                                <v-text-field
                                    placeholder="Type middle name"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.MiddleName"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                        <label class="text-base text-black">Suffix</label>
                                <v-select
                                :items="suffixes"
                                dense
                                outlined
                                hide-details
                                placeholder="Select suffix"
                                v-model="payload.NameExtension"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Sex *</label>
                                <v-select
                                :items="gender"
                                dense
                                outlined
                                hide-details
                                placeholder="Select Gender"
                                v-model="payload.Sex"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Age *</label>
                                <v-text-field
                                    placeholder="Type age"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.Age"
                                ></v-text-field>
                                
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Date of birth *</label>
                                <v-menu
                                    ref="picker_dob"
                                    :close-on-content-click="true"
                                    :return-value.sync="payload.DateOfBirth"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="payload.DateOfBirth"
                                        append-icon="mdi-calendar"
                                        placeholder="date of birth"
                                        dense
                                        outlined
                                        hide-details
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="payload.DateOfBirth" no-title scrollable @change="saveDate">
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                        <label class="text-base text-black">Place of birth *</label>
                                <v-text-field
                                    placeholder="Type place of birth"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.PlaceOfBirth"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                        <label class="text-base text-black">Civil Status *</label>
                                <v-text-field
                                    placeholder="Your landing page"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.CivilStatus"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Religion *</label>
                                <v-text-field
                                    placeholder="Type religion"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.Religion"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Height (m) *</label>
                                <v-text-field
                                    placeholder="Type height"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.Height"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Weight (kg)</label>
                                <v-text-field
                                    placeholder="Type weight"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.Weight"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Blood type *</label>
                                <v-text-field
                                    placeholder="Type blood type"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.BloodType"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Contact No. *</label>
                                <v-text-field
                                    placeholder="Type contact number"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.ContactNo"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Citizenship *</label>
                                <v-text-field
                                    placeholder="Type citizenship"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.Citizenship"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Residential Address *</label>
                                <v-text-field
                                    placeholder="Type residentail address"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.ResidentialAddress"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Permanent Address *</label>
                                <v-text-field
                                    placeholder="Type permanent address"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    v-model="payload.PermanentAddress"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Date Entered BIR</label>
                                <v-menu
                                    ref="DateEnteredBIR"
                                    :close-on-content-click="true"
                                    :return-value.sync="payload.DateEnteredBIR"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="payload.DateEnteredBIR"
                                        append-icon="mdi-calendar"
                                        placeholder="select date"
                                        dense
                                        outlined
                                        hide-details
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="payload.DateEnteredBIR" no-title scrollable @change="saveDate">
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                           
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Date assigned in work unit</label>
                                <v-menu
                                    ref="DateAssigned"
                                    :close-on-content-click="true"
                                    :return-value.sync="payload.DateAssigned"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="payload.DateAssigned"
                                        append-icon="mdi-calendar"
                                        placeholder="select date"
                                        dense
                                        outlined
                                        hide-details
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="payload.DateAssigned" no-title scrollable @change="saveDate">
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Date last promoted</label>
                                <v-menu
                                    ref="DateLastPromoted"
                                    :close-on-content-click="true"
                                    :return-value.sync="payload.DateLastPromoted"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="payload.DateLastPromoted"
                                        append-icon="mdi-calendar"
                                        placeholder="select date"
                                        dense
                                        outlined
                                        hide-details
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="payload.DateLastPromoted" no-title scrollable @change="saveDate">
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                           
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Tin no.</label>
                                <v-text-field
                                    placeholder="Type you tin number"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    v-model="payload.TIN"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">GSIS Bp No.</label>
                                <v-text-field
                                    placeholder="Type your GSIS number"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    v-model="payload.GSIS"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Pag-ibig No.</label>
                                <v-text-field
                                    placeholder="Type your pagibig number"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    v-model="payload.PagIbig"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Philhealth No.</label>
                                <v-text-field
                                    placeholder="type your philhealth number"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    v-model="payload.Philhealth"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">SSS No.</label>
                                <v-text-field
                                    placeholder="Type your SSS number"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    v-model="payload.SSS"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Landbank Payroll Account.</label>
                                <v-text-field
                                    placeholder="Type your Landbank account"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    v-model="payload.LandBankAccount"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Current Office Assestment *</label>
                                <v-select
                                    :items="offices"
                                    item-value="id"
                                    item-text="name"
                                    dense
                                    outlined
                                    hide-details
                                    placeholder="Select office"
                                    v-model="payload.CurrentOfficeAssignment"
                                    ></v-select>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">BIR email address</label>
                                <v-text-field
                                    placeholder="type here"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    append-icon="mdi-email"
                                    elevation="2"
                                    v-model="payload.BIREmailAddress"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Alternative email address *</label>
                                <v-text-field
                                    placeholder="type here"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    elevation="2"
                                    append-icon="mdi-email"
                                    v-model="payload.AlternateEmailAddress"
                                ></v-text-field>
                            </v-col>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-col cols="12" sm="12" class="pt-0">
                                <div class="px-20 pt-5 ma-auto flex flex-column gap-5">
                                    <v-img
                                        class="m-auto"
                                        width="100%"
                                        height="200"
                                        src="https://picsum.photos/510/300?random"
                                        aspect-ratio="1.7"
                                    ></v-img>
                                    <v-btn
                                        color="primary"
                                        class="ma-auto white--text w-full">
                                        <v-icon left dark>
                                            mdi-upload
                                        </v-icon>
                                        Upload Photo
                                    </v-btn>

                                </div>
                            </v-col>
                            
                            <!-- <v-col cols="12" sm="12">
                                <label class="text-base text-black">Email address</label>
                                <v-text-field
                                    placeholder="Your landing page"
                                    dense
                                    outlined
                                    clearable
                                    append-icon="mdi-email"
                                    hide-details
                                    elevation="2"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <label class="text-base text-black">Password</label>
                                <v-text-field
                                    placeholder="Your landing page"
                                    dense
                                    outlined
                                    clearable
                                    hide-details
                                    append-icon="mdi-eye"
                                    elevation="2"
                                ></v-text-field>
                            </v-col> -->
                            <v-col cols="12" sm="12" class="pt-0">
                                <v-checkbox
                                v-model="payload.isFromthisRegion"
                                label="FROM THIS REGION"
                                color="#000"
                                hide-details
                                ></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <label class="text-base text-black">Position *</label>
                                    <v-select
                                    :items="positions"
                                    dense
                                    outlined
                                    hide-details
                                    placeholder="Select position"
                                    v-model="payload.Position"
                                    item-text="name"
                                    item-value="id"
                                    ></v-select>
                            </v-col>
                            <v-col cols="12" sm="12" class="pt-0">
                                <label class="text-base text-black">Item number</label>
                                    <v-select
                                    :items="suffixes"
                                    dense
                                    outlined
                                    hide-details
                                    placeholder="Select item number"
                                    v-model="payload.NameExtension"
                                    ></v-select>
                            </v-col>
                            <v-col cols="12" sm="12" class="pt-0">
                                <label class="text-base text-black">Office authorized</label>
                                    <v-select
                                    :items="suffixes"
                                    dense
                                    outlined
                                    hide-details
                                    placeholder="Select office"
                                    v-model="payload.offic"
                                    ></v-select>
                            </v-col>
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
              :loading="loading"
              v-if="!this.payload.created_at"
              @click="_submit"
            >
            Save Record
              
            </v-btn>
            <v-btn v-else
              color="primary darken-1"
              depressed
              :loading="loading"
              @click="updateRecord"
            >
             Update Record
              
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
      add_children: false,
      datefrom: null,
      dateto: null,
      menu: false,
      loading: true,
      modal: false,
      menu2: false,
      radioGroup: 1,
      payload:{
        EmployeeID :123,
        FirstName:null,
        MiddleName:null,
        Surname:null,
        NameExtension:null,
        Sex:null,
        Age:null,
        DateOfBirth	:null,
        PlaceOfBirth:null,
        CivilStatus:null,
        Religion:null,
        Height:null,
        Weight:null,
        BloodType:null,
        ContactNo:null,
        Citizenship:null,
        Position :null,
        DateEnteredBIR :null,
        DateAssigned :null,
        DateLastPromoted :null,
        ResidentialAddress :null,
        PermanentAddress :null,
        BIREmailAddress :null,
        AlternateEmailAddress :null,
        TIN :null,
        GSIS :null,
        PagIbig :null,
        Philhealth :null,
        SSS :null,
        LandBankAccount :null,
        Comordibity :null,
        SpecifyComordibity :null,
        ImagePic :null,
        EmployeeNo :null,
        CurrentOfficeAssignment  :null,
        PositionRemarks  :null,
        isFromthisRegion  :null,
        isValidated  :null,
        isFromthisRegion:0,
      },
      gender: ['Male', 'Female'],
      suffixes: ['Jr', 'Sr', 'I', 'II','III'],
      background_info: [],
      offices: [],
      positions: [],
      sector: [
        'Single Living Sector'
      ],
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
    this.getOffice();
    this.getpositions();
    this.getUser();
},
  methods:{
    async initialized(){
        this.userInfo = VueCookies.get("user");
    },
    closeDialog(){
        this.dialog = false;
        this.$emit('closedialog')
    },
    _submit() {
        this.loading = true;
        var thiss = this;
        this.payload.UserID = this.userInfo.user_id;
        this.axios.post("/v1/employee/personal-info", this.payload)
        .then(function (response) {
          thiss.loading = false;
          thiss.$awn.success('Save record successfully')
        },this)
        .catch(function (error) {
            console.log(error.response.data.errors);
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
    },
    updateRecord() {
        this.loading = true;
        var thiss = this;
        this.payload.UserID = this.userInfo.user_id;
        this.axios.put("/v1/employee/personal-info/"+this.payload.UserID, this.payload)
        .then(function (response) {
         thiss.loading = false;
          thiss.$awn.success('Update record successfully')
        },this)
        .catch(function (error) {
            Object.values(error.response.data.errors).forEach(element => {
                thiss.$awn.warning(element[0])
            });
        });
    },
    saveDate(){
        this.$refs.picker_dob.save(this.payload.DateOfBirth)
        this.$refs.DateEnteredBIR.save(this.payload.DateEnteredBIR)
        this.$refs.DateAssigned.save(this.payload.DateAssigned)
        this.$refs.DateLastPromoted.save(this.payload.DateLastPromoted)
    },
    getOffice(){
        var thiss = this;
        this.axios.get("/v1/offices")
        .then(function (response) {
            console.log(response,'resp')
            thiss.offices = response.data.data.map(item=>{
                return{
                    id:item.OfficeID,
                    name:item.Office,
                }
           })
        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
    },
    getpositions(){
        var thiss = this;
        this.axios.get("/v1/positions")
        .then(function (response) {
            thiss.positions = response.data.data.positions.map(item=>{
                return{
                    id:item.PositionID,
                    name:item.Position,
                }
           })
        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
    },
    getUser(){
        var thiss = this;
        this.axios.get("/v1/employee/personal-info/"+this.userInfo.user_id)
        .then(function (response) {
            thiss.payload = Object.assign(thiss.payload,response.data.data.employee.personalInfo);
            thiss.loading = false
        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
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