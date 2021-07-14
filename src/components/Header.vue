<template>
    <div :class="isDark ? 'dark' : '' ">
        <div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div class="text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ... dark:bg-gradient-to-r dark:from-purple-900 dark:via-pink-900 dark:to-red-900 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl md:max-w-screen-md max-w-md text-gray-700 dark:text-gray-300 p-4 w-full mx-auto mb-5 text-3xl md:text-5xl rounded">
                <i class="fas fa-lungs-virus animate-pulse"></i>Covid 19 Info
                <!-- <button @click.prevent="isDark = !isDark" class="flex rounded-full mx-auto focus:outline-none hover:text-blue hover:bg-opacity-">
                    <div v-if="isDark"><i class="fas fa-toggle-on"></i></div>
                    <div v-else><i class="fas fa-toggle-off"></i></div>
                </button> -->
                <div class=" relative inline-block ml-10 w-10 mr-1 align-middle select-none transition duration-200 ease-in">
                    <input @click="isDark = !isDark"  type="checkbox" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-700 border-4 appearance-none cursor-pointer"/>
                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label class="dark:text-gray-300 text-xs font-bold align-middle text-gray-700">Dark Mode</label>
            </div> 
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDark : true,
        }
    }
}
</script>
<style scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #c3c3c3;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #272727;
}
</style>