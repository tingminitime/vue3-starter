<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div class="mb-2">
      Vue 3 Starter Template
    </div>

    <p class="mb-6 text-sm text-gray-700 dark:text-gray-300">
      <em>
        This Vue 3 template is inspired by <Link href="https://github.com/antfu/vitesse-lite">antfu/vitesse-lite</Link>
      </em>
    </p>

    <TheCounter class="mb-6" />

    <TheInput
      v-model="name"
      placeholder="What's your name ?"
      autocomplete="off"
      class="mb-4"
      @keydown.enter="go"
    />

    <button
      type="button"
      class="my-btn mx-auto"
      :disabled="!name"
      @click="go"
    >
      Go
    </button>
  </div>
</template>

<style scope></style>
