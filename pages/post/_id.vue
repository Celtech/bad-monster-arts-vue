<template>
  <div />
</template>

<script>
export default {
  name: 'IdVue',
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped></style>
