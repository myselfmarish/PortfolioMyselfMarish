<template>
  <div class="profileUpgrading">
    <h1>Profile's Upgrading</h1>
    <p>
      Sometimes clients want to just make their page look better (more modern,
      fashionable) and I happy to help. It usually takes 3-4 working days to complete the task.
      Before the process I discuss with client theme, colors and what to leave.
    </p>
    <div class="before_after">
      <div class="item">
        <img :src="firstImage" alt="img" @click="firstImgSrc=!firstImgSrc">
      </div>
      <div class="item">
        <img :src="secondImage" alt="img" @click="firstImgSrc=!firstImgSrc">
      </div>
      <div class="square"></div>
      <div class="arrow-container" @click="firstImgSrc=!firstImgSrc">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WorkProfile",
  data() {
    return {
      firstImgSrc:true
    }
  },
  computed:{
    // eslint-disable-next-line vue/return-in-computed-property
    firstImage(){
      if (this.firstImgSrc === true){
        return require(`@/assets/portfolio/before_after/1before.jpg`);
      }else if (this.firstImgSrc === false){
        return require(`@/assets/portfolio/before_after/2before.jpg`);
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    secondImage(){
      if (this.firstImgSrc === true){
        return require(`@/assets/portfolio/before_after/1after.jpg`);
      }else if (this.firstImgSrc === false){
        return require(`@/assets/portfolio/before_after/2after.jpg`);
    }
  }
}
}
</script>

<style lang="scss">
  .profileUpgrading{
    background-color: #1c1c1cff;
    font-family: $mainFont;
    h1{
      color: $global;
      text-transform: uppercase;
      font-family: $mainFont;
      margin: 0;
      text-align: center;
      padding-top: 40px;
      font-weight: 600;
    }
    p{
      margin: 20px auto;
      width: 60%;
      text-align: center;
      color: white;
      font-size: 13px;
      font-weight: 400;
    }
    .before_after{
      display: flex;
      justify-content: space-evenly;
      position: relative;
      .item{
        border: 1px solid pink;
        border-radius: 75px;
        padding: 30px;
        height: 450px;
        width: auto;
        z-index: 2;
        text-align: center;
        img{
          width: auto;
          height: 100%;
          border-radius: 50px;
          transition: .3s ease;
          &:hover{
            transform: scale(1.1);
          }
        }
      }
      .square{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        height: 100px;
        background-color: $global;
        z-index: 1;
      }
    }
  }
  $total-arrows: 3;
  $arrow-line-length: 50px;
  $arrow-line-width: 4px;
  @mixin arrow-transitions($rot: 0deg) {
    transform: translate(-50%, -50%) rotateZ($rot);
  }
  .arrow-container {
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    @include arrow-transitions(-90deg);
    &:hover {
      cursor: pointer;
      .arrow {
        top: 50%;
        &:before {
          @include arrow-transitions(-30deg);
        }
        &:after {
          @include arrow-transitions(30deg);
        }
      }
    }
  }
  .arrow {
    position: absolute;
    left: 50%;
    transition: all .4s ease;
    &:before,
    &:after {
      transition: all .4s ease;
      content: '';
      display: block;
      position: absolute;
      transform-origin: bottom right;
      background: black;
      width: $arrow-line-width;
      height: $arrow-line-length;
      border-radius: 10px;
      transform: translate(-50%, -50%) rotateZ(-45deg);
    }
    &:after {
      transform-origin: bottom left;
      transform: translate(-50%, -50%) rotateZ(45deg);
    }
    @for $i from 1 through $total-arrows {
      &:nth-child(#{$i}) {
        opacity: 0.3 * $i;
        top: 15 + (100% * $i/5);
      }
    }
  }

  @media screen and (max-width: 1350px){
    .profileUpgrading{
      .before_after{
        justify-content: space-between;
        position: relative;
        .item{
          height: 340px;
        }
      }
    }
  }
  @media screen and (max-width: 862px){
    .profileUpgrading{
      .before_after{
        flex-direction: column;
        .item{
          border-radius: 0;
          padding: 10px;
          margin: 70px auto;
          width: max-content;
          img{
            border-radius: 0;
            &:hover{
              transform: none;
            }
          }
        }
        .square{
          width: 100px;
          top: auto;
          left: 50%;
          height: 1000px;
          transform: translateX(-50%);
        }
      }
    }
    .arrow-container{
      @include arrow-transitions(0deg);
      top: 49%;
    }
  }
</style>