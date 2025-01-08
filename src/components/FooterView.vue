<template>
  <footer class="footer flex-align flex-col rel">
    <h4 class="h4 top text-center">
      <router-link
        to="/contact"
        class="link not-to-show-active"
        style="padding: 1rem; border-radius: 4rem"
      >
        {{ $t('footerGIT') }}
      </router-link>
    </h4>

    <h2 class="h1 mail">
      <a
        :href="`mailto:vadim4web@gmail.com?subject=${encodeURIComponent(
          $t('emailSubject')
        )}`"
        class="link"
        style="padding: 1rem; border-radius: 4rem"
        target="_blank"
        rel="noopener noreferrer"
      >
        vadim4web@gmail.com
      </a>
    </h2>

    <div class="grid info w100">
      <logo-view />

      <address class="text-center">
        <h4 class="h4" :title="$t('location')">
          {{ $t('footerA1') }}, 175/14,<br />
          {{ $t('footerA2') }},<br />
          08150
        </h4>
      </address>

      <div class="contacts">
        <h4 class="h4 phone">
          <a href="tel:+380933789883" :title="$t('callMe')" target="_self">
            +380-933-789-883
          </a>
        </h4>

        <div class="links">
          <h4 class="h4">
            <a
              href="https://github.com/vadim4web"
              :title="$t('gitHub')"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              &nbsp;
            </a>
          </h4>

          <h4 class="h4">
            <a
              href="https://www.linkedin.com/in/vadim4web"
              :title="$t('linkedin')"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 17V13.5V10"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7.01L7.01 6.99889"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              &nbsp;
            </a>
          </h4>

          <h4 class="h4">
            <a
              href="https://www.facebook.com/vadim4web"
              :title="$t('facebook')"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H11H15"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              &nbsp;
            </a>
          </h4>

          <h4 class="h4">
            <a
              href="https://t.me/vadim4web"
              :title="$t('chatMe')"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8L5 12.5L9.5 14M18 8L9.5 14M18 8L14 18.5L9.5 14"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              &nbsp;
            </a>
          </h4>
        </div>
      </div>
    </div>

    <h4 class="h4 hr-above text-center w100">
      &copy; 2021-{{ new Date().getFullYear() }}
      <a
        href="https://github.com/vadim4web"
        :title="$t('gitHub')"
        target="_blank"
        rel="noopener noreferrer"
      >
        VADIM4WEB.
      </a>
      {{ $t('copyright') }}.
    </h4>
  </footer>
</template>

<script setup>
import LogoView from '@/components/LogoView.vue'
</script>

<style lang="scss" scoped>
.footer {
	justify-content: flex-end;
	left: -10dvw;
	width: 100dvw;
	padding: 0 10dvw;
	background: var(--bg2);

	.h4.hr-above {
		padding: 2.25rem 0 5rem 0;
		border-top: 0.125rem solid var(--color2);
	}

	.h4.top {
		padding: 6rem 0 1rem 0;

		& a {
			color: var(--accent0);
			text-shadow: 0 0 0.25rem var(--color50);
		}
	}

	.h1 {
		padding-top: 1rem;
		padding-bottom: 12rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1.75fr 2.5fr 2fr;
		gap: 1rem;
		height: 8rem;
		padding-bottom: 2.5rem;

		.logo-span {
			align-self: start;
			justify-self: start;
		}

		address {
			justify-self: center;
			justify-content: center;
		}

		.contacts {
			justify-self: end;
			justify-content: end;

			.phone {
				font-size: 175%;
			}
		}
	}
}

.links {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;
	padding-top: 1rem;

	.h4 {
		width: 3.5rem;
		height: 3.5rem;
	}
}

.links svg {
	width: 3.5rem;
	height: 3.5rem;
	stroke: var(--color0);
}

.mail a {
	text-decoration: underline;
}
</style>
