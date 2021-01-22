<template>
  <div>
      <div class="waiter">
        <h3>Escribe tu orden</h3>
        <form @Waiter="addClient(waiter, client)">
            <input v-model="waiter" placeholder="Nombre del mesero">

            <input v-model="client" placeholder="Nombre del cliente">
            <button type="submit">Send</button>
        </form>
      </div>
    </div>
</template>

<style>
.waiter{
  background-color: rgba(235, 234, 230, 0.726);
  outline: none;
  padding: 20px;
  width: 40%;
  border: 3px solid rgb(253, 253, 253);
  float: right;
  margin: 100px;
}
.input waiter{
  outline: none;
  padding: 10px;
  width: 50%;
  border: 3px solid rgb(253, 253, 253);
}
</style>
