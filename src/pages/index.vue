<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
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
    Hello
  </div>
</template>

<style scope></style>