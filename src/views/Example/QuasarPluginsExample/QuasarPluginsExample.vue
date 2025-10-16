<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useQuasarNotify } from '@/composables/useQuasarNotify'
import { useQuasarDialog } from '@/composables/useQuasarDialog'
import { useQuasarLoading } from '@/composables/useQuasarLoading'

const $q = useQuasar()
const { showSuccess, showError, showWarning, showInfo } = useQuasarNotify()
const { confirm, alert, prompt } = useQuasarDialog()
const { show: showLoading, hide: hideLoading, withLoading } = useQuasarLoading()

const testNotifySuccess = () => showSuccess('Operation completed successfully!')
const testNotifyError = () => showError('Something went wrong!')
const testNotifyWarning = () => showWarning('Please check your input')
const testNotifyInfo = () => showInfo('This is an informational message')

const testConfirmDialog = async () => {
  const confirmed = await confirm('Confirm Action', 'Are you sure you want to proceed?')
  confirmed ? showSuccess('Action confirmed!') : showInfo('Action cancelled')
}

const testAlertDialog = async () => {
  await alert('Alert Title', 'This is an important message!')
  showInfo('Alert dismissed')
}

const testPromptDialog = async () => {
  const result = await prompt('Enter Your Name', 'What is your name?', 'John Doe')
  result ? showSuccess(`Hello, ${result}!`) : showInfo('Prompt cancelled')
}

const testLoading = () => {
  showLoading('Loading data...')
  setTimeout(() => {
    hideLoading()
    showSuccess('Data loaded!')
  }, 2000)
}

const testLoadingWithPromise = async () => {
  const fakeApiCall = () => new Promise((resolve) => setTimeout(resolve, 2000))
  await withLoading(fakeApiCall(), 'Fetching data from API...')
  showSuccess('Data fetched successfully!')
}

const deleteItemExample = async () => {
  const confirmed = await confirm('Delete Item', 'Are you sure? This cannot be undone.')
  if (!confirmed) {
    showInfo('Deletion cancelled')
    return
  }
  showLoading('Deleting item...')
  await new Promise((resolve) => setTimeout(resolve, 1500))
  hideLoading()
  showSuccess('Item deleted successfully!')
}
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 1200px; margin: 0 auto">
      <q-card class="bg-primary text-white">
        <q-card-section>
          <div class="text-h4">🔌 Quasar Plugins Examples</div>
          <div class="text-subtitle2">Notify, Dialog, Loading</div>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section class="bg-blue-1">
          <div class="text-h6">📢 Notify (Snackbar)</div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-sm">
            <q-btn color="positive" label="Success" @click="testNotifySuccess" />
            <q-btn color="negative" label="Error" @click="testNotifyError" />
            <q-btn color="warning" label="Warning" @click="testNotifyWarning" />
            <q-btn color="info" label="Info" @click="testNotifyInfo" />
          </div>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section class="bg-green-1">
          <div class="text-h6">💬 Dialog</div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-sm">
            <q-btn color="primary" label="Confirm" @click="testConfirmDialog" />
            <q-btn color="secondary" label="Alert" @click="testAlertDialog" />
            <q-btn color="info" label="Prompt" @click="testPromptDialog" />
          </div>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section class="bg-orange-1">
          <div class="text-h6">⏳ Loading</div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-sm">
            <q-btn color="primary" label="Show Loading" @click="testLoading" />
            <q-btn color="secondary" label="With Promise" @click="testLoadingWithPromise" />
          </div>
        </q-card-section>
      </q-card>

      <q-card class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <q-card-section>
          <div class="text-h6">🚀 Real World Example</div>
        </q-card-section>
        <q-card-section class="bg-white text-dark">
          <q-btn
            color="negative"
            label="Delete Item (Full Flow)"
            icon="delete"
            @click="deleteItemExample"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
