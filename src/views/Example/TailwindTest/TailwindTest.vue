<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-white mb-8 text-center">
        🎨 Tailwind CSS Test Page
      </h1>

      <!-- Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Card 1 -->
        <div class="bg-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-blue-500 text-3xl mb-4">✅</div>
          <h3 class="text-xl font-bold mb-2">Tailwind Installed</h3>
          <p class="text-gray-600">
            Tailwind CSS is working perfectly! Try resizing the window to see responsive design.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-green-500 text-3xl mb-4">🎨</div>
          <h3 class="text-xl font-bold mb-2">Utilities Working</h3>
          <p class="text-gray-600">
            All Tailwind utility classes are available: colors, spacing, typography, and more.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-purple-500 text-3xl mb-4">🚀</div>
          <h3 class="text-xl font-bold mb-2">Ready to Use</h3>
          <p class="text-gray-600">
            Start using Tailwind classes in your components. No more custom CSS!
          </p>
        </div>
      </div>

      <!-- Button Examples -->
      <div class="bg-black rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6">Button Examples</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary
          </button>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Success
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Danger
          </button>
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary
          </button>
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Warning
          </button>
          <button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
            Outline
          </button>
        </div>
      </div>

      <!-- Typography -->
      <div class="bg-black rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6">Typography</h2>
        <h1 class="text-5xl font-bold mb-2">Heading 1</h1>
        <h2 class="text-4xl font-bold mb-2">Heading 2</h2>
        <h3 class="text-3xl font-bold mb-2">Heading 3</h3>
        <p class="text-lg text-gray-100 mb-4">
          This is a paragraph with <span class="font-bold">bold text</span>,{' '}
          <span class="italic">italic text</span>, and{' '}
          <span class="text-blue-500 underline">link styling</span>.
        </p>
      </div>

      <!-- Responsive Grid -->
      <div class="bg-black rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold mb-6">Responsive Grid</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="bg-blue-100 p-4 rounded text-center text-black">1 Col Mobile</div>
          <div class="bg-green-100 p-4 rounded text-center text-black">2 Col Tablet</div>
          <div class="bg-yellow-100 p-4 rounded text-center text-black">3 Col Desktop</div>
          <div class="bg-red-100 p-4 rounded text-center text-black">4 Col Large</div>
        </div>
      </div>

      <!-- Flex Examples -->
      <div class="bg-black rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-6 ">Flexbox</h2>

        <div class="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded">
          <span class="font-semibold text-black">Space Between</span>
          <span class="text-blue-500">→</span>
          <span class="font-semibold text-black">Items</span>
        </div>

        <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded">
          <div class="w-12 h-12 bg-blue-500 rounded"></div>
          <div class="w-12 h-12 bg-green-500 rounded"></div>
          <div class="w-12 h-12 bg-red-500 rounded"></div>
        </div>
      </div>

      <!-- Success Message -->
      <div class="mt-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
        <p class="font-bold">🎉 Success!</p>
        <p>Tailwind CSS is installed and working correctly.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind classes handle all styling - no custom CSS needed! */
</style>

