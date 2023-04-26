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
                    <label class="font-bold text-xl text-black">ADD ASSIGNMENT HISTORY</label>
                </v-card-title>
            <!-- </div> -->
          <hr/>
          <v-card-text>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        class="pt-0"
                        sm="6"
                        >
                        <label class="text-lg text-black">From</label>
                        <v-menu
                            ref="menu_from"
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
                            ref="menu_to"
                            v-model="menu2"
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
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Position</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.Position"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Department</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.Department"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Place Assigned</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.PlaceAssigned"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Monthly Salary</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.MonthlySalary"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Salary Pay Grade</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.SalaryPayGrade"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Status Appointment</label>
                            <v-select
                                :items="appointmentStatuslist"
                                dense
                                outlined
                                hide-details
                                placeholder="Select suffix"
                                v-model="payload.StatusAppointment"
                              ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Govt Service</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.GovtService"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Item Authorized</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.ItemAuthorized"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">RTAO/RSO</label>
                            <v-text-field
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="RTAO"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pt-0">
                            <label class="text-lg text-black">Nature Appointment</label>
                            <v-select
                                :items="natureappointmentlist"
                                dense
                                outlined
                                hide-details
                                placeholder="Select suffix"
                                v-model="payload.NatureAppointment"
                                ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" class="pt-0">
                            <label class="text-lg text-black">Remarks</label>
                            <v-textarea
                                placeholder="Name of school"
                                dense
                                outlined
                                hide-details
                                v-model="payload.Remarks"
                            ></v-textarea>
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
              @click="saveDatas"
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
      loading: false,
      datefrom: null,
      dateto: null,
      menu: false,
      modal: false,
      menu2: false,
      RTAO : null,
      payload:{
        From:null,
        To:null,
        Position:null,
        Department:null,
        PlaceAssigned:null,
        MonthlySalary:null,
        SalaryPayGrade:null,
        StatusAppointment:null,
        GovtService:null,
        ItemAuthorized:null,
        NatureAppointment:null,
        Remarks:null,
       "RTAO/RSO":null,
      },
      natureappointmentlist:[
        'RE-APPOINTED' , 
        'ORIGINAL',
        'TRANSFER',
        'TEMPORARY',
        'REINSTATEMENT',
        'DEMOTION',
        'PROMOTION',
        'DETAIL',
        'APPOINTMENT THROUGH CERTIFICATION',
        'RE-EMPLOYMENT',
        'RE-ASSIGNMENT',
        'SECONDMENT'
      ],
      appointmentStatuslist:[
      'PERMANENT',
      'CONTRACTUAL',
      'CO-TERMINOUS OF THE INCUMBENT'
      ]
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
    saveDatas(){
        this.loading = true;
        this.payload['RTAO/RSO'] = this.RTAO;
        this.$emit('saveData',this.payload)
    },
    saveDate(){
        this.$refs.menu_from.save(this.payload.From)
        this.$refs.menu_to.save(this.payload.To)
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