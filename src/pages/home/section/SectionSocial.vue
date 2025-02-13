<script setup lang="ts">
import { SOCIALS } from '@/model/Social';

import CardSocial from '../components/CardSocial.vue';
import SectionTitle from '../components/SectionTitle.vue';
</script>

<template>
  <div class="page-home-section-social">
    <SectionTitle>Find Me</SectionTitle>
    <div class="page-home-socials">
      <CardSocial v-for="social of SOCIALS" :key="social.title" :item="social" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-home-section-social {
  display: flex;
  flex-direction: column;

  .page-home-socials {
    padding: 1rem;
    gap: 0.5rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }

  container: social / inline-size;
  @container social (max-width: 20rem) {
    .page-home-socials {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
