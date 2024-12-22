<template>
  <footer class="footer">
    <h4 class="h4 top">
      <router-link
        to="/contact"
        class="link"
        style="padding: 1rem; margin: -1rem; border-radius: 4rem;"
      >
        {{ $t('footerGIT') }}
      </router-link>
    </h4>

    <h2 class="h1 mail">
      <a
        href="mailto:vadim4web@gmail.com"
        class="link"
        style="padding: 1rem; margin: -1rem; border-radius: 4rem"
        >vadim4web@gmail.com</a
      >
    </h2>

    <div class="grid info">
      <logo-view />

      <address>
        <h4
          class="h4"
          :title="$t('location')"
        >
          {{ $t('footerA1') }}, 175/14,<br />
          {{ $t('footerA2') }},<br />
          08150
        </h4>
      </address>

      <div class="contacts">
        <h4 class="h4">
          <a href="tel:+380933789883" :title="$t('callMe')">
            +380-933-789-883
          </a>
        </h4>

        <div class="links">
          <h4 class="h4">
            <a href="https://github.com/vadim4web" :title="$t('gitHub')">
              <img src="/github.svg" alt="github logo" />&nbsp;
            </a>
          </h4>

          <h4 class="h4">
            <a href="https://t.me/vadim4web" :title="$t('chatMe')">
              <img src="/telegram.png" alt="telegram logo" />&nbsp;
            </a>
          </h4>

          <h4 class="h4">
            <a href="mailto:vadim4web@gmail.com" :title="$t('emailMe')">
              <img src="/mail.png" alt="mail logo" />&nbsp;
            </a>
          </h4>
        </div>
      </div>
    </div>

    <h4 class="h4 hr-above">
      &copy; 2021-{{ new Date().getFullYear() }}. VADIM4WEB. {{ $t('copyright') }}.
    </h4>
  </footer>
</template>

<script setup>
import LogoView from '@/components/LogoView.vue'
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: var(--bg2);
  padding: 0 10dvw;
  width: 100dvw;
  position: relative;
  left: -10dvw;

  .h4 {
    width: 100%;
  }

  .h4.hr-above {
    text-align: center;
    border-top: 0.125rem solid var(--color2);
    padding: 2.25rem 0 5rem 0;
  }

  .h4.top {
    text-align: center;
    padding: 6rem 0 1.5rem 0;

    & a {
      color: var(--accent0);
      text-shadow: 0 0 0.25rem var(--color50);
    }
  }

  .h1 {
    padding-bottom: 12rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    gap: 2rem;
    padding-bottom: 2.5rem;
    width: 100%;
    height: 8rem;

    address {
      text-align: center;
      justify-self: center;
      justify-content: center;
    }

    .contacts {
      justify-self: end;
      justify-content: end;
    }
  }
}

.links {
  padding-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  .h4 {
    width: 3rem;
  }
}

.links img {
  width: 2.5rem;
  height: 2.5rem;
  filter: invert(var(--is-dark));
}

.mail a {
  text-decoration: underline;
}
</style>
