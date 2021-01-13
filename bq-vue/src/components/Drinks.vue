<template>
    <div>
        <h1>Drinks</h1>
        <ul id="first-collection">
            <li v-for="drink in drinks" :key="drink.id">
            {{ drink.name }}
            </li>
        </ul>
    </div>

</template>

<script>
const db = firebase.firestore();

    export default {
        data: function(){
            return {
                drinks: [],
            }
        },
        firestore: {
            drinks: db.collection('drinks'),
        },
        methods: {
            addDrink(){
            }
        }
    }
</script>