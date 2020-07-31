<template>
  <div id='home'>
    <h1 class="lg-heading">
      Brian
      <span class="text-secondary">Sterling</span>
    </h1>
    <h2 class="sm-heading">
      Web Developer, Programmer & Entrepreneur
    </h2>
    <div class="icons">
      <a href="#!">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/brian-sterling-b02b3214/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/sterling000">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import "../assets/styles/config.scss";

#home{
  min-height: calc(100vh - 12.5vh);
  overflow: hidden;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: 400;

  &.lg-heading {
    font-size: 6rem;
  }

  &.sm-heading {
    margin-bottom: 2rem;
    padding: 0.2rem 1rem;
    background: rgba(lighten($primary-color, 2), 0.5);
  }
}

a{
  text-decoration: none;
  padding: 0.4rem;

  &:visited{
    color: #fff;
  }
  &:hover{
    color: $secondary-color;
  }
}
</style>