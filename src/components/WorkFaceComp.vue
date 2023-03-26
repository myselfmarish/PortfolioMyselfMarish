<template>
  <div class="work">
    <img src="@/assets/portfolio/gif/main.gif" @load="showGif = true" v-show="showGif" alt="gif">
    <p v-show="!showGif">Loading...</p>
    <a href="https://drive.google.com/file/d/16L8IK5c5ThqbNTN72LaSg5LEU4jYxccO/view?usp=sharing" target="_blank">
      Take a look at my resume
    </a>
  </div>
</template>

<script>
export default {
  name: "WorkFaceComp",
  data(){
    return{
      showGif: false
    }
  }
}
</script>

<style lang="scss">
.work {
  height: 800px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  a {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    border: none;
    border-radius: 30px;
    background-color: antiquewhite;
    font-size: 20px;
    text-decoration: none;
    color: black;
    font-family: $mainFont;
    font-weight: 600;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 900px){
  .work{
    height: 600px;

    a{
      font-size: 15px;
    }
  }
}
@media screen and (max-width: 500px){
  .work{
    height: 400px;

    a{
      color: black;
      background-color: $global;
      cursor: pointer;
      width: 100%;
      text-align: center;
      border: none;
      bottom: -7px;
      border-radius: 0;
    }
  }
}
</style>