<template>
  <div id="beinf">
    <div class="gallery">
      <GalleryComp :images="pictures"/>
    </div>
    <h1>Currently I am working here:</h1>
    <div class="text">
      <h3>What Is It?</h3>
      <h5>Health & wellness website</h5>
      <h3>What is The Goal?</h3>
      <h5>Increase engagement while providing value to the audience</h5>
      <div class="beinf_border">
        <h2>MY responsibilities:</h2>
        <ul class="first_list">
          <li>Develop and promote a clear brand message using social media platforms</li>
          <li>Design and edit graphics, visuals, and videos for Facebook and Instagram’s posts, ads, reels and stories for each platform</li>
          <li>Work with the marketing department to get an understanding of the short term and long-term marketing targets and then develop content strategies accordingly</li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <img src="@/assets/portfolio/beinf/logo1.png" alt="logo">
    </div>
  </div>
</template>

<script>
import GalleryComp from "@/components/GalleryComp";
export default {
  name: "WorkBeInf",
  components:{
    GalleryComp
  },
  data(){
    return{
      pictures:[
        { src: require('@/assets/portfolio/beinf/1.png'), alt: 'Image 1'},
        { src: require('@/assets/portfolio/beinf/2.png'), alt: 'Image 2'},
        { src: require('@/assets/portfolio/beinf/3.png'), alt: 'Image 3'},
        { src: require('@/assets/portfolio/beinf/4.png'), alt: 'Image 4'}
      ]
    }
  }
}
</script>

<style lang="scss">
#beinf {
  height: 800px;
  background-color: #1c1c1cff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid $global;
  h1{
    position: absolute;
    color: $global;
    font-family: $mainFont;
  }
  .text{
    align-self: center;
    color: white;
    text-align: center;
    font-family: $mainFont;
    width: 50%;
    h3, h5, h2{
      font-weight: 500;
      margin:  10px auto 20px;
    }
    .beinf_border{
      padding: 10px 30px;
      border: 3px solid $global;
      border-radius: 100px;
      .first_list{
        list-style-type: '\2713\ ';
      }
    }
  }
  .gallery{
    width: 400px;
  }
  .logo{
    position: absolute;
    top: -35px;
    right: -100px;
    width: 300px;
    img{
      width: 85%;
    }
  }
}
@media screen and (max-width: 1350px){
  #beinf{
    .logo{
      top: -30px;
      right: -40px;
      width: 220px;
    }
  }
}

@media screen and (max-width: 862px){
  #beinf{
    flex-direction: column;
    justify-content: normal;
    height: max-content;
    .text{
      margin-top: 50px;
      width: 80%;
    }
    .gallery{
      text-align: center;
    }
    .logo{
      top: -20px;
      right: -34px;
      width: 150px;
    }

  }
}
@media screen and (max-width: 768px){
  #beinf{
    h1{
      font-size: 24px;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
    }
    .text{
      h3{
        font-size: 24px;
      }
      h5{
        font-size: 18px;
      }
      h2{
        font-size: 28px;
      }
      .beinf_border{
        padding: 10px;
      }
    }
    .gallery{
      width: 100%;
      margin-top: 150px;
    }
    .logo{
      top: -10px;
      right: -18px;
      width: 100px;
      img{
        width: 70%;
      }
    }
  }
}

@media screen and (max-width: 480px){
  #beinf{
    h1{
      font-size: 20px;
      top: 60px;
    }
    .text{
      h3{
        font-size: 20px;
      }
      h5{
        font-size: 16px;
      }
      h2{
        font-size: 24px;
      }
      .beinf_border{
        padding: 10px;
      }
    }
    .gallery{
      width: 100%;
    }
    .logo{
      top: -10px;
      right: -10px;
      width: 80px;
      img{
        width: 70%;
      }
    }
  }
}
</style>