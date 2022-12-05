<template>
  <div class="contact">
    <h2>Thanks for taking the time to reach out. <br> How can I help you today?</h2>
    <form @submit.prevent="checkForm">
      <div class=input-cont>
        <div class='input-cont-sec'>
          <div class=" text-field">
            <label class="text-field__label" for="username">Name</label>
            <input required class="text-field__input text-field__input_valid" type="text" v-model=name>
            <div class="text-field__message"></div>
          </div>
          <div class="text-field">
            <label class="text-field__label" for="username">E-mail</label>
            <input required class="text-field__input text-field__input_valid" type="email" v-model=email>
            <div class="text-field__message"></div>
          </div>
        </div>
        <div class="textarea-field">
          <label class="text-field__label" for="username">Message</label>
          <textarea required class="text-field__input text-field__input_valid" v-model=text></textarea>
        </div>
      </div>
      <button type="submit" class="subbtn">Submit</button>
    </form>
  </div>
  <div class="output" :class="hidden ? 'hidden' : ''">
    <h2>{{name}} thank you for reaching out!</h2>
    <p>I'll get back to you as soon as possible</p>
    <button id="closeWindow" @click="closeWindow">X</button>
  </div>
</template>

<script>


export default {
  name: "ContactView",
  data() {
    return {
      hidden:true,
      text: '',
      name: '',
      email: '',
    }
  },
  methods:{
    checkForm(){
      let email = {
        name: this.name,
        email: this.email,
        text: this.text
      }
      let data = JSON.stringify(email);
      //here we would create email and store it somewhere
      console.log(data);
      this.hidden = false;
    },
    closeWindow(){
      this.hidden = true;
    }
  }
}

</script>
<style lang="scss">
body {
  background-color: $black-color ;
}

.input-cont {
  display: flex;
  width: 70%;
}

.input-cont-sec {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  align-items: center;
}

.input-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact,
form {
  font-family: $mainFont;
  label {
    font-weight: 700;
    font-size: 23px;
  }

  .subbtn {
    margin: 40px 0 0 0;
    color: $white-color;
    border: 2px solid $white-color;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0);
    padding: 20px 90px;
    font-size: 25px;
    font-weight: 500;
    font-family: $mainFont;
  }

  .subbtn:hover {
    cursor: pointer;
    filter: brightness(30%);
  }

  .text-field,
  .textarea-field {
    flex-direction: column;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .text-field {
    width: 40%;
  }

  .textarea-field {
    width: 100%;
  }

  .text-field__label {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 250px;
    border-radius: 200px;
  }

  input {
    border-radius: 60px;
  }

  /* стили для input */
  .text-field__input {
    padding: 30px 70px;
    color: black;
    background-color: #fff;
    outline: none;
    width: 100%;
    font-size: 25px;
  }

  h2 {
    margin: 40px 0 50px 0;
    font-size: 50px;
    text-align: center;
    font-family: $mainFont;
    font-weight: 700;
  }

  @media screen and (max-width: 1250px) {
    .text-field {
      width: 35% !important;
    }
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 20px !important;
    }

    .text-field {
      width: 85% !important;
    }

    textarea {

      width: 90%;

      border-radius: 100px;
    }

    .input-cont-sec {
      flex-direction: column;
    }
  }


  display: flex;
  color: $white-color;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.output{
  width: 60%;
  height: 50vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #ecc0b2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  h2, p{
    font-family: $mainFont;
    font-size: 2em;
  }
  #closeWindow{
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
    background: none;
    border: none;
    &:hover{
      color: white;
      cursor: pointer;
    }
  }
}
.hidden{
  display: none;
}
</style>