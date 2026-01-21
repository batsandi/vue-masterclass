<template>
    <form class="space-y-4 mx-auto">
        <div>
            <label>Username</label>
            <input type="text" v-model="general.username">
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="general.email">
        </div>
        <div>
            <label>About Me</label>
            <textarea v-model="general.about"></textarea>
        </div>
        <div>
            <label>Gender</label>
            <label>
                <input name="gender" type="radio" value="male" v-model="general.gender">
                <span>Male</span>
            </label>
           <label>
                <input name="gender" type="radio" value="female" v-model="general.gender">
                <span>Female</span>
            </label>        
        </div>
        <div>
            <label>Country</label>
            <select v-model="general.country">
                <option>Brazil</option>
                <option>Kazakhstan</option>
                <option>Birma</option>

            </select>
        </div>
        <button type="submit" class="btn-primary">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { useSettings } from "@/composables/useSettings"

const { general } = useSettings()

</script>