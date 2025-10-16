<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useApiRequest } from '@/composables';
import { pokemonService } from '@/services';

// Pokemon name input
const pokemonName = ref('ditto');

// Fetch pokemon data
const {
  data: pokemon,
  execute: fetchPokemon,
} = useApiRequest(
  () => pokemonService.getByNameOrId(pokemonName.value.toLowerCase()),
  {
    successMessage: 'Pokemon loaded successfully!',
    errorMessage: 'Pokemon not found. Try: pikachu, charizard, mewtwo, or any pokemon name/ID',
  }
);

// Handle search
const handleSearch = () => {
  if (pokemonName.value.trim()) {
    fetchPokemon();
  }
};

// Load Ditto on mount
onMounted(() => {
  fetchPokemon();
});

// Type colors
const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return colors[type] || '#777';
};
</script>

<template>
  <div class="pokemon-page">
      <div class="container">
        <h1>🎮 Pokémon Viewer</h1>
        <p class="subtitle">Example using PokéAPI with our service layer</p>

        <!-- Search -->
        <div class="search-box">
          <input
            v-model="pokemonName"
            @keyup.enter="handleSearch"
            type="text"
            placeholder="Enter pokemon name or ID (e.g., ditto, pikachu, 25)"
            class="search-input"
          />
          <button @click="handleSearch" class="search-button">
            Search
          </button>
        </div>

        <!-- Pokemon Data -->
        <div v-if="pokemon" class="pokemon-card">
          <!-- Header -->
          <div class="pokemon-header">
            <h2 class="pokemon-name">
              {{ pokemon.name.toUpperCase() }}
              <span class="pokemon-id">#{{ pokemon.id }}</span>
            </h2>
            <div class="types">
              <span
                v-for="typeInfo in pokemon.types"
                :key="typeInfo.type.name"
                class="type-badge"
                :style="{ backgroundColor: getTypeColor(typeInfo.type.name) }"
              >
                {{ typeInfo.type.name }}
              </span>
            </div>
          </div>

          <!-- Sprite -->
          <div class="pokemon-sprite">
            <img
              v-if="pokemon.sprites.other?.['official-artwork']?.front_default"
              :src="pokemon.sprites.other['official-artwork'].front_default"
              :alt="pokemon.name"
              class="sprite-image"
            />
            <img
              v-else-if="pokemon.sprites.front_default"
              :src="pokemon.sprites.front_default"
              :alt="pokemon.name"
              class="sprite-image"
            />
          </div>

          <!-- Basic Info -->
          <div class="pokemon-info">
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Height</span>
                <span class="info-value">{{ (pokemon.height / 10).toFixed(1) }}m</span>
              </div>
              <div class="info-item">
                <span class="info-label">Weight</span>
                <span class="info-value">{{ (pokemon.weight / 10).toFixed(1) }}kg</span>
              </div>
              <div class="info-item">
                <span class="info-label">Base Experience</span>
                <span class="info-value">{{ pokemon.base_experience }}</span>
              </div>
            </div>
          </div>

          <!-- Abilities -->
          <div class="pokemon-section">
            <h3>Abilities</h3>
            <div class="abilities-list">
              <span
                v-for="abilityInfo in pokemon.abilities"
                :key="abilityInfo.ability.name"
                class="ability-badge"
              >
                {{ abilityInfo.ability.name.replace('-', ' ') }}
                <span v-if="abilityInfo.is_hidden" class="hidden-tag">(Hidden)</span>
              </span>
            </div>
          </div>

          <!-- Stats -->
          <div class="pokemon-section">
            <h3>Base Stats</h3>
            <div class="stats-list">
              <div v-for="statInfo in pokemon.stats" :key="statInfo.stat.name" class="stat-row">
                <span class="stat-name">{{ statInfo.stat.name.replace('-', ' ') }}</span>
                <div class="stat-bar-container">
                  <div
                    class="stat-bar"
                    :style="{
                      width: `${(statInfo.base_stat / 255) * 100}%`,
                      backgroundColor: statInfo.base_stat > 100 ? '#4CAF50' : statInfo.base_stat > 50 ? '#FFC107' : '#FF5722'
                    }"
                  >
                    <span class="stat-value">{{ statInfo.base_stat }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="pokemon-footer">
            <p>
              <strong>🎮 Try other Pokémon:</strong> pikachu, charizard, mewtwo, gyarados, dragonite
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.pokemon-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: white;
  font-size: 48px;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 32px 0;
  font-size: 16px;
}

/* Search Box */
.search-box {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

.search-input {
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-button {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #4CAF50;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.search-button:hover:not(:disabled) {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.search-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Pokemon Card */
.pokemon-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pokemon-header {
  text-align: center;
  margin-bottom: 24px;
}

.pokemon-name {
  font-size: 36px;
  margin: 0 0 12px 0;
  color: #333;
  text-transform: capitalize;
}

.pokemon-id {
  color: #999;
  font-size: 24px;
  margin-left: 8px;
}

/* Types */
.types {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.type-badge {
  padding: 6px 16px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Sprite */
.pokemon-sprite {
  text-align: center;
  margin: 32px 0;
}

.sprite-image {
  max-width: 300px;
  height: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* Info Grid */
.pokemon-info {
  margin: 32px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.info-item {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
}

.info-label {
  display: block;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.info-value {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

/* Sections */
.pokemon-section {
  margin: 32px 0;
}

.pokemon-section h3 {
  font-size: 20px;
  margin: 0 0 16px 0;
  color: #333;
}

/* Abilities */
.abilities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ability-badge {
  background: #e3f2fd;
  color: #1976d2;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  text-transform: capitalize;
}

.hidden-tag {
  font-size: 12px;
  color: #666;
  margin-left: 4px;
}

/* Stats */
.stats-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  align-items: center;
}

.stat-name {
  font-weight: 500;
  color: #666;
  text-transform: capitalize;
}

.stat-bar-container {
  background: #eee;
  border-radius: 10px;
  height: 28px;
  overflow: hidden;
}

.stat-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  border-radius: 10px;
  transition: width 0.5s ease;
}

.stat-value {
  color: white;
  font-weight: bold;
  font-size: 14px;
}

/* Footer */
.pokemon-footer {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 2px solid #eee;
  text-align: center;
}

.pokemon-footer p {
  color: #666;
  margin: 0;
}

/* Responsive */
@media (max-width: 600px) {
  h1 {
    font-size: 32px;
  }

  .pokemon-name {
    font-size: 28px;
  }

  .sprite-image {
    max-width: 200px;
  }

  .stat-row {
    grid-template-columns: 120px 1fr;
    gap: 8px;
  }
}
</style>

