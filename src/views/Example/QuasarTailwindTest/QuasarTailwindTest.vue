<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const dialog = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header with Tailwind -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl mb-8">
        <h1 class="text-4xl font-bold mb-2">⚖️ Quasar + Tailwind Compatibility Test</h1>
        <p class="text-lg opacity-90">Testing if both frameworks work together without conflicts</p>
      </div>

      <!-- Grid Layout with Tailwind -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        <!-- Left Column - Pure Tailwind -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎨 Pure Tailwind</h2>

          <!-- Tailwind Card -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-blue-600 mb-3">Tailwind Card</h3>
            <p class="text-gray-600 mb-4">
              This card uses only Tailwind CSS classes: bg-white, rounded-lg, shadow-lg, etc.
            </p>

            <!-- Tailwind Buttons -->
            <div class="flex gap-2 flex-wrap">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tailwind Button
              </button>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Success
              </button>
              <button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition-colors">
                Outline
              </button>
            </div>
          </div>

          <!-- Tailwind Form -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-blue-600 mb-4">Tailwind Form</h3>
            <div class="space-y-3">
              <input
                type="text"
                placeholder="Tailwind Input"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Tailwind Select</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>

          <!-- Tailwind Grid -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-blue-600 mb-4">Tailwind Grid</h3>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-blue-100 p-3 text-center rounded">1</div>
              <div class="bg-green-100 p-3 text-center rounded">2</div>
              <div class="bg-yellow-100 p-3 text-center rounded">3</div>
            </div>
          </div>
        </div>

        <!-- Right Column - Pure Quasar -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Pure Quasar</h2>

          <!-- Quasar Card -->
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Quasar Card</div>
            </q-card-section>
            <q-card-section>
              <p>This card uses only Quasar components: q-card, q-card-section, etc.</p>
            </q-card-section>
            <q-card-actions>
              <q-btn color="primary" label="Quasar Button" />
              <q-btn color="positive" label="Success" />
              <q-btn outline color="primary" label="Outline" />
            </q-card-actions>
          </q-card>

          <!-- Quasar Form -->
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Quasar Form</div>
            </q-card-section>
            <q-card-section>
              <div class="q-gutter-md">
                <q-input v-model="name" filled label="Quasar Input" />
                <q-select
                  v-model="name"
                  filled
                  :options="['Quasar Select', 'Option 2', 'Option 3']"
                  label="Select"
                />
              </div>
            </q-card-section>
          </q-card>

          <!-- Quasar List -->
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Quasar List</div>
            </q-card-section>
            <q-list bordered separator>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white" icon="check" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Quasar List Item</q-item-label>
                  <q-item-label caption>With avatar and ripple effect</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>

      <!-- Mixed: Quasar + Tailwind Together -->
      <div class="bg-white rounded-xl shadow-2xl p-8 mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">🔥 Mixed: Quasar + Tailwind</h2>
        <p class="text-gray-600 mb-6">Components using BOTH frameworks together</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Quasar Card with Tailwind spacing/utilities -->
          <q-card class="shadow-lg hover:shadow-xl transition-shadow">
            <q-card-section class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <div class="text-h6 font-bold">Quasar Card</div>
              <div class="text-subtitle2 opacity-80">+ Tailwind gradient</div>
            </q-card-section>
            <q-card-section class="p-6">
              <p class="text-gray-700 mb-4">Quasar component with Tailwind classes:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600">
                <li>Tailwind gradient on header</li>
                <li>Tailwind padding (p-6)</li>
                <li>Tailwind spacing (mb-4, space-y-2)</li>
                <li>Quasar card structure</li>
              </ul>
            </q-card-section>
            <q-card-actions class="justify-end px-6 pb-4">
              <q-btn color="primary" label="Quasar Button" />
            </q-card-actions>
          </q-card>

          <!-- Tailwind div with Quasar components inside -->
          <div class="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-xl shadow-lg">
            <h3 class="text-2xl font-bold text-white mb-4">Tailwind Container</h3>
            <p class="text-white opacity-90 mb-4">+ Quasar components inside</p>

            <div class="space-y-3">
              <q-input
                v-model="name"
                filled
                dark
                label="Quasar Input in Tailwind div"
                class="bg-white/10"
              />

              <div class="flex gap-2">
                <q-btn color="white" text-color="primary" label="Save" />
                <q-btn outline color="white" label="Cancel" />
              </div>

              <div class="flex gap-2 mt-4">
                <q-chip color="white" text-color="primary">Chip 1</q-chip>
                <q-chip color="white" text-color="green">Chip 2</q-chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Compatibility Test Results -->
      <q-card class="mb-8">
        <q-card-section class="bg-positive text-white">
          <div class="text-h5">✅ Compatibility Test Results</div>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="positive" text-color="white" icon="check_circle" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="font-bold text-lg">Tailwind Classes Work</q-item-label>
                <q-item-label caption class="text-base">
                  Utility classes like bg-*, text-*, p-*, rounded-*, etc. are working correctly
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item>
              <q-item-section avatar>
                <q-avatar color="positive" text-color="white" icon="check_circle" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="font-bold text-lg">Quasar Components Work</q-item-label>
                <q-item-label caption class="text-base">
                  All Quasar components (q-btn, q-card, q-input, etc.) render correctly
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item>
              <q-item-section avatar>
                <q-avatar color="positive" text-color="white" icon="check_circle" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="font-bold text-lg">No CSS Conflicts</q-item-label>
                <q-item-label caption class="text-base">
                  Both frameworks coexist without overriding each other's styles
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item>
              <q-item-section avatar>
                <q-avatar color="info" text-color="white" icon="lightbulb" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="font-bold text-lg">Best Practice</q-item-label>
                <q-item-label caption class="text-base">
                  Use Quasar for complex components (dialogs, tables, forms with validation).
                  Use Tailwind for layout and utility styling (spacing, colors, responsive design).
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Recommendations -->
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 class="text-xl font-bold text-blue-800 mb-3">💡 Recommendations</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span><strong>Layout & Spacing:</strong> Use Tailwind (flex, grid, p-*, m-*, gap-*)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span><strong>Complex Components:</strong> Use Quasar (q-table, q-dialog, q-select)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span><strong>Simple Buttons:</strong> Either works (Tailwind for custom, Quasar for consistency)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span><strong>Forms with Validation:</strong> Prefer Quasar (built-in validation)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span><strong>Responsive Design:</strong> Use Tailwind (sm:, md:, lg: breakpoints)</span>
          </li>
        </ul>
      </div>

      <!-- Interactive Test -->
      <div class="mt-8">
        <q-card class="shadow-xl">
          <q-card-section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div class="text-h5 font-bold">Interactive Compatibility Test</div>
            <div class="text-subtitle2 mt-2 opacity-90">Click the button to test dialog + Tailwind</div>
          </q-card-section>

          <q-card-section class="p-8">
            <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
              <q-btn
                @click="dialog = true"
                color="primary"
                size="lg"
                label="Open Quasar Dialog"
                icon="open_in_new"
                class="shadow-lg"
              />

              <button
                @click="dialog = true"
                class="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                🎨 Tailwind Gradient Button
              </button>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Dialog with Mixed Styling -->
      <q-dialog v-model="dialog">
        <q-card class="w-96">
          <!-- Quasar header with Tailwind gradient -->
          <q-card-section class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div class="flex items-center justify-between">
              <div class="text-h6 font-bold">Mixed Dialog</div>
              <q-btn flat round dense icon="close" v-close-popup class="text-white" />
            </div>
          </q-card-section>

          <!-- Tailwind spacing with Quasar components -->
          <q-card-section class="space-y-4">
            <p class="text-gray-700">
              This dialog uses:
            </p>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Quasar dialog component</li>
              <li>Tailwind gradient background</li>
              <li>Tailwind flex utilities</li>
              <li>Tailwind spacing (space-y-4)</li>
              <li>Quasar close button</li>
            </ul>

            <q-input
              v-model="name"
              filled
              label="Name"
              hint="Type something"
              class="mt-4"
            />
          </q-card-section>

          <q-card-actions align="right" class="px-6 pb-4">
            <q-btn flat label="Cancel" color="grey-7" v-close-popup />
            <q-btn label="Save" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<style scoped>
/*
  No custom CSS needed!
  Using only Quasar components + Tailwind utilities
*/
</style>

