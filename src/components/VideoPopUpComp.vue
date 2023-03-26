<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{title}}</h2>
        <button class="modal-close" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <p>{{text}}</p>
        <div class="videoModal">
          <VideoPlayer :options="videoOptions"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";
export default {
  props:{
    videoOptions:{
      type: Object,
      required: true
    },
    title:{
      type:String,
      required:true
    },
    text:{
      type:String,
      required:true
    }
  },
  name: "VideoPopUpComp",
  components:{
    VideoPlayer
  },
  data(){
    return{
      isOpen:false
    }
  },
  methods:{
    openModal(){
      this.isOpen = true;
    },
    closeModal(){
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss">
.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0,0,0,0.7);
}
.modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-content{
  width: 80%;
  max-width: 800px;
  height: 600px;
  background-color: $black-color;
  position: relative;
  padding: 20px;
  border-radius: 55px;
  overflow: hidden;
  border: 1px solid $global;
}
.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2{
    font-family: $mainFont;
    color: $global;
    text-align: center;
    width: 100%;
  }
}
.modal-close{
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  color:white;
}
.modal-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    color: white;
    font-family: $mainFont;
    width: 80%;
    text-align: center;
  }
}
.videoModal{
  margin-top: 20px;
  width: 100%;
  height: 400px;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
}
</style>