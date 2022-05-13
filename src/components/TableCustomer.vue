<template>
  <div class="divTable">
    <table>
      <thead>
        <tr>
          <th v-for="field in fields" :key="field.label">{{ field.label }}</th>
        </tr>
        <tr v-for="item in items" :key="item">
          <th>{{ item.cpf }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.email }}</th>
          <th>{{ item.phone }}</th>
          <td class="action">
            <button @click="editCustomer(item._id)">
              <i class="bx bx-edit"><BootstrapIcon icon="pencil-square" /></i>
            </button>
          </td>
          <td class="action">
            <button @click="removeCustomer(item._id)">
              <i class="bx bx-trash"><BootstrapIcon icon="trash2" /></i>
            </button>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableCustomer",
  data() {
    return {
      url: `${process.env.VUE_APP_API_URL}`,
      fields: [
        {
          key: "cpf",
          label: "CPF",
        },
        {
          key: "name",
          label: "NAME",
        },
        {
          key: "email",
          label: "EMAIL",
        },
        {
          key: "phone",
          label: "PHONE",
        },
        {
          key: "edit",
          label: "EDIT",
        },
        {
          key: "delete",
          label: "DELETE",
        },
      ],
      items: [],
    };
  },
  mounted() {
    axios.get(`${this.url}/api/customer`).then((response) => {
      console.log(response.data);
      this.items = response.data;
    });
  },
  methods: {
    editCustomer(id) {
      console.log("EDIT", id);
    },
    removeCustomer(id) {
      axios.delete(`${this.url}/api/customer/${id}`).then(() => {
        for (let index = 0; index < this.items.length; index++) {
            const element = this.items[index];
            if(element._id == id){
                this.items.splice(index, 1);
            }
        }
      });
    },
  },
};
</script>
<style scoped>
.divTable {
  padding: 10px;
  width: auto;
  height: inherit;
  overflow: auto;
}

.divTable::-webkit-scrollbar {
  width: 12px;
  background-color: whitesmoke;
}

.divTable::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: darkgray;
}
table {
  width: 100%;
  border-spacing: 10px;
  word-break: break-all;
  border-collapse: collapse;
}

thead {
  background-color: whitesmoke;
}

tr {
  border-bottom: 1px solid rgb(238, 235, 235) !important;
}

tbody tr td {
  vertical-align: text-top;
  padding: 6px;
  max-width: 50px;
}

thead tr th {
  padding: 5px;
  text-align: start;
  margin-bottom: 50px;
}

tbody tr {
  margin-bottom: 50px;
}

thead tr th.action {
  width: 100px !important;
  text-align: center;
}

tbody tr td.action {
  text-align: center;
}

thead tr th.action {
  width: auto !important;
}

td button i {
  font-size: 20px !important;
}

td button i:first-child {
  margin-right: 0;
}

td button {
  border: none;
  outline: none;
  background: transparent;
}

td button i {
  font-size: 25px;
}

td button i:first-child {
  margin-right: 10px;
}
</style>