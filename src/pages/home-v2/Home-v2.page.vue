<script setup lang="ts">
import { useElementSize } from '@vueuse/core';
import { computed, ref } from 'vue';

import HomeHeader from './components/HomeHeader.vue';
import SectionGallery from './section/SectionGallery.vue';
import SectionSocialV2 from './section/SectionSocial-v2.vue';

const selfRef = ref<HTMLDivElement>();
const { width } = useElementSize(selfRef);

const paddingTopMin = computed(() => 16);
const paddingTopMax = computed(() => 64);
const paddingTop = computed(() => {
  const distance = Math.max(width.value - 810, 0);

  return Math.min(
    paddingTopMin.value + (distance / 100) * paddingTopMin.value,
    paddingTopMax.value,
  );
});

const isWide = computed(() => width.value > 810);
</script>

<template>
  <div ref="selfRef" class="page-home" :data-wide="isWide">
    <img class="page-home-background" src="@/assets/gallery/gallery-13.png" />

    <div class="page-home-body" :style="{ zIndex: '1', paddingTop: `${paddingTop}px` }">
      <HomeHeader />
      <SectionSocialV2 />
      <SectionGallery />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-home {
  --padding-block: 1rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .page-home-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .page-home-body {
    width: 100%;
    max-width: 50rem;
    padding-block: var(--padding-block);
    gap: 2rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
}
</style>
