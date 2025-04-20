<template>
  <div>
    <header class="site-header">
      <img src="/hepta-logo.png" alt="AdMarki logo" class="site-logo" />
      <nav class="site-nav">
        <button
          class="mobile-menu-btn"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <EllipsisVerticalIcon class="w-6 h-6 text-white" />
        </button>
        <ul :class="['site-nav__list', { open: mobileMenuOpen }]">
          <li><a href="#about" class="nav-link">About Us</a></li>
          <li><a href="#offer" class="nav-link">What We Offer</a></li>
          <li><a href="#form" class="nav-link">Get Started</a></li>
        </ul>
      </nav>
    </header>

    <HeroBanner />

    <main class="main-content">
      <section id="about" class="container">
        <div class="offer-block about-block">
          <h2 class="section-title">💡About Us</h2>
          <p class="block-desc">
            AdMarki was born from the belief that powerful Facebook advertising shouldn’t require a
            PhD in marketing or hours of setup. Our intuitive, web based builder walks you through
            every step from crafting scroll stopping creative to zeroing in on the perfect audience,
            so you can launch campaigns in minutes, not days. Under the hood we’re crunching data to
            keep your ads razor targeted and budget efficient, while our live preview and auto save
            features ensure your vision never gets lost in the workflow. Whether you’re an agency
            scaling dozens of campaigns or a small business owner testing your first ad, AdMarki
            blends creativity and analytics into a single, seamless experience so you spend less
            time wrestling with tools and more time growing your brand.
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
  import HeroBanner from '@/components/HeroBanner.vue'
  import { ref } from 'vue'
  import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'

  export default {
    name: 'App',
    components: {
      UserForm,
      HeroBanner,
      EllipsisVerticalIcon,
    },
    setup() {
      const mobileMenuOpen = ref(false)
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
