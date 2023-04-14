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
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <label class="text-lg text-black">Name of school</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                                      <label class="text-lg text-black">Basic education/degree/course</label>
                            <v-text-field
                                placeholder="Degree"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                                      <label class="text-lg text-black">Highest level/unit</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
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
                            v-model="menu_graduated"
                            :close-on-content-click="true"
                            :return-value.sync="payload.year_graduate"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.year_graduate"
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
                                v-model="payload.year_graduate" no-title scrollable @change="saveDate">
                            </v-date-picker>
                        </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                                      <label class="text-lg text-black">Honor</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                            ></v-text-field>
                        </v-col>
                        
                        <v-col
                        cols="12"
                        class="pt-0"
                        sm="6"
                        >
                        <label class="text-lg text-black">From</label>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="true"
                            :return-value.sync="payload.datefrom"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.datefrom"
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
                                v-model="payload.datefrom" no-title scrollable @change="saveDate">
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
                            v-model="menu2"
                            :close-on-content-click="true"
                            :return-value.sync="payload.dateto"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.dateto"
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
                                v-model="payload.dateto" no-title scrollable @change="saveDate">
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
              @click="dialog = false"
            >
              Save
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
      payload:{
        education:null,
        name_of_school:null,
        degree:null,
        highest_level:null,
        honor:null,
        year_graduate:null,
        datefrom:null,
        dateto:null,
      }
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