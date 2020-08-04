<template>
  <div id="contact">
    <h1 class="lg-heading">
      Contact
      <span class="text-secondary">Me</span>
    </h1>
    <h2 class="sm-heading">
      This is how you can reach me...
    </h2>
    <div class="boxes">
      <div>
        <span class="text-secondary">Email: </span> sterling000@gmail.com
      </div>
      <div>
        <span class="text-secondary">Phone: </span> (604) 374-0268
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/styles/config.scss";
// Contact Page
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  div {
    font-size: 2rem;
    border: 3px #fff solid;
    padding: 1.5rem 2.5rem;
    margin-bottom: 3rem;
    @include easeOut;

    &:hover {
      padding: 0.5rem 1.5rem;
      background: $secondary-color;
      color: set-text-color($secondary-color);
      span {
        color: set-text-color($secondary-color);
      }
    }
  }
}
@import "../assets/styles/mobile.scss"
</style>