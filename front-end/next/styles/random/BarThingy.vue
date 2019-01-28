<template>
  <div id="squares">
    <div class="square" id="red"></div>
    <div class="square" id="pink"></div>
    <div class="square" id="purple"></div>
    <div class="square" id="deepPurple"></div>
    <div class="square" id="indigo"></div>
    <div class="square" id="blue"></div>
    <div class="square" id="lightBlue"></div>
    <div class="square" id="cyan"></div>
    <div class="square" id="teal"></div>
    <div class="square" id="green"></div>
    <div class="square" id="lightGreen"></div>
    <div class="square" id="lime"></div>
    <div class="square" id="yellow"></div>
    <div class="square" id="amber"></div>
    <div class="square" id="orange"></div>
    <div class="square" id="deepOrange"></div>
  </div>
</template>

<script>

https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js

https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js

https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js

const red = document.getElementById("red"),
  pink = document.getElementById("pink"),
  purple = document.getElementById("purple"),
  deepPurple = document.getElementById("deepPurple"),
  indigo = document.getElementById("indigo"),
  blue = document.getElementById("blue"),
  lightBlue = document.getElementById("lightBlue"),
  cyan = document.getElementById("cyan"),
  teal = document.getElementById("teal"),
  green = document.getElementById("green"),
  lightGreen = document.getElementById("lightGreen"),
  lime = document.getElementById("lime"),
  yellow = document.getElementById("yellow"),
  amber = document.getElementById("amber"),
  orange = document.getElementById("orange"),
  deepOrange = document.getElementById("deepOrange");

TweenMax.staggerTo([red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange], 1, {
  scale: 0,
  opacity: 0,
  repeat: -1,
  yoyo: true
}, 0.1 /* 0.1 is the stagger time (time bewteen starts) */);


export default {

};

</script>

<style scoped lang="postcss">

#squares {
  text-align: center;
  margin: 100px 0;
}

.square {
  position: relative;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  display: inline-block;
}

#red { background-color: #d32f2f; }
#pink { background-color: #c2185b; }
#purple { background-color: #7b1fa2; }
#deepPurple { background-color: #512da8; }
#indigo {background-color: #303f9f; }
#blue { background-color: #1976d2; }
#lightBlue { background-color: #0288d1; }
#cyan { background-color: #0097a7; }
#teal { background-color: #00796b; }
#green { background-color: #388e3c; }
#lightGreen { background-color: #689f38; }
#lime { background-color: #afb42b; }
#yellow { background-color: #fbc02d; }
#amber { background-color: #ffa000; }
#orange { background-color: #f57c00; }
#deepOrange { background-color: #e64a19; }



</style>
