<script setup>
import StayCard from './StayCard.vue'

import { computed, ref } from 'vue';
import {city,guestNumber} from '../data/globalState'    
import dataFromJson from '../data/stays.json'    

const data = ref(dataFromJson)





let parsedData = computed(()=>{
   if(city.value=='All'){
    return data.value = dataFromJson.filter(d=>d.maxGuests >= guestNumber.value)
   } else{

    return data.value = dataFromJson.filter(
        d=>d.city == city.value && d.maxGuests >= guestNumber.value
    )
   }
})



</script>

<template>
    <header>
        <h2>Stays in {{ city.value }} - {{ guestNumber.value }} guest(s)</h2>
        <p>{{ parsedData.length }} stays</p>
    </header>
    <div class="content">
        <StayCard 
            v-if="parsedData.length>0"
            v-for="(item, index) in parsedData" 
            :key="index" 
            :photo="item.photo"
            :type="item.type"
            :rating="item.rating"
            :title="item.title"    
            :superHost="item.superHost"
        />
        <div v-else>
            <h1>There´s no result matching :/</h1>
        </div>
    </div>
</template>

<style scoped>
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
}
header p{
    color: var(--secondary-text);
}
.content{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;

}


</style>