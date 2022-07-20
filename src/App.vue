<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<!-- function loadCSV(filePath){
    return new Promise((resolve, reject) => {
        var results = []
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            return resolve(results)
        })
    })
} -->