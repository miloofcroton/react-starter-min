<template id="neighborhood-template">
  <div class="form-control">
    <label>
      {{ label }}
    </label>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    label: String,
  }
};

</script>

<style>

.form-control {
  /* width:fit-content; */
  text-align: left;
  /* border: 1px solid black; */
}

label {
  font-weight: bolder;
  margin: .4em;
}


</style>
