<template>
  <div
    id="logoOverlay"
    ref="logoOverlay"
    class="flex-col-center"
    :class="{ fadeOut: fadeOutClass }"
    :style="{ opacity: isVisible ? 'inherit' : 0, zIndex: isVisible ? 3 : 0 }"
    @animationend="handleAnimationEnd"
  >
    <div id="logo2dWrapper">
      <canvas
        id="logo2dCanvas"
        ref="logo2dCanvas"
        width="400"
        height="400"
        stroke="#808080"
      ></canvas>
      <svg
        id="svgPlaceholder"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="200" y1="400" x2="200" y2="0" />
        <line x1="200" y1="0" x2="0" y2="200" />
        <line x1="0" y1="200" x2="200" y2="200" />
        <path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" />
        <circle cx="200" cy="200" r="186" fill="none" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { state } from '@/store/'
import getThemeColor from '@/helpers/getThemeColor.js'

const totalDuration = ref(1755) // Загальна тривалість анімації в мс (2340ms for 30fps)
const isVisible = ref(true)
const fadeOutClass = ref(false)
const logoOverlay = ref(null)
const logo2dCanvas = ref(null)

let startTime = null

function startAnimation() {
  document.body.classList.add('hide-overflow')
  const overlay = logoOverlay.value || document.getElementById('logoOverlay')
  overlay.classList.remove('fade-out')
  const canvas = logo2dCanvas.value || document.getElementById('logo2dCanvas')
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
  ctx.lineWidth = 28
  ctx.strokeStyle = getThemeColor()

  const drawFunctions = [
    progress => {
      ctx.beginPath()
      ctx.moveTo(200, 400)
      ctx.lineTo(200, 400 - progress)
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.moveTo(200, 0)
      ctx.lineTo(200 - progress, progress)
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.moveTo(0, 200)
      ctx.lineTo(progress, 200)
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.ellipse(
        200,
        107,
        93,
        93,
        Math.PI / 2,
        0,
        (-Math.PI / 180) * progress,
        true
      )
      ctx.stroke()
    },
    progress => {
      ctx.beginPath()
      ctx.ellipse(
        200,
        200,
        186,
        186,
        -Math.PI / 2,
        0,
        (-Math.PI / 180) * progress,
        true
      )
      ctx.stroke()
    },
  ]

  const segmentDurations = [0.15, 0.11, 0.08, 0.22, 0.44].map(
    percentage => totalDuration.value * percentage
  )
  const segmentMaxValues = [400, 200, 200, 180, 360]

  function animate(timestamp) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime

    let accumulatedTime = 0

    for (let i = 0; i < drawFunctions.length; i++) {
      const segmentStart = accumulatedTime
      const segmentEnd = accumulatedTime + segmentDurations[i]

      if (elapsed >= segmentStart && elapsed <= segmentEnd) {
        const segmentProgress = (elapsed - segmentStart) / segmentDurations[i]
        const progressValue = segmentMaxValues[i] * segmentProgress
        drawFunctions[i](Math.min(progressValue, segmentMaxValues[i]))
      } else if (elapsed > segmentEnd) {
        drawFunctions[i](segmentMaxValues[i])
      }

      accumulatedTime += segmentDurations[i]
    }

    if (elapsed < totalDuration.value) {
      requestAnimationFrame(animate)
    } else if (state.showLoader) {
      startTime = null // Reset the start time
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
      requestAnimationFrame(animate) // Restart the animation
    } else {
      // Add fade-out animation class
      fadeOutClass.value = true
    }
  }

  requestAnimationFrame(animate)
}

const handleAnimationEnd = () => {
  isVisible.value = false
  fadeOutClass.value = false
  document.body.classList.remove('hide-overflow')
}

onMounted(() => {
  startAnimation()
})

// Watch for changes in the state.showLoader value
watch(
  () => state.showLoader,
  newValue => {
    if (newValue) {
      isVisible.value = newValue
      // Restart animation when loader becomes visible
      startAnimation()
    }
  }
)
</script>

<style scoped>
@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  animation: fade-out 1170ms forwards ease-out;
  -webkit-animation: fade-out 1170ms forwards ease-out;
  -moz-animation: fade-out 1170ms forwards ease-out;
}

#logo2dWrapper {
  position: relative;
  z-index: 0;
}

#logo2dWrapper,
#logo2dCanvas,
#svgPlaceholder {
  width: 50vmin;
  height: 50vmin;
}

#svgPlaceholder {
  position: absolute;
  top: 0;
  left: 0;
  stroke-width: 28px;
  -webkit-stroke-width: 28px;
  -moz-stroke-width: 28px;
  stroke: var(--gray);
  -webkit-stroke: var(--gray);
  -moz-stroke: var(--gray);
}

#logo2dCanvas {
  position: relative;
  stroke: var(--color0);
  -webkit-stroke: var(--color0);
  -moz-stroke: var(--color0);
  z-index: 1;
}
</style>
