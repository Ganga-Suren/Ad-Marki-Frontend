<template>
  <section class="hero-banner">
    <div class="hero-banner__inner animate-slide-down">
      <div class="hero-banner__text">
        <p>
          Heptaloop is a lightweight Facebook Ad builder designed to get your campaigns up and
          running in minutes. We blend creativity with data for maximum ROI.
        </p>
        <a href="#form" class="hero-banner__button">Get Started</a>
      </div>
      <div class="hero-banner__image">
        <img src="/hero-banner.png" alt="AdMarki Hero Banner" class="hero-banner__image" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
  .hero-banner__button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    background-color: #ffffff;
    color: black;
    border-radius: 3rem;
    text-decoration: none;
    font-weight: lighter;
    font-size: small;
    transition: background-color 0.3s ease;
  }

  .hero-banner {
    width: 100%;
    margin-top: calc(-1 * var(--header-height));
    padding-top: calc(var(--header-height) + 2rem);
    padding-bottom: 3rem;
    text-align: left;
    background: var(--brand-light-orange);
  }

  .hero-banner__inner {
    max-width: var(--site-max-width);
    margin: 0 auto;
    margin-top: -3rem;
    margin-bottom: 2rem;
    padding: calc(var(--header-height) + 2rem) var(--site-gutter) 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }
  .hero-banner__text {
    font-size: 28px;
    font-family: var(--font-sans);
    color: #ffffff;
    max-width: 700px;
    margin: 0.5rem auto;
    line-height: 1.6;
    flex: 1 1 320px;
    min-width: 280px;
  }
  .hero-banner__image {
    flex: 1 1 280px;
    text-align: center;
  }
  .hero-banner__image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

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

  .animate-slide-down {
    animation: slideDown 0.8s ease-out both;
  }

  @media (max-width: 768px) {
    .hero-banner {
      padding-top: calc(var(--header-height) + 1rem);
      padding-bottom: 1.5rem;
    }

    .hero-banner__inner {
      gap: 1rem;
    }

    .hero-banner__text {
      text-align: left;
      margin-top: 0;
    }

    .hero-banner__image {
      margin-top: 0.75rem;
    }
  }
</style>
