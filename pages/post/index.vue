<template>
  <div>
    Test
  </div>
</template>

<script>
export default {
  name: 'IndexVue',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped></style>
