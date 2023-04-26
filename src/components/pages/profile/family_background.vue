<template>
  <v-row justify="center">
      <v-card>
          <!-- <div class="ml-2 d-flex">
              <v-icon>mdi-information</v-icon> -->
              <v-card-title class="text-h5">
                  <label class="font-bold text-xl text-black">FAMILY BACKGORUND</label>
              </v-card-title>
          <!-- </div> -->
        <hr/>
        <v-card-text>
          <v-form>
              <v-container>
                  <v-row>
                      <v-col cols="12" sm="4">
                          <label class="text-base text-black">Spouse Name</label>
                          <v-text-field
                              placeholder="type spouse name"
                              dense
                              outlined
                              hide-details
                              v-model="payload.SpouseName"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" >
                          <label class="text-base text-black">Occupation</label>
                          <v-text-field
                              placeholder="Type occupation"
                              dense
                              outlined
                              hide-details
                              v-model="payload.Occupation"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4">
                                    <label class="text-base text-black">Employer/Businees Name</label>
                          <v-text-field
                              placeholder="Type business name"
                              dense
                              outlined
                              hide-details
                              v-model="payload.BusinessAddress"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Contact No.</label>
                          <v-text-field
                              placeholder="Type contact number"
                              dense
                              outlined
                              hide-details
                              v-model="payload.ContactNumber"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Father's Name</label>
                          <v-text-field
                              placeholder="Type father's name"
                              dense
                              outlined
                              hide-details
                              v-model="payload.FathersName"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Mother Maiden Name</label>
                          <v-text-field
                              placeholder="Type mother maiden name"
                              dense
                              outlined
                              hide-details
                              v-model="payload.MothersMaidenName"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Emergency Contact:</label>
                          <v-text-field
                              placeholder="Type emergency contact no."
                              dense
                              outlined
                              hide-details
                              v-model="payload.EmergencyContact"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Relationship</label>
                          <v-text-field
                              placeholder="Type your relation"
                              dense
                              outlined
                              hide-details
                              v-model="payload.Relationship"
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Contact No.</label>
                          <v-text-field
                              placeholder="Type contact no."
                              dense
                              outlined
                              hide-details
                              v-model="payload.ContactNo"
                          ></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12" sm="8" class="pt-0">
                          <label class="text-base text-black">Add Children</label>
                          <div class="flex justify-lg-space-around gap-5">
                           
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                            
                          </div>
                      </v-col> -->
                      <v-col cols="12" sm="8" class="pt-0">
                        <div class="flex justify-lg-space-between mb-2 align-center">
                          <label class="text-base text-black">Children Info</label>
                          <v-btn
                            color="primary darken-1"
                            depressed
                            @click="add_children = true"
                          >
                            Add
                          </v-btn>
                        </div>
                        <div id="table">
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">
                                  Name
                                </th>
                                <th class="text-left">
                                  Date of birth
                                </th>
                                <th class="text-left">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-if="add_children">
                                <td>
                                    <v-text-field
                                      placeholder="Your landing page"
                                      dense
                                      solo
                                      hide-details
                                      v-model="childrenInfo.ChildrenName"
                                  ></v-text-field>
                                </td>
                                <td><v-menu
                                    ref="DateOfBirth"
                                    :close-on-content-click="true"
                                    :return-value.sync="childrenInfo.DateOfBirth"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="childrenInfo.DateOfBirth"
                                        append-icon="mdi-calendar"
                                        placeholder="date of birth"
                                        dense
                                        hide-details
                                        solo
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="childrenInfo.DateOfBirth" no-title scrollable @change="saveDate">
                                    </v-date-picker>
                                </v-menu>
                                </td>
                                <td>
                                  <v-icon size="25" color="green" @click="saveChildren">mdi-content-save</v-icon>
                                  |
                                  <v-icon size="25" color="red" @click="add_children = false, childrenInfo= []">mdi-close-circle</v-icon>
                                </td>
                              </tr>
                              <tr
                                v-for="item in childrenlist"
                                :key="item.ChildrenID"
                              >
                                <td>{{ item.ChildrenName }}</td>
                                <td>{{ convertDate(item.DateOfBirth) }}</td>
                                <td>
                                  <v-icon size="25" color="green" @click="editChild(item)">mdi-pencil-circle</v-icon>
                                  |
                                  <v-icon size="25" color="red" @click="deleteChildren(item)" >mdi-delete-circle</v-icon>
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
            depressedfamil
            @click="_submit"
            :loading = "loading"
          >
            Save Record
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-row>
</template>

