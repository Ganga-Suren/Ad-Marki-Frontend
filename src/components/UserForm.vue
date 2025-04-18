<template>
  <form @submit.prevent="handleSubmit" class="user-form">
    <!-- Campaign Name -->
    <div class="form-row">
      <label for="campaignName" class="user-form__label">Campaign Name</label>
      <input
        id="campaignName"
        v-model="form.campaignName"
        type="text"
        class="user-form__input"
        placeholder="Enter campaign name"
        required
      />
    </div>

    <!-- Ad Text -->
    <div class="form-row">
      <label for="adText" class="user-form__label">Ad Text</label>
      <textarea
        id="adText"
        v-model="form.adText"
        class="user-form__input"
        placeholder="Write your ad copy"
        rows="3"
        required
      />
    </div>

    <!-- Image URL -->
    <div class="form-row">
      <label for="imageUrl" class="user-form__label">Image URL</label>
      <input
        id="imageUrl"
        v-model="form.imageUrl"
        type="url"
        class="user-form__input"
        placeholder="https://example.com/image.jpg"
      />
    </div>

    <!-- Audience: Age Range -->
    <div class="form-row">
      <label class="user-form__label">Age Range</label>
      <div style="display: flex; gap: 0.5rem; flex: 1">
        <input
          v-model.number="form.minAge"
          type="number"
          class="user-form__input"
          placeholder="Min"
          min="13"
        />
        <input
          v-model.number="form.maxAge"
          type="number"
          class="user-form__input"
          placeholder="Max"
          :min="form.minAge"
        />
      </div>
    </div>

    <!-- Audience: Gender -->
    <div class="form-row">
      <label for="gender" class="user-form__label">Gender</label>
      <select id="gender" v-model="form.gender" class="user-form__input">
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <!-- Audience: Location -->
    <div class="form-row">
      <label for="location" class="user-form__label">Location</label>
      <input
        id="location"
        v-model="form.location"
        type="text"
        class="user-form__input"
        placeholder="City, Country"
      />
    </div>

    <!-- Budget & Schedule -->
    <div class="form-row">
      <label for="dailyBudget" class="user-form__label">Daily Budget ($)</label>
      <input
        id="dailyBudget"
        v-model.number="form.dailyBudget"
        type="number"
        class="user-form__input"
        placeholder="e.g. 50"
        min="1"
      />
    </div>
    <div class="form-row">
      <label for="startDate" class="user-form__label">Start Date</label>
      <input
        id="startDate"
        v-model="form.startDate"
        type="date"
        class="user-form__input"
        required
      />
    </div>
    <div class="form-row">
      <label for="endDate" class="user-form__label">End Date</label>
      <input
        id="endDate"
        v-model="form.endDate"
        type="date"
        class="user-form__input"
        :min="form.startDate"
        required
      />
    </div>

    <!-- Submit & Feedback -->
    <div class="form-row" style="justify-content: flex-end">
      <button type="submit" class="user-form__btn" :disabled="loading">
        {{ loading ? 'Sending…' : 'Create Campaign' }}
      </button>
    </div>
    <p v-if="error" class="text-red-600" style="margin-top: 1rem">{{ error }}</p>
    <p v-if="successMsg" class="text-green-600" style="margin-top: 1rem">{{ successMsg }}</p>
  </form>
</template>

<script>
  import api from '../api.js'

  export default {
    name: 'UserForm',
    data() {
      return {
        form: {
          campaignName: '',
          adText: '',
          imageUrl: '',
          minAge: 18,
          maxAge: 65,
          gender: 'All',
          location: '',
          dailyBudget: null,
          startDate: '',
          endDate: '',
        },
        loading: false,
        error: null,
        successMsg: null,
      }
    },
    methods: {
      async handleSubmit() {
        this.error = null
        this.successMsg = null
        this.loading = true

        // Build payload matching FastAPI schema:
        const payload = {
          campaign_name: this.form.campaignName,
          ad_text: this.form.adText,
          image_url: this.form.imageUrl,
          min_age: this.form.minAge,
          max_age: this.form.maxAge,
          gender: this.form.gender.toLowerCase(),
          location: this.form.location,
          daily_budget: this.form.dailyBudget,
          start_date: this.form.startDate,
          end_date: this.form.endDate,
        }
        try {
          const resp = await api.post('/create-campaign', payload)
          // Success! resp.data should contain your mock campaign_id, etc.
          this.successMsg = `Campaign created: ${resp.data.campaign_id}`
        } catch (err) {
          this.error = err.response?.data?.detail || err.message
        } finally {
          this.loading = false
        }
      },
    },
  }
</script>

<style scoped>
  /* Add your styles here */
</style>
