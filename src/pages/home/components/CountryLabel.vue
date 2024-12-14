<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
}>();
</script>

<template>
  <div class="country-label">
    <img class="country-label-flag" :src="icon" />
    {{ title }}
  </div>
</template>

<style lang="scss" scoped>
.country-label {
  border-radius: 0.5rem;
  background-color: hsla(0, 0%, 100%, 0.1);
  font-size: 0.9rem;

  gap: 0.4em;
  padding: 0.4rem;
  display: flex;
  align-items: center;

  .country-label-flag {
    height: 0.8em;
  }
}
</style>
