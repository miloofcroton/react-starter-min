<template>
  <main>
    <h2>Our Philosophy</h2>
    <p>
      The Starting Strength System makes use of the body's most basic movement patterns – barbell exercises that involve all the body’s muscle mass – utilized over the longest effective range of motion and loaded progressively, to force the adaptations necessary for increased strength.
    </p>
    <p>
      Unlike other popular exercise protocols, Starting Strength is a training system – a long-term process designed for getting stronger over time, not a random collection of exercises that just make you hot, sweaty, sore, confused, and tired today.
    </p>


  </main>
</template>

<script>

export default {

};

</script>

<style scoped>

main {
  color: white;
}
h2, p {
  text-shadow: 3px 3px 3px black;
}
h2 {
  margin-top: 5%;
  font-size: 36px;
}

p.center {
  text-align: center;
}

p {
  font-size: 24px;
  text-align: left;
  width: 45%;
  padding: 10px;
  margin: 10px auto;
}

@media screen and (max-width: 480px) {

    p {
    width: 50%;
    }

    h2 {
      margin: 5% 10%;
    }
    
}

</style>
