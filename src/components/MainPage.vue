<template>
  <div>
    <h1>This is a {{ info }}</h1>
    <p>FIRST PAGE</p>
    <!-- <ul>
        <li v-for="(customer, index) in backend_returns" v-bind:key="index">
            <h3>{{customer.name}}</h3>
        </li>
    </ul> -->
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      info: "MAIN PAGE",
      fields: ['cpf', 'name', 'email', 'phone'],
      items: [
        {
          _id: "627b2a5ffb588d4c3546f5e2",
          cpf: "11122233344",
          name: "Raul Aquino",
          email: "raul@email.com",
          phone: "85988720964",
          __v: 0,
        },
        {
          _id: "627d998152269ca9ddab3272",
          cpf: "11122233344",
          name: "Joshuel Nobre",
          email: "joshuel@email.com",
          phone: "85988720965",
          __v: 0,
        },
        {
          _id: "627d999152269ca9ddab3274",
          cpf: "11122233344",
          name: "Guilherme Portela",
          email: "guilherme@email.com",
          phone: "85988720966",
          __v: 0,
        },
        {
          _id: "627d99a052269ca9ddab3276",
          cpf: "11122233344",
          name: "Carlos Brunno",
          email: "carlos@email.com",
          phone: "85988720967",
          __v: 0,
        },
        {
          _id: "627d99b052269ca9ddab3278",
          cpf: "11122233344",
          name: "Nityananda Barbosa",
          email: "nity@email.com",
          phone: "85988720987",
          __v: 0,
        },
      ],
    };
  },
};
</script>
