<template>
  <div>
    <div class="main">
      <button id="modal-btn">Poke me</button>  
    </div>
    <div class="overlay" id="overlay"></div>
    <div class="modal" id="modal"></div>
  </div>
</template>

<script>

https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js

https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js

https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js

let button = document.getElementById('modal-btn');

let modal = document.getElementById('modal');
let overlay = document.getElementById('overlay');

button.addEventListener('click', function() {
  modal.classList.add('show');
  overlay.classList.add('show');
})

overlay.addEventListener('click', function() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});



export default {

};

</script>

<style scoped lang="postcss">

@use postcss-nested;
@use postcss-simple-vars;

div {
  width: 100vw;
  height: 100vh;
}

main {
  position: relative;
  display: flex;
  justify-content: center;
}

div {
  position: absolute;
  top: 0;
}

.main {
  z-index: -1;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  
}

.modal {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/325029/spiral-clipart-spiral-circle-7.png');
  background-size: cover;
  width: 50vw;
  height: 50vw;
  top: 100px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  animation-name: example;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 100%;
}

@keyframes example {
    from {
      transform: rotate(0);
      background-color: red;
  }
    to {
      transform: rotate(360deg);
      background-color: yellow;       
  }
}

.overlay, .modal {
  display: none;
}

.show {
  display: block;
}




</style>
