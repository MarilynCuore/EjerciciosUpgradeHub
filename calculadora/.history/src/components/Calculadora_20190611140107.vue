<template>
  <div>
    <div class="wrapper">
        <div class="display">
            0
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 250px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(50px, auto);
  .display{
      grid-column: 1/5;
      background-color: #4c4545;
      color: white;
  }
}
</style>
