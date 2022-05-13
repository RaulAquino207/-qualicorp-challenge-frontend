<template>
  <div>
    <h1>Customer list</h1>

    <div class="table ">
        <b-table striped borderless hover :items="items" :fields="fields">
            <template slot(edit)="data">
                <router-link :to="
                {
                    name: 'HelloWorld',
                    params: { customerId: data._id }
                }"
                class="btn btn-sucess"><i class="fas fa-edit"></i>
                </router-link>
            </template>
            <template>

            </template>
        </b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "MainPage",
  data() {
    return {
      url: `${process.env.VUE_APP_API_URL}`,
      fields: [
          {
              key: 'cpf',
              label: 'CPF'
          },
          {
              key: 'name',
              label: 'NAME'
          },
          {
              key: 'email',
              label: 'EMAIL'
          },
          {
              key: 'phone',
              label: 'PHONE'
          },
          {
              key: 'edit',
              label: 'EDIT'
          },
          {
              key: 'delete',
              label: 'DELETE'
          },
      ],
      items: [],
    };
  },
  mounted() {
     axios
        .get(`${this.url}/api/customer`)
        .then((response) => {
            console.log(response.data)
            this.items = response.data
        })
  }
};
</script>
<style>
    .table {
        padding-top: 25px;
        padding-right: 15%;
        padding-bottom: 35px;
        padding-left: 15%;
    }
    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 31.5px;
        line-height: 47px;

        color: #323232;
    }
</style>
