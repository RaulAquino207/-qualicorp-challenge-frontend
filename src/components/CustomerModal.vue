<template>
  <h1></h1>
  <div v-if="showModal" class="modal-container">
    <div class="modal">
      <form action="" @submit="submitCustomer($event)">
        <label for="m-cpf">cpf</label>
        <input id="m-cpf" v-model="customer.cpf" type="number" required />

        <label for="m-name">name</label>
        <input id="m-name" v-model="customer.name" type="text" required />

        <label for="m-email">email</label>
        <input id="m-email" v-model="customer.email" type="email" required />

        <label for="m-phone">phone</label>
        <input id="m-phone" v-model="customer.phone" type="number" required />

        <button type="submit" class="btn btn-success">
          <span> SAVE </span>
        </button>
        <button @click="cancel()" type="button" class="btn btn-danger">
          <span> CANCEL </span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CustomerModal",
  props: {
    show: Boolean,
    edit: Object,
  },
  data() {
    return {
      url: `${process.env.VUE_APP_API_URL}`,
      customer: {},
      editInfos: {},
      showModal: false,
    };
  },
  methods: {
    submitCustomer(e) {
      e.preventDefault();
      if (Object.keys(this.editInfos).length === 0) {
        axios
          .post(
            `${this.url}/api/customer`,
            this.customer
          )
          .then(() => {
            this.$emit("ok");
          });
      } else {
        axios
          .patch(
            `${this.url}/api/customer/${this.editInfos._id}`,
            this.customer
          )
          .then(() => {
            this.$emit("ok");
          });
      }
      this.showModal = false;
      this.customer = {};
      this.editInfos = {};
    },
    cancel() {
      this.showModal = false;
      this.customer = {};
      this.editInfos = {};
    },
  },
  watch: {
    show() {
      this.editInfos = this.edit;
      if (Object.keys(this.editInfos).length > 0) {
        this.customer = {
          cpf: this.editInfos.cpf,
          name: this.editInfos.name,
          email: this.editInfos.email,
          phone: this.editInfos.phone,
        };
      }
      this.showModal = this.show;
    },
  },
  emits: ["ok"],
};
</script>
<style scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  width: 50%;
  height: 70%;
}

.modal label {
  font-size: 14px;
  width: 100%;
}

.modal input {
  width: 100%;
  outline: none;
  padding: 5px 10px;
  width: 100%;
  margin-bottom: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
}

.modal button {
  width: 100%;
  margin: 10px auto;
  outline: none;
  border-radius: 20px;
  padding: 5px 10px;
  width: 100%;
  border: none;
  color: white;
}
</style>