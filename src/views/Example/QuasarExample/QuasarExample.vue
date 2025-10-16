<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('components');
const slide = ref(1);
const splitterModel = ref(50);

// Form data
const name = ref('');
const email = ref('');
const message = ref('');
const accept = ref(false);
const selected = ref('option1');

// Table data
const columns = [
  { name: 'name', label: 'Name', field: 'name', align: 'left' as const },
  { name: 'description', label: 'Description', field: 'description', align: 'left' as const },
  { name: 'actions', label: 'Actions', field: 'actions', align: 'center' as const },
];

const rows = [
  { name: 'Quasar', description: 'Build high-performance VueJS user interfaces' },
  { name: 'Vue 3', description: 'Progressive JavaScript Framework' },
  { name: 'Vite', description: 'Next Generation Frontend Tooling' },
];

// Notification
const showNotification = () => {
  // Using Quasar's Notify plugin would go here
  console.log('Notification would show here');
};
</script>

<template>
  <div class="quasar-example q-pa-md">
    <div class="q-gutter-md">
      <q-card class="q-mb-md">
        <q-card-section class="bg-primary text-white">
          <div class="text-h4">🎯 Quasar Framework Examples</div>
          <div class="text-subtitle2">Beautiful Vue 3 Components</div>
        </q-card-section>
      </q-card>

      <!-- Tabs -->
      <q-card>
        <q-tabs v-model="tab" class="text-primary" align="justify">
          <q-tab name="components" icon="widgets" label="Components" />
          <q-tab name="forms" icon="edit" label="Forms" />
          <q-tab name="tables" icon="table_chart" label="Tables" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <!-- Components Panel -->
          <q-tab-panel name="components">
            <div class="q-gutter-md">
              <div class="text-h6">Buttons</div>
              <div class="q-gutter-sm">
                <q-btn color="primary" label="Primary" />
                <q-btn color="secondary" label="Secondary" />
                <q-btn color="positive" label="Positive" />
                <q-btn color="negative" label="Negative" />
                <q-btn color="warning" label="Warning" />
                <q-btn color="info" label="Info" />
                <q-btn outline color="primary" label="Outline" />
                <q-btn flat color="primary" label="Flat" />
                <q-btn unelevated color="primary" label="Unelevated" />
                <q-btn rounded color="primary" label="Rounded" icon="send" />
              </div>

              <q-separator class="q-my-md" />

              <div class="text-h6">Badges & Chips</div>
              <div class="q-gutter-sm">
                <q-badge color="primary" label="Badge" />
                <q-badge color="secondary" label="10" />
                <q-badge color="positive" label="New" />
                <q-chip color="primary" text-color="white" icon="check">
                  Chip with Icon
                </q-chip>
                <q-chip removable color="teal" text-color="white">
                  Removable Chip
                </q-chip>
              </div>

              <q-separator class="q-my-md" />

              <div class="text-h6">Carousel</div>
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                animated
                control-color="primary"
                class="bg-grey-2 text-white rounded-borders"
                height="200px"
              >
                <q-carousel-slide name="1" class="column no-wrap flex-center">
                  <div class="text-h5 text-primary">Slide 1</div>
                  <div class="text-subtitle1 text-grey-8">First slide content</div>
                </q-carousel-slide>
                <q-carousel-slide name="2" class="column no-wrap flex-center">
                  <div class="text-h5 text-secondary">Slide 2</div>
                  <div class="text-subtitle1 text-grey-8">Second slide content</div>
                </q-carousel-slide>
                <q-carousel-slide name="3" class="column no-wrap flex-center">
                  <div class="text-h5 text-positive">Slide 3</div>
                  <div class="text-subtitle1 text-grey-8">Third slide content</div>
                </q-carousel-slide>
              </q-carousel>

              <q-separator class="q-my-md" />

              <div class="text-h6">Progress & Loading</div>
              <q-linear-progress :value="0.6" color="primary" class="q-mb-md" />
              <q-linear-progress :value="0.8" color="positive" class="q-mb-md" />
              <div class="q-gutter-sm">
                <q-spinner color="primary" size="3em" />
                <q-spinner-dots color="secondary" size="3em" />
                <q-spinner-gears color="positive" size="3em" />
                <q-spinner-hourglass color="negative" size="3em" />
              </div>
            </div>
          </q-tab-panel>

          <!-- Forms Panel -->
          <q-tab-panel name="forms">
            <div class="q-gutter-md" style="max-width: 600px">
              <div class="text-h6">Input Fields</div>

              <q-input v-model="name" filled label="Name" hint="Enter your name" />

              <q-input
                v-model="email"
                filled
                type="email"
                label="Email"
                hint="Enter your email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                v-model="message"
                filled
                type="textarea"
                label="Message"
                hint="Enter your message"
              />

              <q-select
                v-model="selected"
                filled
                :options="[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' },
                ]"
                label="Select an option"
                emit-value
                map-options
              />

              <q-checkbox v-model="accept" label="I accept the terms and conditions" />

              <q-toggle v-model="accept" label="Toggle me" />

              <q-rating v-model="slide" :max="5" size="2em" color="primary" />

              <div class="q-gutter-sm">
                <q-btn color="primary" label="Submit" />
                <q-btn outline color="primary" label="Cancel" />
              </div>
            </div>
          </q-tab-panel>

          <!-- Tables Panel -->
          <q-tab-panel name="tables">
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              flat
              bordered
              class="q-mb-md"
            >
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn flat round dense color="primary" icon="edit" size="sm" />
                  <q-btn flat round dense color="negative" icon="delete" size="sm" />
                </q-td>
              </template>
            </q-table>

            <div class="text-h6 q-mb-md">List</div>
            <q-list bordered separator>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white" icon="folder" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                  <q-item-label caption>February 22, 2016</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="secondary" text-color="white" icon="description" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Documents</q-item-label>
                  <q-item-label caption>March 15, 2016</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="positive" text-color="white" icon="audiotrack" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Music</q-item-label>
                  <q-item-label caption>April 1, 2016</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

      <!-- Additional Components -->
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <div class="text-h6">Timeline</div>
            </q-card-section>
            <q-card-section>
              <q-timeline color="secondary">
                <q-timeline-entry heading>Timeline</q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  icon="check"
                  color="positive"
                >
                  Event description goes here
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 21, 1986"
                  icon="schedule"
                  color="info"
                >
                  Another event description
                </q-timeline-entry>
              </q-timeline>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <div class="text-h6">Expansion Items</div>
            </q-card-section>
            <q-card-section>
              <q-list bordered separator>
                <q-expansion-item
                  icon="explore"
                  label="First Expansion Item"
                  header-class="text-primary"
                >
                  <q-card>
                    <q-card-section> Lorem ipsum dolor sit amet. </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  icon="perm_identity"
                  label="Second Expansion Item"
                  header-class="text-secondary"
                >
                  <q-card>
                    <q-card-section> Lorem ipsum dolor sit amet. </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Splitter -->
      <q-card>
        <q-card-section>
          <div class="text-h6">Splitter</div>
        </q-card-section>
        <q-card-section>
          <q-splitter v-model="splitterModel" style="height: 200px">
            <template v-slot:before>
              <div class="q-pa-md">
                <div class="text-h6 q-mb-md">Before</div>
                <p>This is the before panel. Drag the separator to resize.</p>
              </div>
            </template>

            <template v-slot:after>
              <div class="q-pa-md">
                <div class="text-h6 q-mb-md">After</div>
                <p>This is the after panel. Drag the separator to resize.</p>
              </div>
            </template>
          </q-splitter>
        </q-card-section>
      </q-card>

      <!-- Info Banner -->
      <q-banner class="bg-info text-white" rounded>
        <template v-slot:avatar>
          <q-icon name="info" />
        </template>
        ✅ Quasar is successfully installed and working! All components are available.
      </q-banner>
    </div>
  </div>
</template>

<style scoped>
.quasar-example {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

