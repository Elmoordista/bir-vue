import assignment_history from '../components/pages/profile/assignment_history.vue';
import educational_background from '../components/pages/profile/educational_background.vue';
import family_background from '../components/pages/profile/family_background.vue';
import gender_development from '../components/pages/profile/gender_development.vue';
import health_info from '../components/pages/profile/health_info.vue';
import learning_development from '../components/pages/profile/learning_development.vue';
import other_information from '../components/pages/profile/other_information.vue';
import performance_rating from '../components/pages/profile/performance_rating.vue';
import personal_info from '../components/pages/profile/personal_info.vue';
import uploaded_document from '../components/pages/profile/uploaded_document.vue';
import violation_offence from '../components/pages/profile/violation_offence.vue';

export default [
    {
      path: `/profile/assignment-history`,
      name: `assignment-history`,
      component: assignment_history,
    },
    {
      path: `/profile/educational-background`,
      name: `educational-background`,
      component: educational_background,
    },
    {
      path: `/profile/family-background`,
      name: `family-background`,
      component: family_background,
    },
    {
      path: `/profile/gender-development`,
      name: `gender-development`,
      component: gender_development,
    },
    {
      path: `/profile/health-info`,
      name: `health-info`,
      component: health_info,
    },
    {
      path: `/profile/learning-development`,
      name: `learning-development`,
      component: learning_development,
    },
    {
      path: `/profile/other-information`,
      name: `other-information`,
      component: other_information,
    },
    {
      path: `/profile/performance-rating`,
      name: `performance-rating`,
      component: performance_rating,
    },
    {
      path: `/profile/personal-info`,
      name: `personal-info`,
      component: personal_info,
    },
    {
      path: `/profile/uploaded-document`,
      name: `uploaded-document`,
      component: uploaded_document,
    },
    {
      path: `/profile/violation-offence`,
      name: `violation-offence`,
      component: violation_offence,
    },
]