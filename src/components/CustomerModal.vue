<template>
  <div class="modal-container">
    <h1>{{ show }}</h1>
    <!-- <div class="modal">
        <form>
          <label for="m-nome">Nome</label>
          <input id="m-nome" type="text" required />
  
          <label for="m-funcao">Função</label>
          <input id="m-funcao" type="text" required />
  
          <label for="m-salario">Salário</label>
          <input id="m-salario" type="number" required />
          <button id="btnSalvar">Salvar</button>
        </form>
      </div> -->
  </div>
</template>
<script>
export default {
  name: "CustomerModal",
  props: {
    show: Boolean,
  },
};
</script>