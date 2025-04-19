<template>
  <div>
    <header class="site-header">
      <img
        src="/image.png"
        alt="AdMarki logo"
        class="site-logo"
      />
      <nav class="site-nav">
        <button
          class="mobile-menu-btn"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        ><EllipsisVerticalIcon class="w-6 h-6 text-white" /></button>
        <ul :class="['site-nav__list', { open: mobileMenuOpen }]">
          <li><a href="#about" class="nav-link">About Us</a></li>
          <li><a href="#offer" class="nav-link">What We Offer</a></li>
          <li><a href="#form" class="nav-link">Get Started</a></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <section id="about" class="container">
        <div class="offer-block about-block">
          <span class="block-title">💡About Us</span>
          <p class="block-desc">
            AdMarki is a lightweight Facebook Ad builder designed to simplify the process of
            creating and managing ad campaigns. Whether you're a small business owner or a digital
            marketer, AdMarki helps you craft visually appealing ads with ease. With an intuitive
            interface and customizable templates, you can quickly design, preview, and launch your
            Facebook ads, all in one place. Streamline your ad creation workflow and bring your
            marketing ideas to life with AdMarki.
          </p>
        </div>
      </section>

      <section id="offer" class="container">
        <h2 class="section-title">What WeOffer</h2>
        <div class="offer-grid">
          <div class="offer-block">
            <div class="block-icon">🚀</div>
            <span class="block-title">Real time Preview</span>
            <p class="block-desc">See your ad live as you type, No surprises at launch.</p>
          </div>
          <div class="offer-block">
            <div class="block-icon">💾</div>
            <span class="block-title">Input Persistence</span>
            <p class="block-desc">Your progress auto saves so you never lose your work.</p>
          </div>
          <div class="offer-block">
            <div class="block-icon">📱</div>
            <span class="block-title">Responsive Design</span>
            <p class="block-desc">
              Built in mobile and desktop layouts so your ads look great everywhere.
            </p>
          </div>
        </div>
      </section>

      <section id="form" class="container">
        <h2 class="section-title">Get Started</h2>
        <UserForm class="form" />
      </section>
    </main>

    <footer>&copy; 2025 AdMarki — All rights reserved</footer>
  </div>
</template>

<script>
  import UserForm from './components/UserForm.vue'
  import { ref } from 'vue'
  import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'

  export default {
    name: 'App',
    components: {
      UserForm,
      EllipsisVerticalIcon,
    },
    setup() {
    const mobileMenuOpen = ref(true)
    return { mobileMenuOpen }
  },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
