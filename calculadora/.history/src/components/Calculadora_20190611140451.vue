<template>
  <div>
    <div class="wrapper">
        <div class="display">
            0
        </div>
        <div class="btn">AC</div>
        <div class="btn">+/-</div>
        <div class="btn">%</div>
        <div class="btn">/</div>
        <div class="btn">7</div>
        <div class="btn">8</div>
        <div class="btn">9</div>
        <div class="btn">x</div>
        <div class="btn">4</div>
        <div class="btn">5</div>
        <div class="btn">6</div>
        <div class="btn">-</div>
        <div class="btn">1</div>
        <div class="btn">2</div>
        <div class="btn">3</div>
        <div class="btn">+</div>
        <div class="btn cero">0</div>
        <div class="btn">,</div>
        <div class="btn">=</div>
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
  font-size:30px;
  .display{
      grid-column: 1/5;
      background-color: #4c4545;
      color: white;
  }
}
.cero{
    grid-column: 1/3;
}
.btn{
    background-color: grey;
    border: solid 1px #4c4545;
    color: whote;

}
</style>
