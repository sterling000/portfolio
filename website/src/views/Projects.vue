<template>
    <div id='work'>
        <h1 class="lg-heading">
            My
            <span class="text-secondary">
                Work
            </span>
        </h1>
        <h2 class="sm-heading">
            What I've been up to...
        </h2>
        <div class="projects">
            <div class="item">
                <a href="#!">
                    <img src="https://via.placeholder.com/125"/>
                </a>
                <a href="#" class="btn-light">
                    <i class="fas fa-eye"></i>Project
                </a>
                <a href="#" class="btn-dark">
                    <i class="fab fa-github"></i>Github
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="https://via.placeholder.com/125"/>
                </a>
                <a href="#" class="btn-light">
                    <i class="fas fa-eye"></i>Project
                </a>
                <a href="#" class="btn-dark">
                    <i class="fab fa-github"></i>Github
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="https://via.placeholder.com/125"/>
                </a>
                <a href="#" class="btn-light">
                    <i class="fas fa-eye"></i>Project
                </a>
                <a href="#" class="btn-dark">
                    <i class="fab fa-github"></i>Github
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="https://via.placeholder.com/125"/>
                </a>
                <a href="#" class="btn-light">
                    <i class="fas fa-eye"></i>Project
                </a>
                <a href="#" class="btn-dark">
                    <i class="fab fa-github"></i>Github
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="https://via.placeholder.com/125"/>
                </a>
                <a href="#" class="btn-light">
                    <i class="fas fa-eye"></i>Project
                </a>
                <a href="#" class="btn-dark">
                    <i class="fab fa-github"></i>Github
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/config.scss";

// Work/Projects
.projects {
  display: grid;
  grid-gap: 0.7rem;
  grid-template-columns: repeat(3, 1fr);
    .item{
        a{
            padding: 0;
        }
    }
  img {
    width: 100%;
    border: 3px #fff solid;

    &:hover {
      opacity: 0.5;
      border-color: $secondary-color;
      @include easeOut;
    }
  }
}

// Button Styles
.btn {
  display: block;
  padding: 0.5rem 1rem;
  border: 0;
  margin-bottom: 0.3rem;
  &:hover {
    background: $secondary-color;
    color: set-text-color($secondary-color);
  }
}

.btn-dark {
  @extend .btn;
  background: darken($primary-color, 50);
  color: #fff;
}

.btn-light {
  @extend .btn;
  background: lighten($primary-color, 50);
  color: #333;
}
@import "../assets/styles/mobile.scss";
</style>