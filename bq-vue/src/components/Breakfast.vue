<template>
<div>
  <h3>Desayunos/h3>
</div>
</template>

<script>
import BreakfastBtn from '@/components/BreakfastBtn.vue';
import { db } from '../db';

export default {
  name: 'breakfast',
  components: {
    BreakfastBtn,
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
