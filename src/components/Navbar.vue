<script setup>
import { ref, watch } from 'vue';
import {city,guestNumber} from '../data/globalState'
import rawData from '../data/stays.json'

const nav = ref(false)


const overlay = defineProps(['overlay'])
const emit = defineEmits(['overlayHandler'])

const emitOverlayHandler = (overlay) => {
    nav.value = !nav.value
    emit("overlayHandler", overlay)
}



const guestInput = ref(0)
const cityInput = ref('')


const data = ref(rawData)

let cities = data.value.map((x)=>{
    return x.city
})
const allCities = new Set(cities) 




const searchCity = (input) => {
    
    emitOverlayHandler(overlay)
    guestNumber.value = guestInput.value
    if(input != ''){
        city.value = input
    
    }


};

</script>

<template>
    <nav>
        <div class="small-nav ">

            <img src="/assets/logo.png" alt="windbnb-logo">
            <div class="display-nav" @click="emitOverlayHandler(overlay)">
                <h4 class="location">{{city.value}}-{{guestNumber.value}} guest(s)</h4>
                <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
            </div>

        </div>

        <div class="detail-nav " :class="[nav ? 'show' : 'none']">

            <div class="form">
                <div class="form-item">
                    <label for="City">City </label>
                    <input v-model.trim="cityInput" type="text" name="city" placeholder="Search city...">
                </div>

                <div class="form-item">
                    <label for="guest">Guest</label>
                    <input v-model="guestInput" type="number" name="Guest" placeholder="Guest..." min="1" max="12">
                </div>

                <button @click="searchCity(cityInput)">
                    <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
                    Search
                </button>
            </div>

            <div class="results-box">

                <div class="city-results">
                    <div 
                        class="item" 
                        v-for="(item, index) in allCities" 
                        :key="index"
                        @click="searchCity(item)"    
                    >
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                        <h4> {{ item }}</h4>
                    </div>
                    
                </div>

                <div class="guest-results">
                    <div class="guest-item">
                        <button @click="guestInput < 12 ? guestInput++ : guestInput">+</button>
                        <h4>{{guestInput}}</h4>
                        <button @click="guestInput > 1 ? guestInput-- : guestInput">-</button>
                        <h4>Guest</h4>

                    </div>
                    

                </div>


            </div>

            <div class="close-nav" @click="emitOverlayHandler(overlay)">
                <font-awesome-icon :icon="['fas', 'chevron-up']" class="icon-up" />
            </div>


        </div>
    </nav>
</template>

<style scoped>
.none {
    transform: translateY(-300px);
}

nav {
    font-family: 'Nunito', sans-serif;
    background-color: var(--background);
}

.small-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    height: 60px;
}

.small-nav .display-nav {
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--secondary-text);
    box-shadow: 0px 0px 8px 2px rgba(131, 131, 131, 0.75);
    cursor: pointer;


}

.small-nav .display-nav .location {
    padding: 5px;
    border-right: 1px solid var(--secondary-text);

}

.small-nav .display-nav .icon {
    padding: 8px;
    color: var(--red);
}


.detail-nav {
    position: absolute;
    background-color: white;
    top: 0;
    width: 100vw;
    height: 40vh;
    padding-top: 50px;
    transition: 0.5s ease-in-out;
    z-index: 10;

}

.detail-nav .form{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.form-item {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--secondary-text);
    padding: 5px;
    border-radius: 10px;
    width: 35%;
}

.form-item:focus-within {
    border: 1px solid rgb(108, 108, 108);
    box-shadow: 0px 0px 2px 1px rgba(167, 167, 167, 0.75);

}

label {
    font-size: 12px;
    font-weight: bold;
    padding-left: 4px;
    position: absolute;
}

input[type=text],
input[type=number] {
    border: none;
    outline: none;
    padding: 20px 4px 4px 4px;
}

input[type=text]:focus,
input[type=number]:focus {
    border: none;
    outline: none;
}

.detail-nav .form button {
    background-color: var(--red);
    border: none;
    color: white;
    padding: 15px;
    border-radius: 10px;

}

.detail-nav button:hover {
    background-color: #8a2020;
}

.results-box {
    display: flex;
    justify-content: space-around;
    width: 68%;
    height: 22vh;
    padding: 5px;

}

.guest-item {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 50%;
    gap: 5px;
}

.guest-results button {
    min-width: 25px;

    text-align: center;
}

.guest-results button:hover {
    background-color: #9e9e9e;
    border: 1px solid black;
}

.item {
    display: flex;
    cursor: pointer;
}
.item:hover{
    text-decoration: underline;
}

.close-nav {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    padding: 10px 0px;
    background-color: white;
}

.close-nav:hover {
    background-color: var(--secondary-text);
}


@media (max-width:800px){
    .detail-nav .form{
        flex-direction: column;
    }
    .results-box{
        display: none;
    }
    .form-item{
        width: 60%;
        margin: 10px;
    }
    .detail-nav .form button{
        width: 62%
    }
}
</style>