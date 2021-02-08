<template>
  <div class="breakfast">
    <div class="header">
      <h3 class="title">Menú del día"</h3>
    </div>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'breakfast',
  components: {
  },
  data() {
    return {
      breakfast: [],
    };
  },
  firestore: {
    breakfast: db.collection('breakfast').orderBy("description", "asc"),
  }
};
</script>
