import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  json: true
});

export default client;