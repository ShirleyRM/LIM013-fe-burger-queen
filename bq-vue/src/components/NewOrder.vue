<template>
  <div class="newOrder">
    <div class="empty"></div>
    <div class="newOrderPedido">
      <div class="header">
        <h3 class="title">Nueva Orden</h3>
      </div>
      <div class="newOrderForm">
        <div class="orderLeft">
          <h3 class="orderNumber">N°</h3>
        </div>
        <div class="field">
          <div class="inputLabel">
            <label class="label">Cliente:</label>
          </div>
          <input type="text"
          id="customer"
          class="form-control"
          v-model="newOrder.name"
          placeholder="Nombre">
        </div>
        <div class="field">
          <div class="inputLabel">
            <label class="label">N° de Mesa:</label>
          </div>
          <input type="number"
           id="table"
           class="form"
           v-model.number="newOrder.table"
           placeholder="Número">
        </div>
        <div class="ordenTomada">
          <h5>Total</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewOrder',
  components: {
    // Breakfast,
  },
  data: () => ({
    newOrder: {
      name: '',
      table: '',
    },
  }),
};
</script>

<style lang="scss" scoped>
.newOrder {
  width: 48%;
  height: 570px;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: top;
  display: inline-block;
  background-color: transparent;
}
.empty {
  width: 100%;
  height: 58px;
}
.newOrderPedido {
  width: 100%;
  height: 540px;
  margin-left: 0px;
  margin-right: 12px;
  display: inline-block;
  border-radius: 10px;
  background-color: white;
}
.header {
  width: 100%;
  height: 60px;
  margin-top: -20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/extras.png);
  background-size: cover;
}
.orderLeft{
  width: 49%;
  margin-top: -20px;
  display: inline-block;
}
.orderNumber {
  text-align: left;
}
.title {
  margin-left: 0px;
  padding: 20px;
  text-align: left;
  color: #ffffff;
}
.newOrderForm {
  margin: 20px;
  text-align: left;
  color: rgba(0, 0, 0, 0.459);
}
.field {
  margin-bottom: 10px;
}
.inputLabel {
  width: 50px;
  display: inline-block;
}
.label {
  margin-bottom: 5px;
  font-size: 15px;
}
</style>
