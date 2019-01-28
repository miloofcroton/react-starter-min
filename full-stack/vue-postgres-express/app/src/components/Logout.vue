<template>
  <main>
    <h2>You are now logged out!</h2>

    <p class="center">
      Lift, eat, sleep, repeat. May <a href="http://bookofbrodin.wikia.com/wiki/Book_of_Brodin_Wiki">Brodin</a> be with you.
    </p>

    <img src="../assets/flag.png">
  </main>
</template>

<script>
export default {

  data() {
    return {
      proof: `
        
      `
    };
  }


};
</script>

<style scoped>

h2, p, a{
  color: white;
  text-shadow: 3px 3px 3px black;
}


h2 {
  font-size: 36px;
}

p.center {
  text-align: center;
}

p {
  font-size: 18px;
  text-align: left;
  width: 30%;
  padding: 10px;
  margin: 10px auto;
}

image {
  margin-top: 100px;
  width: 700px;
}

</style>
