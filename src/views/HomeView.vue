<template>
  <div class="home">
    <CustomerModal @ok="emitOk" :show="show" :edit="edit"/>
    <div class="header">
      <span>Customer base</span>
      <button type="button" class="btn btn-success" @click="showModal">
        <span>
          Include
        </span>
      </button>
    </div>
    <TableCustomer :ok="ok" @edit-customer="editCustomer"/>
  </div>
</template>

<script>
import TableCustomer from '@/components/TableCustomer.vue'
import CustomerModal from '@/components/CustomerModal.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      ok: false,
      show: false,
      edit: {}
    }
  },
   methods: {
    showModal() {
      this.edit = {};
      this.show = false;
       setInterval(() => {
        this.show = true;
      }, 500);
    },
    editCustomer(e){
      this.show = false;
      setInterval(() => {
        this.show = true;
      }, 500);
      this.edit = e;
    },
    emitOk(){
      this.ok = false;
      setInterval(() => {
        this.ok = true;
      }, 500);
    }
  },
  components: {
    TableCustomer,
    CustomerModal,
  }
}
</script>
<style>
    .home{
      height:80vh;
    }
    .header {
      min-height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: auto 12px;
    }
    .header span {
      font-weight: 900;
      font-size: 20px;
      word-break: break-all;
    }
    .header span {
      font-weight: 900;
      font-size: 20px;
      word-break: break-all;
    }
</style>