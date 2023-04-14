<template>
    <v-row justify="center">
        <v-card>
            <!-- <div class="ml-2 d-flex">
                <v-icon>mdi-information</v-icon> -->
                <v-card-title class="text-h5">
                    <label class="font-bold text-xl text-black">GENDER AND DEVELOPMENT</label>
                </v-card-title>
            <!-- </div> -->
          <hr/>
          <v-card-text>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="4">
                            <label class="text-base text-black">Sex</label>
                            <v-text-field
                                placeholder="Education"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" >
                            <label class="text-base text-black">Pronounce</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                                      <label class="text-base text-black">Years in BIR</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                      <label class="text-base text-black">Member of LGBTQ+ ?</label>
                            <v-text-field
                                placeholder="Degree"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                      <label class="text-base text-black">Living structure</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                      <label class="text-base text-black">Area of Residence</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" class="pt-0">
                            <label class="text-base text-black">Means of Transportation</label>
                            <div class="flex justify-md-space-between gap-5">
                                <v-text-field
                                    placeholder="Your landing page"
                                    dense
                                    outlined
                                    hide-details
                                ></v-text-field>
                                <v-text-field
                                    placeholder="Your landing page"
                                    dense
                                    outlined
                                    hide-details
                                ></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                      <label class="text-base text-black">Distance from Work</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                      <label class="text-base text-black">Estimated travel time</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                      <label class="text-base text-black">Financal Responsibilty</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                                <label class="text-base text-black">Current Monthly Salary</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                             <label class="text-base text-black">Other source of income</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" class="pt-0">
                             <label class="text-base text-black">Income Classification</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                             <label class="text-base text-black">Group Sector</label>
                             <v-radio-group v-model="radioGroup" active-class="active-radio-button" class="mt-0">
                                <v-radio
                                    v-for="n in 3"
                                    :key="n"
                                    :label="`Sector ${n}`"
                                    :value="n"
                                ></v-radio>
                            </v-radio-group>
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
      radioGroup: 1,
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