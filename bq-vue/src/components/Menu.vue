<script>
// import { db } from '../db';

export default {
  name: 'Menu',
  data() {
    return {
      // breakfast: [],
      // burgers: [],
      // drinks: [],
      // extras: [],
    };
  },
  firestore() {
    return {
      // breakfast: db.collection('breakfast'),
      // burgers: db.collection('burgers'),
      // drinks: db.collection('drinks'),
      // extras: db.collection('extras'),
    };
  },
};
</script>

<style scoped>
#right{
  background-color: rgba(7, 7, 7, 0.527);
}
ul {
  list-style-type: none;
};
</style>
