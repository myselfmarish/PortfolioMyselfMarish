<template>
  <div>
    <div class="concept">
      <div class="item">
        <img src="@/assets/portfolio/1.jpeg" alt="1">
        <span>Celebrating Agency</span>
      </div>
      <h1>Come up with a concept <br> from scratch? <u>Easy</u></h1>
      <div class="item">
        <img src="@/assets/portfolio/2.jpeg" alt="1">
        <span>Laser Hair removal studio</span>
      </div>
    </div>
    <div class="pinterest">
      <h2>
        You can find my <br>
        design works here
      </h2>
      <a href="https://ru.pinterest.com/myselfmarish/" target="_blank">
        <img src="@/assets/portfolio/pinterest.png" alt="pinterest">
      </a>
    </div>
    <div class="video">
      <VideoPlayer :options="videoOptions"/>
    </div>
    <div class="end">
      <h2>I occasionally take on freelance opportunities.</h2>
      <p>
        Have an exciting project where you need some help? <br>
        Send me over a message, and <u @click="goToContact">let's chat.</u>
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import VideoPlayer from "@/components/VideoPlayer";
import 'video.js/dist/video-js.css'

export default {
  name: "WorkConcept",
  components:{
    VideoPlayer
  },
  data(){
    return {
      videoOptions:{
        autoplay:true,
        controls: true,
        muted:true,
        fill:true,
        sources:[
          {
            src:
            require('@/assets/portfolio/video/final.mp4'),
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  methods: {
    goToContact: () => {
      router.replace("/contact");
    }
  }
}
</script>

<style lang="scss">
  .concept{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 80px 0 ;
    .item{
      padding: 15px;
      border: 1px solid pink;
      border-radius: 50px;
      position: relative;
      text-align: center;
      img{
        border-radius: 40px;
        height: 550px;
      }
      span{
        color: white;
        position: absolute;
        bottom: -50px;
        width: 150px;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        font-family: $mainFont;
        font-weight: 600;
      }
    }
    h1{
      color: $global;
      text-align: center;
      font-family: $mainFont;
      font-weight: 600;
    }
  }
  .pinterest{
    width: 100%;
    height: 200px;
    background-color: $global;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
      font-family: $mainFont;
      font-weight: 600;
    }
    a{
      width: 70px;
      height: 70px;
      margin-left: 30px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .video{
    height:90vh;
    width: 100%;
  }
  .end {
    text-align: center;
    color: white;
    font-family: $mainFont;
    width: 435px;
    margin: 100px auto;

    h2 {
      font-size: 32px;
    }

    p{
      font-weight: 400;
    }

    u:hover {
      cursor: pointer;
      color: black;
    }
  }

  @media screen and (max-width: 862px){
    .concept{
      flex-direction: column;
      h1{
        margin: 100px 0;
      }
    }
    .end{
      width: 90%;
    }
  }
</style>