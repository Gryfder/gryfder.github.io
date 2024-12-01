<script setup lang="ts">
import { computed, ref } from 'vue';
import { SOCIALS } from '@/model/Social';
import CardSocialV2 from '../components/CardSocial-v2.vue';
import { useElementBounding } from '@vueuse/core';

const selfRef = ref();
const { width } = useElementBounding(selfRef);
const isThin = computed(() => width.value < 500);
</script>

<template>
  <div ref="selfRef" class="page-home-section-social-v2">
    <div class="page-home-socials">
      <CardSocialV2
        v-for="social of SOCIALS"
        :key="social.title"
        :item="social"
        :use-thin="isThin"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-home-section-social-v2 {
  display: flex;
  flex-direction: column;

  .page-home-socials {
    padding: 1rem;
    gap: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
