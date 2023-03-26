<template>
  <div id="other_projects">
      <h1>My Other Projects:</h1>
      <div class="projects">
        <div class="square"></div>
        <div class="Thumbnail" @click="showVapeModal">
          <img src="@/assets/portfolio/other/vaping.png" alt="vaping">
          <p>Anti Vaping Campaign</p>
        </div>
        <div class="Thumbnail" @click="showMaskModal">
          <img src="@/assets/portfolio/other/mask.png" alt="mask">
          <p>Make Up Campaign</p>
        </div>
      </div>
  </div>
  <VideoPopUpComp ref="videoPopup"
                  :video-options="vapeVideoOptions"
                  v-if="showVape"
                  text="
                    Main Goal:
                    To raise awareness about the potential health risks associated with
                    vaping and to discourage people, particularly young people,
                    from taking up vaping as a habit.
                  "
                  title="Anti Vaping Campaign"/>
  <VideoPopUpComp ref="maskPopup"
                  :video-options="maskVideoOptions"
                  v-if="showMask"
                  text="Main Goal: To create a cosmetic brand from the scratch"
                  title="Make Up Campaign"/>
</template>

<script>
import VideoPopUpComp from "@/components/VideoPopUpComp";
export default {
  name: "WorkOtherProjects",
  components:{
    VideoPopUpComp
  },
  data(){
    return{
      vapeVideoOptions:{
        autoplay:true,
        controls: true,
        muted:true,
        fill:true,
        sources:[
          {
            src:
                require('@/assets/portfolio/other/final.mp4'),
            type: 'video/mp4'
          }
        ]
      },
      maskVideoOptions:{
        autoplay:true,
        controls: true,
        muted:true,
        fill:true,
        sources:[
          {
            src:
                require('@/assets/portfolio/other/elinfinish.mp4'),
            type: 'video/mp4'
          }
        ]
      },
      showVape:false,
      showMask:false
    }
  },
  methods:{
    showVapeModal(){
      this.showVape = true;
      this.$nextTick(()=>{
        this.$refs.videoPopup.openModal();
      })
    },
    showMaskModal(){
      this.showMask = true;
      this.$nextTick(()=>{
        this.$refs.maskPopup.openModal();
      })
    }
  }
}
</script>

<style lang="scss">
  #other_projects{
    border-top: 1px solid $global;
    height: 70vh;
    position: relative;
    .square{
      position: absolute;
      width: 100%;
      top: 230px;
      transform: translateY(-50%);
      height: 100px;
      background-color: #ecc0b2;
      z-index: -1;
    }
    h1{
      color: $global;
      font-family: $mainFont;
      text-align: center;
    }
    .projects{
      display: flex;
      justify-content: space-evenly;
      .Thumbnail {
        display: inline-block;
        border: 1px solid pink;
        border-radius: 60px;
        overflow: hidden;
        padding: 20px;
        img{
          width: 400px;
          border-radius: 60px;
        }
        p{
          color: $global;
          font-family: $mainFont;
          text-align: center;
        }

        &:hover{
          cursor: pointer;
          transform: scale(1.10);
          p{
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    // styles for small screens
    #other_projects {
      .square{
        display: none;
      }
      height: auto;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      .projects {
        flex-direction: column;
        .Thumbnail {
          margin-bottom: 1rem;
          img {
            width: 100%;
          }
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    // styles for medium screens
    #other_projects {
      height: auto;
      .square{
        display: none;
      }
      h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      .projects {
        .Thumbnail {
          img {
            width: 50%;
          }
          p {
            font-size: 1.25rem;
          }
        }
      }
    }
  }

</style>