<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

// Pinia Store Example
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>

<template>
  <div class="q-pa-md">
    <div style="max-width: 800px; margin: 0 auto">
      <!-- Header -->
      <q-card class="q-mb-md">
        <q-card-section class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div class="text-h4">🏪 Pinia Store Example</div>
          <div class="text-subtitle2">Global state management with Pinia</div>
        </q-card-section>
      </q-card>

      <!-- Counter Card -->
      <q-card>
        <q-card-section>
          <div class="text-center q-py-lg">
            <div class="text-h1 text-primary q-mb-md">{{ count }}</div>
            <div class="text-h6 text-grey-7">Current Count</div>
            <div class="text-subtitle1 text-grey-6 q-mt-sm">
              Double Value: <span class="text-secondary text-weight-bold">{{ doubleCount }}</span>
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="justify-center q-pa-md q-gutter-sm">
          <q-btn
            @click="counterStore.increment"
            color="positive"
            icon="add"
            label="Increment"
            size="lg"
          />
          <q-btn
            @click="counterStore.decrement"
            color="negative"
            icon="remove"
            label="Decrement"
            size="lg"
          />
          <q-btn
            @click="counterStore.reset"
            color="grey-7"
            icon="restart_alt"
            label="Reset"
            outline
            size="lg"
          />
        </q-card-actions>
      </q-card>

      <!-- Explanation -->
      <q-card class="q-mt-md">
        <q-card-section class="bg-blue-1">
          <div class="text-h6">📚 How It Works</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white" icon="looks_one" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">Define Store</q-item-label>
                <q-item-label caption>
                  <code>src/stores/counter.ts</code> - Create store with state and actions
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-avatar color="secondary" text-color="white" icon="looks_two" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">Import Store</q-item-label>
                <q-item-label caption>
                  <code>const counterStore = useCounterStore()</code>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-avatar color="positive" text-color="white" icon="looks_3" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">Make Reactive</q-item-label>
                <q-item-label caption>
                  <code>const { count } = storeToRefs(counterStore)</code>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-avatar color="info" text-color="white" icon="looks_4" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">Use Actions</q-item-label>
                <q-item-label caption>
                  <code>counterStore.increment()</code>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 13px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  font-size: 12px;
  line-height: 1.5;
  overflow-x: auto;
}
</style>
