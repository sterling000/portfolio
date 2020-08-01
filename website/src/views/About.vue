<template>
    <div id='about'>
        <h1 class="lg-heading">
            About
            <span class="text-secondary">
                Me
            </span>
        </h1>
        <h2 class="sm-heading">
            Let me tell you a few things...
        </h2>
        <div class="about-info">
            <img src="../assets/portrait-small.jpg" alt="Brian Sterling" class="bio-image">

            <div class="bio">
                <h3 class="text-secondary">BIO</h3>
                <p>I'm a senior software engineer with over 10 years of experience. I started my career making games for companies including The Walt Disney Company and Electronic Arts. 
                    I transitioned into Full Stack Web Development as a Digital Nomad and started my own business working while travelling.
                    I like to work smart, not hard, and in my spare time you can find me playing Magic: The Gathering with a webcam or surfing.
                </p>
            </div>

            <div class="job job-1">
                <h3>Kixeye Ltd.</h3>
                <h6>Senior Software Engineer</h6>
                <p>With Kixeye, I branched out into fullstack, learning microservices, sharpening my Unity skills, until eventually leading the combat team and focusing on AI.</p>
            </div>

            <div class="job job-2">
                <h3>Hyper Hippo Games</h3>
                <h6>Senior Unity Developer | Game Champion</h6>
                <p>With Hyper Hippo, I broadened my horizons with experience across multiple projects following the lean startup model. I prototyped all kinds of different games from idle, mmo, 
                    simulation, arcade sports moba and first-person-shooter. I implemented advertisement and analytics platforms, in-app-purchases, a/b tests, leaderboards, achievements and notifications. 
                    I also got to expand AdVenture Capitalist to new platforms including Steam, HTML5, Facebook Arcade, Xbox One, Playstation 4, and Kindle Fire.</p>
            </div>

            <div class="job job-3">
                <h3>Disney Interactive</h3>
                <h6>Senior Software Engineer</h6>
                <p>At Club Penguin, I lead a team of 8 people in developing features and games.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/config.scss";

#about{
    min-height: calc(100vh - 6.5vh);
    padding: 15vh 0 0 0;
}
.about-info {
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    'bioimage bio bio'
    'job1 job2 job3';
  grid-template-columns: repeat(3, 1fr);

  .bio-image {
    grid-area: bioimage;
    width: 250px;
    margin: auto;
    border-radius: 50%;
    border: $secondary-color 3px solid;
  }

  .bio {
    grid-area: bio;
    font-size: 1.5rem;
  }

  .job-1 {
    grid-area: job1;
  }

  .job-2 {
    grid-area: job2;
  }

  .job-3 {
    grid-area: job3;
  }

  .job {
    background: lighten($primary-color, 5);
    padding: 0.5rem;
    border-bottom: $secondary-color 5px solid;
  }
}
@import "../assets/styles/mobile.scss";
</style>