<template>
  <div class="home">
    <CustomerModal :show="show"/>
    <div class="header">
      <span>Customer base</span>
      <button type="button" class="btn btn-success" @click="showModal">
        <span>
          Include
        </span>
      </button>
    </div>
    <TableCustomer/>
  </div>
</template>

<script>
import TableCustomer from '@/components/TableCustomer.vue'
import CustomerModal from '@/components/CustomerModal.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      show: false
    }
  },
   methods: {
    showModal() {
      this.show = !this.show;
      console.log(this.show)
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