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
                    <label class="font-bold text-xl text-black">LEARNING AND DEVELOPMENT</label>
                </v-card-title>
            <!-- </div> -->
          <hr/>
          <v-card-text>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label class="text-lg text-black">Tittle</label>
                            <v-text-field
                                placeholder="Education"
                                dense
                                outlined
                                hide-details
                                v-model="payload.tittle"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <label class="text-lg text-black">Number of Hours</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.number_of_hours"
                            ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        class="pt-0"
                        sm="6"
                        >
                        <label class="text-lg text-black">From</label>
                        <v-menu
                            ref="menu_from"
                            :close-on-content-click="true"
                            :return-value.sync="payload.from"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.from"
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
                                v-model="payload.from" no-title scrollable @change="saveDate">
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
                            ref="menu_to"
                            v-model="menu2"
                            :close-on-content-click="true"
                            :return-value.sync="payload.to"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="payload.to"
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
                                v-model="payload.to" no-title scrollable @change="saveDate">
                            </v-date-picker>
                        </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Type of learning</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.type_learning"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Sponsored By</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.sponsored_by"
                            ></v-text-field>
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
        tittle:null,
        from:null,
        to:null,
        number_of_hours:null,
        type_learning:null,
        sponsored_by:null,
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
        this.$refs.menu_from.save(this.payload.from)
        this.$refs.menu_to.save(this.payload.to)
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