<script setup>
const {photo,type,rating,title,superHost} = defineProps(['photo','type','rating','title','superHost'])
</script>

<template>
    <div class="card">
        <img :src="photo" :alt="title">
        <div class="details">
            <p v-if="superHost" class="super">Super Host</p>
            <p>{{type}}</p>
            
            <p>
                <font-awesome-icon class="icon" :icon="['fas', 'star']" />
                {{ rating }}
            </p>
        </div>
        <h3>{{title}}</h3>
    </div>
</template>

<style scoped>
.card{
    width: 350px;
}
.card img{
    width: 100%;

    border-radius: 20px;
}
.card .details{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
p .icon{
    color: var(--red);
    
}
.super{
    padding: 2px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>