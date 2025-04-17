<template>
  <form @submit.prevent="handleSubmit" class="user-form">
    <div class="form-row">
      <label for="username" class="user-form__label">Username:</label>
      <input
        type="text"
        id="username"
        v-model="username"
        class="creative-input"
        placeholder="Enter your username"
      />
    </div>
    <button type="submit" class="btn user-form__btn">Submit</button>
  </form>
</template>

<script>
  import api from '../api.js'

  export default {
    name: 'UserForm',
    data() {
      return {
        username: '',
      }
    },
    methods: {
      async handleSubmit() {
        try {
          const resp = await api.post('/create-campaign', { username: this.username })
          console.log('✅ Server response:', resp.data)
        } catch (err) {
          console.error('❌ Submission error:', err.response?.data || err.message)
        }
      },
    },
  }
</script>

<style scoped>
  /* Add your styles here */
</style>
