<script>
export default {
  data() {
    return {
      greeting: 'Hello World a los de DAM!'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>