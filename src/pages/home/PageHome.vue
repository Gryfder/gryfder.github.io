<script setup lang="ts">
import HomeHeader from './components/HomeHeader.vue';
import SectionSocialV2 from './section/SectionSocial-v2.vue';
import SectionGallery from './section/SectionGallery.vue';
</script>

<template>
  <div class="page-home">
    <div class="page-home-body" style="z-index: 1">
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

  background: radial-gradient(circle at 50% 6rem, #5568e4, transparent 30%);

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
