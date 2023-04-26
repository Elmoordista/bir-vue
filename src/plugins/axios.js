import axios from "axios";
import VueCookies from "vue-cookies";

const HttpClient = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

HttpClient.interceptors.request.use((config) => {
  const token = VueCookies.get("token");
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return config;
});

const responseErrorInterceptor = (error) => {
  if (error.response && error.response.message == 'Unauthenticated') {
    VueCookies.remove("token");
    location.reload();
  }

  // const appStore = useAppStore();

  // if (error.response.data.errors) {
  //   appStore.hasError = true;
  //   appStore.errors = error.response.data.errors;
  //   window.scrollTo(0, 0);
  // }
  // return Promise.reject(error);
};

HttpClient.interceptors.response.use(
  (response) => response,
  responseErrorInterceptor
);

export default HttpClient;
