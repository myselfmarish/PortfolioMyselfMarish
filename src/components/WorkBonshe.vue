<template>
  <div id="bon_she">
    <div class="text">
      <h3>What Is It?</h3>
      <h5>Korean Cosmetics Brand</h5>
      <h3>What is The Goal?</h3>
      <h5>Increase the Brand Awareness in the Russian Market</h5>
      <div class="bon_she_border">
        <h2>RESULT</h2>
        <ul class="first_list">
          <li>+1000 followers without using paid methods of promotion</li>
          <li>acquaintance with the product of more than 10,000 people</li>
          <li>monthly sales were increased by 5 times</li>
        </ul>
      </div>
      <div class="tasksUpper">
        <h3>My tasks:</h3>
        <ul class="second_list">
          <li>Instagram (Content Creating)</li>
          <li>Connection With Potential Customers</li>
          <li>Production Of Filming</li>
          <li>Copy-writing</li>
          <li>Working With Marketplaces</li>
        </ul>
      </div>
    </div>
    <div class="gallery">
<!--      <img src="@/assets/portfolio/bonshes/1.png" alt="phone" class="phoneImg">-->
      <GalleryComp :images="pictures"/>
    </div>
    <div class="tasksLower">
      <h3>My tasks:</h3>
      <ul class="second_list">
        <li>Instagram (Content Creating)</li>
        <li>Connection With Potential Customers</li>
        <li>Production Of Filming</li>
        <li>Copy-writing</li>
        <li>Working With Marketplaces</li>
      </ul>
    </div>
    <div class="logo">
      <img src="@/assets/portfolio/bonshes/bonshe.png" alt="logo">
    </div>
  </div>
</template>

<script>
import GalleryComp from "@/components/GalleryComp";
export default {
  name: "WorkBonshe",
  components:{
    GalleryComp
  },
  data(){
    return{
      pictures:[
        { src: require('@/assets/portfolio/bonshes/1.png'), alt: 'Image 1'},
        { src: require('@/assets/portfolio/bonshes/2.png'), alt: 'Image 2'},
        { src: require('@/assets/portfolio/bonshes/3.png'), alt: 'Image 3'},
        { src: require('@/assets/portfolio/bonshes/4.png'), alt: 'Image 4'}
      ]
    }
  }
}
</script>

<style lang="scss">
#bon_she {
  height: 800px;
  background-color: #1c1c1cff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
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
    .bon_she_border{
      padding: 10px 30px;
      border: 3px solid $global;
      border-radius: 100px;
      .first_list{
        list-style-type: '\2713\ ';
      }
    }
    .second_list{
      list-style: none;
      padding: 0;
      columns:2;
      li{
        display: inline-block;
        padding: 10px;
      }
    }
  }
  .gallery{
      width: 400px;
  }
  .logo{
    position: absolute;
    top: -35px;
    left: -50px;
    width: 300px;
    img{
      width: 100%;
    }
  }
}
.tasksLower{
  display: none;
}
@media screen and (max-width: 1350px){
  #bon_she{
    .logo{
      top: -30px;
      left: -40px;
      width: 220px;
    }
  }
}

@media screen and (max-width: 862px){
  #bon_she{
    flex-direction: column;
    justify-content: normal;
    height: max-content;
    .tasksUpper{
      display: none;
    }
    .tasksLower{
      display: block;
      text-align: center;
      h3{
        font-family: $mainFont;
        color: white;
        font-weight: 500;
        margin:  10px auto 20px;
      }
      .second_list{
        list-style: none;
        padding: 0;
        columns:1;
        color: white;
        font-family: $mainFont;
        li{
          display: block;
          padding: 10px;
        }
      }
    }
    .text{
      margin-top: 50px;
      width: 80%;
    }
    .gallery{
      text-align: center;
    }
    .logo{
      top: -20px;
      left: -34px;
      width: 150px;
    }

  }
}
</style>