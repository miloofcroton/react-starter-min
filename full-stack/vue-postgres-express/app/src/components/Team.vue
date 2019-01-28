<template>
  <main>
    <h2>Team Big Cats</h2>
      <img id="team-pic" src="../assets/team.jpg">
    <ul class="team-section">
      <li class="main-team"> <a href="https://github.com/Big-Cats">Check us out on Github</a></li>
      <li class="profile-section">
        <ul>
          <li class="profile">
            <img src="../assets/profiles/mack.jpeg">
            <a href="https://github.com/MackenzieBerliner-Glasser">Mack Berliner</a>
            <p>Mack has a torn knee, but he strives to be a pro athlete one day. He's thinking about curling. No, not the exercise that requires muscle.</p>
          </li>
          <li class="profile">
              <img src="../assets/profiles/alex.jpeg">
              <a href="https://github.com/acrankin">Alex Rankin</a>
              <p>Alex is widely known to wrestle bears when he gets drunk. That's why we feed him coffee and keep him happy.</p>
          </li>
          <li class="profile">
            <img src="../assets/profiles/jack.png">
            <a href="https://github.com/miloofcroton">Jack Toumey</a>
            <p>Jack never met a cookie that he didn't like, but if he did, he would probably say it was 'crumby'.</p>
          </li>
        </ul>
      </li>
    </ul>

    <p>
      
    </p>


  </main>
</template>

<script>

export default {

};

</script>

<style scoped>

#team-pic {
  width: 75%;
}

.team-section {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
}
.profile a, .main-team a {
  display: block;
  color: white;
  font-size: 28px;
  text-shadow: 3px 3px 3px black;
}
.team-section, .main-team, .profile-section, .profile {
  border: none;
}
.profile {
  margin: 10px;
}
.profile img {
  width: 75%;
}
.profile p {
  font-size: 18;
  margin: 0px;
  width: 100%;
}



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
