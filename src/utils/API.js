import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=90&nat=us";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
