import axios from "axios";
import {user} from "../stores";

export class AsteoService {
  // baseUrl = "https://obscure-refuge-81832.herokuapp.com";

  constructor(baseUrl) {
    console.log("HELLO");
    this.baseUrl = "http://localhost:4000";
    console.log(this.baseUrl);
    const asteoCredentials = localStorage.asteo;
    if (asteoCredentials) {
      const savedUser = JSON.parse(asteoCredentials);
      user.set({
        username: savedUser.username,
        token: savedUser.token,
        _id: savedUser._id,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(username, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {username, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          username: username,
          token: response.data.token,
          _id: response.data._id,
        });
        localStorage.asteo = JSON.stringify({username: username, token: response.data.token, id: response.data._id});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      username: "",
      token: "",
      _id: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("asteo");
  }

  async register(firstName, lastName, email, username, password) {
    try {
      await axios.post(`${this.baseUrl}/api/users`, {firstName, lastName, email, username, password});
      user.set({
        username: "",
        token: "",
        _id: "",
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateUser(user) {
    try{
      const res = await axios.post(`${this.baseUrl}/api/users/update`, user);
      return res.data;
    } catch (error) {
      return null;
    }
  }

  async deleteUser(id) {
    try{
      const res = await axios.delete(`${this.baseUrl}/api/users/${id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  }

  async getUser(id){
    try {
      const res = await axios.get(`${this.baseUrl}/api/users/${id}`);
      return res.data;
    } catch (error) {
      return [];
    }
  }

  async getEpoch(id){
    try {
    const res = await axios.get(`${this.baseUrl}/api/epochs/${id}`);
    return res.data;
    } catch (error) {
      return [];
    }
  }

  async getArtist(id){
    try {
    const res = await axios.get(`${this.baseUrl}/api/artists/${id}`);
    return res.data;
    } catch (error) {
      return [];
    }
  }

  async getGallery(id){
    try {
    const res = await axios.get(`${this.baseUrl}/api/galleries/${id}`);
    return res.data;
    } catch (error) {
      return [];
    }
  }

  async getAllEpochs(){
    try {
      const response = await axios.get(`${this.baseUrl}/api/epochs`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllArtists(){
    try {
      const response = await axios.get(`${this.baseUrl}/api/artists`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllGalleries(){
    try {
      const response = await axios.get(`${this.baseUrl}/api/galleries`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllPaintings(){
    try {
      const response = await axios.get(`${this.baseUrl}/api/paintings`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllUsers(){
    try {
      const response = await axios.get(`${this.baseUrl}/api/users`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllPostsByGallery(galleryId) {
    try{ 
      const res = await axios.get(`${this.baseUrl}/api/galleries/${galleryId}/posts`);
      return res.data;
    } catch (error) {
      return [];
    }
  }

  async getAllPosts(galleryId) {
    try{ 
      const res = await axios.get(`${this.baseUrl}/api/posts`);
      return res.data;
    } catch (error) {
      return [];
    }
  }

  async getDetail(detailUrl){
    try {
      const response = await axios.get(`${this.baseUrl}/api/${detailUrl}`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async deleteEle(detailUrl){
    try {
      const response = await axios.delete(`${this.baseUrl}/api/${detailUrl}`);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deletePost(id) {
    const res = await axios.delete(`${this.baseUrl}/api/posts/${id}`);
    return res.data;
  };

  async createEle(detailUrl, ele) {
    const res = await axios.post(`${this.baseUrl}/api/${detailUrl}`, ele);
    return res.data;
  }

  async createPost(galleryId, post) {
    const res = await axios.post(`${this.baseUrl}/api/galleries/${galleryId}/posts`, post);
    return res.data;
  }


  async donate(donation) {
    try {
      const response = await axios.post(this.baseUrl + "/api/candidates/" + donation.candidate + "/donations", donation);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getCandidates() {
    try {
      const response = await axios.get(this.baseUrl + "/api/candidates");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getDonations() {
    try {
      const response = await axios.get(this.baseUrl + "/api/donations");
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
