<template>
  <!-- v-show toggles inline display: none / show -->
  <button v-show="visible" @click="scrollToTop" class="scroll-top" aria-label="Scroll to top">
    <ChevronUpIcon class="scroll-top__icon" />
  </button>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ChevronUpIcon } from '@heroicons/vue/24/outline'

  const visible = ref(false)

  function onScroll() {
    visible.value = window.scrollY > 300
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>

<style scoped>
  .scroll-top {
    position: fixed;
    bottom: calc(var(--footer-height) + 1rem);
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: var(--accent-color);
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: opacity 0.3s ease;
    z-index: 1000;
  }
  .scroll-top__icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--brand-light-orange);
  }
</style>
