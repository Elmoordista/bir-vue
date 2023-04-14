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
                              placeholder="Education"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" >
                          <label class="text-base text-black">Occupation</label>
                          <v-text-field
                              placeholder="Name of school"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4">
                                    <label class="text-base text-black">Employer/Businees Name</label>
                          <v-text-field
                              placeholder="Degree"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Contact No.</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Father's Name</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Mother Maiden Name</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Emergency Contact:</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Relationship</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" class="pt-0">
                                    <label class="text-base text-black">Contact No.</label>
                          <v-text-field
                              placeholder="Your landing page"
                              dense
                              outlined
                              hide-details
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="8" class="pt-0">
                          <label class="text-base text-black">Add Children</label>
                          <div class="flex justify-lg-space-around gap-5">
                           
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                            
                          </div>
                      </v-col>
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
                                  ></v-text-field>
                                </td>
                                <td><v-text-field
                                      placeholder="Your landing page"
                                      dense
                                      solo
                                      hide-details
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-icon size="25" color="green" @click="add_children = true">mdi-content-save</v-icon>
                                  |
                                  <v-icon size="25" color="red" @click="add_children = false">mdi-close-circle</v-icon>
                                </td>
                              </tr>
                              <tr
                                v-for="item in background_info"
                                :key="item.name"
                              >
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
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
  }
},
props: {
      showdialog: {
          type: Boolean,
          default: false,
      },
  },
methods:{
  closeDialog(){
      this.dialog = false;
      this.$emit('closedialog')
  },
  saveDate(){
      this.$refs.menu.save(this.payload.datefrom)
      this.$refs.menu2.save(this.payload.dateto)
      this.$refs.menu_graduated.save(this.payload.year_graduate)
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