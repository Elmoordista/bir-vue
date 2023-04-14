import index from '../components/pages/dashboard/index.vue';

export default [
    {
    path: `/dashboard`,
    name: `dashboard`,
    component: index,
   /*  children: [
      {
        path: `/accounts/add-new-account`,
        name: `new_account`,
        component: new_account
      },
      {
        path: `/accounts/employee_account`,
        name: `employee_account`,
        component: employee_account
      },
      {
        path: `/accounts/feedback`,
        name: `feedback`,
        component: feedback
      },
      {
        path: `/accounts/:id/edit-account`,
        name: `edit_account`,
        component: edit_account
      },
      {
        path: `/accounts/user_account`,
        name: `user_account`,
        component: user_account
      },
    ], */
   }
]