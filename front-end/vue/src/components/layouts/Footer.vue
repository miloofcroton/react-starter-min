<template>
  <footer>
    <a id="surround" href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
      <img id="initial" alt="logo" src="../../assets/logo/logo.png">
      <img id="replacement" alt="logo" src="../../assets/logo/logo-alt1.png" >
    </a>
    <p>Copyright &copy; 2018. All rights reserved.</p>
    <a href="https://github.com/miloofcroton/portfolio">This website</a> by
    <a href="https://github.com/miloofcroton">me</a>.
    <ul class="info">
      <li>
        <a href="../../assets/contact/contact.vcf" target="_blank" download aria-label="Business Card">
          <font-awesome-icon icon="address-book" />
          <span class="label">Business Card</span>
        </a>
      </li>
      <li>
        <a href="mailto:jack@toumey.io" target="_blank" aria-label="Email">
          <font-awesome-icon icon="envelope" />
          <span class="label">Email</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/miloofcroton" target="_blank" aria-label="Github">
          <font-awesome-icon :icon="['fab', 'github']" />
          <span class="label">Github Profile</span>
        </a>
      </li>
      <li>
        <a href="../../assets/contact/public.key" target="_blank" download aria-label="Public Key">
          <font-awesome-icon icon="key" />
          <span class="label">Public Key</span>
        </a>
      </li>
		</ul>
  </footer>
</template>

<script>
export default {

};
</script>

<style scoped lang="postcss">

footer {
  color: black;

  p {
    /* font-weight: bolder; */
    margin: 5px auto;
  }
  a {
    font-weight: bolder;
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  #surround {
    img {
      width: 50px;
      padding-top: 10px;
    }
  }
  #replacement {
    display: none;
  }
  #surround:hover img[id="initial"] {
    display: none;
  }
  #surround:hover img[id="replacement"] {
    display: inline-block;
    cursor: pointer;
  }

  .info {    
    padding-inline-start: unset;

    li {
      display: inline;
      margin: 5px;
      list-style: none;
      font-size: 24px;
      a {
        color: black;
        .label {
          display: none;
        }
      }
    }
  }
}

</style>
