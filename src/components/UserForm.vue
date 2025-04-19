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
      ></textarea>
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
          required
        />
        <input
          v-model.number="form.maxAge"
          type="number"
          class="user-form__input"
          placeholder="Max"
          :min="form.minAge"
          required
        />
      </div>
    </div>

    <!-- Audience: Gender -->
    <div class="form-row">
      <label for="gender" class="user-form__label" required>Gender</label>
      <select id="gender" v-model="form.gender" class="user-form__input" required>
        <option value="" disabled>Select gender</option>
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
        required
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
        required
      />
    </div>
    <div class="form-row">
      <label for="startDate" class="user-form__label">Start Date</label>
      <input
        id="startDate"
        v-model="form.startDate"
        type="date"
        class="user-form__input"
        :min="today"
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
        :min="form.startDate || today"
        required
      />
    </div>

    <!-- Submit & Feedback -->
    <div class="form-row" style="justify-content: flex-end">
      <button type="submit" class="user-form__btn" :disabled="loading">
        {{ loading ? 'Sending…' : 'Create Campaign' }}
      </button>
    </div>
  </form>
</template>

<script>
  import api from '../api.js'
  import { useToast } from 'vue-toastification'

  export default {
    name: 'UserForm',
    data() {
      const today = new Date().toISOString().split('T')[0]
      const defaults = {
        campaignName: '',
        adText: '',
        imageUrl: '',
        minAge: null,
        maxAge: null,
        gender: '',
        location: '',
        dailyBudget: null,
        startDate: '',
        endDate: '',
      }

      return {
        form: { ...defaults },
        today,
        initialForm: defaults,
        loading: false,
      }
    },
    setup() {
      const toast = useToast()
      return { toast }
    },
    methods: {
      resetForm() {
        Object.assign(this.form, this.initialForm)
      },
      async handleSubmit() {
        console.log('handleSubmit fired')

        // Build payload matching FastAPI schema:
        const payload = {
          campaign_name: this.form.campaignName,
          ad_text: this.form.adText,
          image_url: this.form.imageUrl,
          min_age: this.form.minAge,
          max_age: this.form.maxAge,
          gender: this.form.gender.toLowerCase(),
          location: this.form.location.trim(),
          daily_budget: this.form.dailyBudget,
          start_date: this.form.startDate,
          end_date: this.form.endDate,
        }

        this.loading = true

        try {
          const response = await api.post('/create-campaign', payload)
          const data = response.data
          console.log('Campaign created with id:', response.data)
          this.toast.success(`${data.message} with id: ${data.campaign_id}`)
          this.resetForm()
        } catch (err) {
          console.error('Error creating campaign:', err.message)
          this.toast.error(`${err.message} - Please try again.`)
        } finally {
          this.loading = false
        }
      },
    },
  }
</script>
