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
                    <label class="font-bold text-xl text-black">ELIGIBILTY INFO</label>
                </v-card-title>
            <!-- </div> -->
          <hr/>
          <v-card-text>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label class="text-lg text-black">Level</label>
                            <v-text-field
                                placeholder="Education"
                                dense
                                outlined
                                hide-details
                                v-model="payload.level"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <label class="text-lg text-black">Rating</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.rating"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                                      <label class="text-lg text-black">Place of examination</label>
                            <v-text-field
                                placeholder="Your landing page"
                                dense
                                outlined
                                hide-details
                                v-model="payload.place_examination"
                            ></v-text-field>
                        </v-col>
                        <v-col
                        cols="12"
                        class="pt-0"
                        sm="6"
                        >
                        <label class="text-lg text-black">Date of examination</label>
                        <v-menu
                            ref="menu_date_examination"
                            v-model="menu_date_examination"
                            :close-on-content-click="true"
                            :return-value.sync="payload.date_examination"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.date_examination"
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
                                v-model="payload.date_examination" no-title scrollable @change="saveDate">
                            </v-date-picker>
                        </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                                      <label class="text-lg text-black">Lince number</label>
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
                        <label class="text-lg text-black">Date of validity</label>
                        <v-menu
                            ref="menu_licence_validity"
                            v-model="menu_licence_validity"
                            :close-on-content-click="true"
                            :return-value.sync="payload.date_validity"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.date_validity"
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
                                v-model="payload.date_validity" no-title scrollable @change="saveDate">
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
      menu_date_examination: false,
      menu_licence_validity: false,
      payload:{
        level:null,
        rating:null,
        date_examination:null,
        place_examination:null,
        licence_number:null,
        date_validity:null,
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
        this.$refs.menu_date_examination.save(this.payload.date_examination)
        this.$refs.menu_licence_validity.save(this.payload.date_validity)
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