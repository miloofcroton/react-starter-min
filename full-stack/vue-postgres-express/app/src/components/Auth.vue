<template>
  <main id="auth-page">
    <div class="call-to-action">
      <h2>{{ label }}</h2>
      <button 
        class="add-button"
        @click="type = isSignUp ? 'signIn' : 'signUp'">
        {{
          isSignUp
            ? "Already a user? Click here to sign in"
            : "New? Click here to sign up"
        }}
      </button>
    </div>
    
    <div class="auth-form">
      <pre>{{ error }}</pre>
      <form @submit.prevent="handleSubmit">


        <FormControl v-show="isSignUp" label="first name" class="auth-text">
          <input class="email-input" v-model="credentials.first">
        </FormControl>
        <FormControl v-show="isSignUp" label="last name" class="auth-text">
          <input class="email-input" v-model="credentials.last">
        </FormControl>
        <FormControl label="email"  class="auth-text">
          <input class="email-input" v-model="credentials.email">
        </FormControl>
        <FormControl label="password" class="auth-text">
          <input 
            :type="show ? 'text' : 'password'" 
            v-model="credentials.password">
        </FormControl>

        <FormControl class="centered">
          <button 
            @click="show = !show"
            type="button"
            class="bottom-button"
          >
            {{ show ? 'Hide' : 'Show' }}
          </button>
          <button type="submit" class="bottom-button">                  
            {{ label }}
          </button>
        </FormControl>

      </form>
    </div>
  </main>
</template>

<script>
import { signUp, signIn } from '../services/api';
import FormControl from './FormControl';

export default {
  props: {
    onUser: Function,
    updateCoreData: Function
  },
  components: {
    FormControl
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      show: false,
      type: 'signIn',
      error: null
    };
  },
  computed: {
    isSignUp() {
      return this.type === 'signUp';
    },
    label() {
      return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
  },
  watch: {
    type(newType, oldType) {
      if(newType !== oldType) {
        this.error = null;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.error = null;
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(user => {
          this.onUser(user);
          this.updateCoreData();
          console.log(user);
          this.$router.push('/dashboard');
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};

</script>

<style scoped>

.centered {
  display: grid;
  justify-items: center;
}

.add-button {
  width: 55%;
  margin: 5px auto;
}
.bottom-button {
  border-radius: 10%;
  background-color: black;
  color: white;  
  text-shadow: 2px 2px black;
  font-size: 22px;
  padding: 4px;
  cursor: pointer;
  width: 70%;
  margin: 5px auto;

}
h2 {
  margin: 0 auto;
}
#auth-page {
  background: url(../assets/background.jpg);
  background-size: cover;
}
.call-to-action {
  text-decoration: none;
  background-color: rgba(255, 255, 255, .3);
  color: var(--gymred);
  text-shadow: 2px 2px black;
  font-size: 40px;
  border: 5px solid var(--gymred);
  border-radius: 20px 20px;
  padding: 15px;
  font-family: BOMBARD, "Avenir Next", sans-serif;
  letter-spacing: 5px;
  margin: 1em auto;
  width: 40%;
}

.email-input {
  /* width: 220px; */
}

.auth-form {
  width: 350px;
  margin: 0 auto;
}

.form-control {
  margin: 0 auto;
}

input {
  margin: 0px auto;
  width: 100%; 
}
.auth-text {
  color: white;
  text-shadow: 3px 3px 3px black;
  margin: 5px;
}
h2 {
   font-family: BOMBARD, "Avenir Next", sans-serif;
}
@media screen and (max-width: 480px) {
  .call-to-action {
    font-size: 20px;
    padding: .5em;
  }
  h2 {
    font-family: BOMBARD, "Avenir Next", sans-serif;
    margin: .5em;
  }
}


</style>