<script>
import VueCookies from "vue-cookies";
import moment from "moment";
export default {
data () {
  return {
    dialog: false,
    add_children: false,
    datefrom: null,
    dateto: null,
    menu: false,
    modal: false,
    menu2: false,
    payload:{
      FamilyBackgroundID:null,
      EmployeeID:null,
      SpouseName:null,
      Occupation:null,
      BusinessAddress:null,
      ContactNumber:null,
      FathersName:null,
      MothersMaidenName:null,
      EmergencyContact:null,
      Relationship:null,
      ContactNo:null,
      ContactNo:null,
    },
    childrenInfo:{
      ChildrenName:null,
      DateOfBirth:null,
    },
    childrenlist: [],
    userInfo: [],
    loading: false,
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
    this.getChildren();
},
mounted(){
    this.getRecord();
},
methods:{
  closeDialog(){
      this.dialog = false;
      this.$emit('closedialog')
  },
  convertDate(date){
   return moment(date).format("YYYY MMM DD")
  },
  editChild(data){
      this.childrenInfo = Object.assign(this.childrenInfo,data);
      this.childrenInfo['DateOfBirth'] = moment(data['DateOfBirth']).format("YYYY-MM-DD");
      this.add_children = true;
  },
  async initialized(){
        this.userInfo = VueCookies.get("user");
        console.log(this.userInfo);
  },
  _submit() {
      this.loading = true;
      var thiss = this;
      this.payload.UserID = this.userInfo.user_id;
      this.axios.post("/v1/employee/family", this.payload)
      .then(function (response) {
        thiss.loading = false;
        thiss.$awn.success('Save record successfully')
      },this)
      .catch(function (error) {
          Object.values(error.response.data.errors).forEach(element => {
              thiss.$awn.warning(element[0])
          });
      });
  },
  saveDate(){
      this.$refs.DateOfBirth.save(this.childrenInfo.DateOfBirth)
  },
  saveChildren(){
    this.loading = true;
    var thiss = this;
    if(!this.childrenInfo.ChildrenID){
      this.childrenInfo.EmployeeID = this.userInfo.employee_id;
      this.childrenInfo.UserID = this.userInfo.user_id;
      this.axios.post("/v1/employee/children", this.childrenInfo)
      .then(function (response) {
        thiss.add_children = false;
        thiss.getChildren()
        thiss.$awn.success('Save record successfully')
      },this)
      .catch(function (error) {
        Object.values(error.response.data.errors).forEach(element => {
          thiss.$awn.warning(element[0])
        });
      });
    }
    else{
      this.axios.put("/v1/employee/children/"+this.childrenInfo.ChildrenID, this.childrenInfo)
      .then(function (response) {
        thiss.add_children = false;
        thiss.getChildren()
        thiss.$awn.success('Update children record successfully')
      },this)
      .catch(function (error) {
        console.log(error)
      });
    }
  },
  getRecord(){
        var thiss = this;
        this.axios.get("/v1/employee/family/"+this.userInfo.user_id)
        .then(function (response) {
            thiss.payload = Object.assign(thiss.payload,response.data.data.employee.familyBackground[0]);
            thiss.loading = false
        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
    },
  getChildren(){
        var thiss = this;
        this.axios.get("/v1/employee/children")
        .then(function (response) {

          thiss.childrenlist = response.data.data.employee.children

        },this)
        .catch(function (error) {
            console.log(error,'errors');
        });
    },
  deleteChildren(data){
        var thiss = this;
        this.axios.delete("/v1/employee/children/"+data.ChildrenID)
        .then(function (response) {
          thiss.getChildren()
          thiss.$awn.success('Delete children successfully')
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