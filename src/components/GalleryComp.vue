<template>
  <div class="carousel-container">
    <transition name="carousel-slide" mode="out-in">
      <div class="carousel" :key="activeIndex">
        <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex }">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </transition>
    <div class="carousel-dots">
      <span v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex }" @click="setActiveIndex(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    images:{
      type:Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      intervalId: null,
      scrollInterval: 3000, // change this value to adjust scrolling interval
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.scrollRight();
    }, this.scrollInterval);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    scrollRight() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
    setActiveIndex(index) {
      if (index === this.activeIndex) return;
      clearInterval(this.intervalId);
      this.activeIndex = index;
      this.intervalId = setInterval(() => {
        this.scrollRight();
      }, this.scrollInterval);
    },
  },
};
</script>

<style lang="scss">
.carousel-container {
  position: relative;
}

.carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  width: 100%;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;
  transition: opacity .5s ease;
}

.carousel-item.active {
  display: block;
  opacity: 1;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-dots {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.carousel-dots span.active {
  background-color: $global;
}

.carousel-slide-enter-active, .carousel-slide-leave-active {
  transition: 0.5s ease;
}

.carousel-slide-enter, .carousel-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>