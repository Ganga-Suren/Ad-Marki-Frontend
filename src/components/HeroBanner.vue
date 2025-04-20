<template>
  <section class="hero-banner">
    <div class="hero-banner__inner animate-slide-down">
      <div class="hero-banner__text">
        <p>
          AdMarki is a lightweight Facebook Ad builder designed to get your campaigns up and running
          in minutes. We blend creativity with data for maximum ROI.
        </p>
      </div>
      <div class="hero-banner__image">
        <img src="/hero-banner.png" alt="AdMarki Hero Banner" class="hero-banner__image" />
      </div>
    </div>
  </section>
</template>

<script setup>
  // no JS needed here for now
</script>

<style scoped>
  .hero-banner {
    background: var(--brand-light-orange);
    margin-top: calc(-1 * var(--header-height));
    padding-top: calc(var(--header-height) + 2rem);
    padding-bottom: 3rem;
    text-align: center;
  }

  /* inner box to constrain width like .container */
  .hero-banner__inner {
    max-width: var(--site-max-width);
    margin: 0 auto;
    padding: 0 var(--site-gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hero-banner__text {
    font-size: 1.125rem;
    font-family: var(--font-sans);
    color: #ffffff;
    max-width: 700px;
    margin: 0.5rem auto;
    line-height: 1.6;
  }
  .hero-banner__image img {
    max-width: 300px;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* slide‑down keyframe */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* apply the animation */
  .animate-slide-down {
    animation: slideDown 0.8s ease-out both;
  }
</style>
