<script lang="ts" setup>
import { getToken } from "firebase/messaging";

const messagingToken = ref("");

onMounted(() => {
  requestPermission()
})

function requestPermission() {
  if (!window.Notification) return

  if (window.Notification.permission === 'granted') {
    setToken()
  } else {
    window.Notification.requestPermission((value) => {
      if (value === 'granted') {
        setToken()
      }
    })
  }
}

async function setToken() {
  const { $messaging } = useNuxtApp()
  const token = await getToken($messaging, {
    vapidKey: 'BIwo-lPGyUhSkBybydZmxmc5MNePNNxDWkxZc-g4OIbEgWeyvKz7dVt9NQ9zK7tKw2Bf6RsukYEVGxKxrMQSjOs'
  })

  // Send token to server, save in user schema
  // but we're just manually doing it
  messagingToken.value = token
}

function copy() {
  navigator.clipboard.writeText(messagingToken.value)
}
</script>

<template>
  <div>{{ messagingToken }}</div>
  <button v-if="messagingToken" @click="copy">Copy to Clipboard</button>
  <button @click="requestPermission">Allow Notifications</button>
</template>