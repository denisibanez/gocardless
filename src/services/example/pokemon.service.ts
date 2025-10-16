import { BaseService } from '../base'
import type { Pokemon, PokemonListResponse, SimplePokemon, NamedAPIResource } from '@/interfaces'

/**
 * ============================================================================
 * POKEMON SERVICE - Real World Example using PokéAPI
 * ============================================================================
 *
 * This service demonstrates how to consume a real API (PokéAPI)
 * Following the hybrid approach with full type safety
 *
 * API Documentation: https://pokeapi.co/docs/v2
 *
 * All Pokemon interfaces are defined in @/interfaces/pokemon.interface.ts
 */

/**
 * STEP 2: Create the service
 *
 * Note: PokéAPI is READ-ONLY, so we only use GET methods
 * (No create, update, delete operations)
 */
class PokemonService extends BaseService<Pokemon> {
  /**
   * Base path for Pokemon endpoint
   * Full URL: https://pokeapi.co/api/v2/pokemon
   */
  protected basePath = '/pokemon'

  /**
   * ========================================================================
   * POKEMON-SPECIFIC METHODS
   * ========================================================================
   */

  /**
   * Get a pokemon by name or ID
   *
   * @param nameOrId - Pokemon name (e.g., "ditto") or ID (e.g., 132)
   * @returns Complete Pokemon data
   *
   * @example
   * const ditto = await pokemonService.getByNameOrId('ditto');
   * const pikachu = await pokemonService.getByNameOrId(25);
   */
  async getByNameOrId(nameOrId: string | number): Promise<Pokemon> {
    return this.customGet<Pokemon>(`/${nameOrId}`)
  }

  /**
   * Get a simplified version of pokemon data
   * Useful for displaying in cards or lists
   *
   * @param nameOrId - Pokemon name or ID
   * @returns Simplified Pokemon data
   */
  async getSimplified(nameOrId: string | number): Promise<SimplePokemon> {
    const pokemon = await this.getByNameOrId(nameOrId)

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      sprites: {
        front_default: pokemon.sprites.front_default,
        official_artwork: pokemon.sprites.other?.['official-artwork']?.front_default,
      },
      types: pokemon.types.map((t) => ({
        name: t.type.name,
        slot: t.slot,
      })),
      stats: pokemon.stats.map((s) => ({
        name: s.stat.name,
        base_stat: s.base_stat,
      })),
    }
  }

  /**
   * Get a list of pokemon with pagination
   *
   * @param limit - Number of pokemon to fetch (default: 20)
   * @param offset - Offset for pagination (default: 0)
   * @returns List of pokemon names and URLs
   *
   * @example
   * const firstPage = await pokemonService.getList(20, 0);
   * const secondPage = await pokemonService.getList(20, 20);
   */
  async getList(limit: number = 20, offset: number = 0): Promise<PokemonListResponse> {
    return this.customGet<PokemonListResponse>('', { limit, offset })
  }

  /**
   * Search pokemon by name (partial match)
   * Note: This is a client-side filter, not an API feature
   *
   * @param query - Search query
   * @returns Array of matching pokemon names
   */
  async search(query: string): Promise<NamedAPIResource[]> {
    const list = await this.getList(1000) // Get a large list
    return list.results.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
  }

  /**
   * Get pokemon by type
   *
   * @param type - Pokemon type (e.g., "fire", "water", "electric")
   * @returns Array of pokemon of that type
   *
   * @example
   * const electricPokemon = await pokemonService.getByType('electric');
   */
  async getByType(type: string): Promise<NamedAPIResource[]> {
    const response = await this.customGet<{
      pokemon: Array<{ pokemon: NamedAPIResource }>
    }>(`https://pokeapi.co/api/v2/type/${type}`)

    return response.pokemon.map((p) => p.pokemon)
  }
}

/**
 * STEP 3: Export singleton instance
 */
export default new PokemonService()

/**
 * ============================================================================
 * HOW TO USE THIS SERVICE IN VUE COMPONENTS
 * ============================================================================
 *
 * EXAMPLE 1: Display Pokemon Details (Ditto)
 * ----------------------------------------------------------------------------
 *
 * <script setup lang="ts">
 * import { onMounted } from 'vue';
 * import { useApiRequest } from '@/composables/useApiRequest';
 * import pokemonService, { type Pokemon } from '@/services/example/pokemon.service';
 *
 * // Fetch Ditto
 * const { data: ditto, loading, error, execute } = useApiRequest(
 *   () => pokemonService.getByNameOrId('ditto')
 * );
 *
 * onMounted(() => execute());
 * </script>
 *
 * <template>
 *   <div class="pokemon-details">
 *     <div v-if="loading">Loading Ditto...</div>
 *
 *     <div v-else-if="error" class="error">
 *       Error: {{ error.message }}
 *     </div>
 *
 *     <div v-else-if="ditto" class="pokemon-card">
 *       <h1>{{ ditto.name.toUpperCase() }}</h1>
 *
 *       <!-- Sprites -->
 *       <div class="sprites">
 *         <img
 *           v-if="ditto.sprites.other?.['official-artwork']?.front_default"
 *           :src="ditto.sprites.other['official-artwork'].front_default"
 *           :alt="ditto.name"
 *         />
 *       </div>
 *
 *       <!-- Basic Info -->
 *       <div class="info">
 *         <p><strong>ID:</strong> #{{ ditto.id }}</p>
 *         <p><strong>Height:</strong> {{ ditto.height / 10 }}m</p>
 *         <p><strong>Weight:</strong> {{ ditto.weight / 10 }}kg</p>
 *         <p><strong>Base Experience:</strong> {{ ditto.base_experience }}</p>
 *       </div>
 *
 *       <!-- Types -->
 *       <div class="types">
 *         <h3>Types</h3>
 *         <span
 *           v-for="typeInfo in ditto.types"
 *           :key="typeInfo.type.name"
 *           class="type-badge"
 *           :class="`type-${typeInfo.type.name}`"
 *         >
 *           {{ typeInfo.type.name }}
 *         </span>
 *       </div>
 *
 *       <!-- Stats -->
 *       <div class="stats">
 *         <h3>Base Stats</h3>
 *         <div v-for="statInfo in ditto.stats" :key="statInfo.stat.name">
 *           <label>{{ statInfo.stat.name }}:</label>
 *           <div class="stat-bar">
 *             <div
 *               class="stat-fill"
 *               :style="{ width: `${(statInfo.base_stat / 255) * 100}%` }"
 *             >
 *               {{ statInfo.base_stat }}
 *             </div>
 *           </div>
 *         </div>
 *       </div>
 *
 *       <!-- Abilities -->
 *       <div class="abilities">
 *         <h3>Abilities</h3>
 *         <ul>
 *           <li v-for="abilityInfo in ditto.abilities" :key="abilityInfo.ability.name">
 *             {{ abilityInfo.ability.name }}
 *             <span v-if="abilityInfo.is_hidden">(Hidden)</span>
 *           </li>
 *         </ul>
 *       </div>
 *     </div>
 *   </div>
 * </template>
 *
 * <style scoped>
 * .pokemon-card {
 *   max-width: 600px;
 *   margin: 0 auto;
 *   padding: 20px;
 *   background: white;
 *   border-radius: 12px;
 *   box-shadow: 0 4px 6px rgba(0,0,0,0.1);
 * }
 *
 * .sprites img {
 *   width: 200px;
 *   height: 200px;
 * }
 *
 * .type-badge {
 *   display: inline-block;
 *   padding: 4px 12px;
 *   margin: 4px;
 *   border-radius: 4px;
 *   color: white;
 *   font-weight: bold;
 *   text-transform: uppercase;
 * }
 *
 * .type-normal { background: #A8A878; }
 * .type-fire { background: #F08030; }
 * .type-water { background: #6890F0; }
 * .type-electric { background: #F8D030; }
 * .type-grass { background: #78C850; }
 *
 * .stat-bar {
 *   background: #eee;
 *   border-radius: 4px;
 *   overflow: hidden;
 *   margin: 4px 0;
 * }
 *
 * .stat-fill {
 *   background: #4CAF50;
 *   padding: 4px 8px;
 *   color: white;
 *   font-weight: bold;
 *   transition: width 0.3s ease;
 * }
 * </style>
 *
 * ----------------------------------------------------------------------------
 * EXAMPLE 2: Pokemon List with Search
 * ----------------------------------------------------------------------------
 *
 * <script setup lang="ts">
 * import { ref } from 'vue';
 * import { useApiRequest } from '@/composables/useApiRequest';
 * import pokemonService from '@/services/example/pokemon.service';
 *
 * const searchQuery = ref('');
 *
 * // List pokemon
 * const { data: pokemonList, loading, execute: fetchList } = useApiRequest(
 *   () => pokemonService.getList(50, 0)
 * );
 *
 * // Search
 * const { data: searchResults, loading: searching, execute: search } = useApiRequest(
 *   () => pokemonService.search(searchQuery.value)
 * );
 *
 * const handleSearch = () => {
 *   if (searchQuery.value.length >= 2) {
 *     search();
 *   }
 * };
 *
 * onMounted(() => fetchList());
 * </script>
 *
 * <template>
 *   <div>
 *     <!-- Search -->
 *     <div class="search">
 *       <input
 *         v-model="searchQuery"
 *         @input="handleSearch"
 *         placeholder="Search pokemon..."
 *       />
 *     </div>
 *
 *     <!-- Results -->
 *     <div v-if="searching">Searching...</div>
 *
 *     <div v-else-if="searchQuery && searchResults" class="results">
 *       <h2>Search Results ({{ searchResults.length }})</h2>
 *       <div v-for="pokemon in searchResults" :key="pokemon.name">
 *         {{ pokemon.name }}
 *       </div>
 *     </div>
 *
 *     <!-- List -->
 *     <div v-else-if="pokemonList" class="list">
 *       <h2>Pokemon List</h2>
 *       <div v-for="pokemon in pokemonList.results" :key="pokemon.name">
 *         {{ pokemon.name }}
 *       </div>
 *     </div>
 *   </div>
 * </template>
 *
 * ----------------------------------------------------------------------------
 * EXAMPLE 3: Direct Calls (without composable)
 * ----------------------------------------------------------------------------
 *
 * <script setup lang="ts">
 * import pokemonService from '@/services/example/pokemon.service';
 *
 * // Simple async function
 * const loadPokemon = async () => {
 *   try {
 *     // Get Ditto
 *     const ditto = await pokemonService.getByNameOrId('ditto');
 *     console.log('Ditto:', ditto);
 *
 *     // Get Pikachu by ID
 *     const pikachu = await pokemonService.getByNameOrId(25);
 *     console.log('Pikachu:', pikachu);
 *
 *     // Get simplified data
 *     const simple = await pokemonService.getSimplified('charizard');
 *     console.log('Simplified:', simple);
 *
 *     // Get list
 *     const list = await pokemonService.getList(20, 0);
 *     console.log('First 20 pokemon:', list);
 *
 *     // Search
 *     const results = await pokemonService.search('pika');
 *     console.log('Search results:', results);
 *
 *   } catch (error) {
 *     console.error('Error:', error);
 *   }
 * };
 *
 * onMounted(() => loadPokemon());
 * </script>
 *
 * ============================================================================
 * NOTES
 * ============================================================================
 *
 * 1. **API Base URL**: Make sure your .env has:
 *    VITE_API_BASE_URL=https://pokeapi.co/api/v2
 *
 * 2. **Read-Only API**: PokéAPI is read-only, so we only use GET methods.
 *    The create/update/delete methods from BaseService won't work here.
 *
 * 3. **Rate Limiting**: PokéAPI has fair use limits. Don't make too many
 *    requests in a short time.
 *
 * 4. **Caching**: Consider implementing caching for better performance:
 *    - Store pokemon data in Pinia store
 *    - Use localStorage for offline access
 *
 * 5. **Type Safety**: All responses are fully typed! Your IDE will provide
 *    autocomplete for all Pokemon properties.
 *
 * ============================================================================
 * INHERITED METHODS (Available but not working with PokéAPI)
 * ============================================================================
 *
 * The following methods are inherited from BaseService but DON'T WORK with
 * PokéAPI because it's a READ-ONLY API. However, here's how you would use
 * them in YOUR OWN API that supports write operations:
 *
 * ----------------------------------------------------------------------------
 * CREATE METHOD
 * ----------------------------------------------------------------------------
 *
 * If PokéAPI supported creating Pokemon (it doesn't), you would use:
 *
 * <script setup lang="ts">
 * import pokemonService from '@/services/example/pokemon.service';
 * import { useApiRequest } from '@/composables/useApiRequest';
 *
 * // Define your create data
 * const newPokemon = ref({
 *   name: 'my-custom-pokemon',
 *   height: 10,
 *   weight: 100,
 *   base_experience: 150,
 *   // ... other required fields
 * });
 *
 * // OPTION 1: With composable
 * const { loading, execute: createPokemon } = useApiRequest(
 *   () => pokemonService.create(newPokemon.value),
 *   {
 *     successMessage: 'Pokemon created!',
 *     errorMessage: 'Failed to create Pokemon',
 *     onSuccess: (created) => {
 *       console.log('Created Pokemon:', created);
 *       // Reload list, redirect, etc.
 *     }
 *   }
 * );
 *
 * // Use it
 * const handleCreate = async () => {
 *   await createPokemon();
 * };
 *
 * // OPTION 2: Direct call
 * const createPokemonDirect = async () => {
 *   try {
 *     const created = await pokemonService.create(newPokemon.value);
 *     console.log('Created:', created);
 *   } catch (error) {
 *     console.error('Failed:', error);
 *   }
 * };
 * </script>
 *
 * ----------------------------------------------------------------------------
 * UPDATE METHOD (Full Update)
 * ----------------------------------------------------------------------------
 *
 * If you could update a Pokemon completely:
 *
 * <script setup lang="ts">
 * import pokemonService from '@/services/example/pokemon.service';
 * import { useApiRequest } from '@/composables/useApiRequest';
 *
 * const pokemonId = ref(25); // Pikachu
 * const updatedData = ref({
 *   name: 'pikachu',
 *   height: 5,
 *   weight: 70,
 *   base_experience: 200,
 *   // ... all required fields (full update)
 * });
 *
 * // OPTION 1: With composable
 * const { loading, execute: updatePokemon } = useApiRequest(
 *   () => pokemonService.update(pokemonId.value, updatedData.value),
 *   {
 *     successMessage: 'Pokemon updated!',
 *     onSuccess: (updated) => {
 *       console.log('Updated Pokemon:', updated);
 *     }
 *   }
 * );
 *
 * // OPTION 2: Direct call
 * const updatePokemonDirect = async () => {
 *   try {
 *     const updated = await pokemonService.update(
 *       pokemonId.value,
 *       updatedData.value
 *     );
 *     console.log('Updated:', updated);
 *   } catch (error) {
 *     console.error('Failed:', error);
 *   }
 * };
 * </script>
 *
 * ----------------------------------------------------------------------------
 * PATCH METHOD (Partial Update)
 * ----------------------------------------------------------------------------
 *
 * If you could update only specific fields:
 *
 * <script setup lang="ts">
 * import pokemonService from '@/services/example/pokemon.service';
 * import { useApiRequest } from '@/composables/useApiRequest';
 *
 * const pokemonId = ref(25);
 *
 * // Only update specific fields (partial update)
 * const partialUpdate = ref({
 *   weight: 75, // Only updating weight
 *   base_experience: 250 // And base experience
 *   // Other fields remain unchanged
 * });
 *
 * // OPTION 1: With composable
 * const { loading, execute: patchPokemon } = useApiRequest(
 *   () => pokemonService.patch(pokemonId.value, partialUpdate.value),
 *   {
 *     successMessage: 'Pokemon stats updated!',
 *     onSuccess: (updated) => {
 *       console.log('Patched Pokemon:', updated);
 *     }
 *   }
 * );
 *
 * // OPTION 2: Direct call
 * const patchPokemonDirect = async () => {
 *   try {
 *     const patched = await pokemonService.patch(
 *       pokemonId.value,
 *       { weight: 75 } // Only update one field
 *     );
 *     console.log('Patched:', patched);
 *   } catch (error) {
 *     console.error('Failed:', error);
 *   }
 * };
 * </script>
 *
 * ----------------------------------------------------------------------------
 * DELETE METHOD
 * ----------------------------------------------------------------------------
 *
 * If you could delete a Pokemon:
 *
 * <script setup lang="ts">
 * import pokemonService from '@/services/example/pokemon.service';
 * import { useApiRequest } from '@/composables/useApiRequest';
 *
 * const pokemonId = ref(25);
 *
 * // OPTION 1: With composable
 * const { loading, execute: deletePokemon } = useApiRequest(
 *   () => pokemonService.delete(pokemonId.value),
 *   {
 *     successMessage: 'Pokemon deleted!',
 *     errorMessage: 'Failed to delete Pokemon',
 *     onSuccess: () => {
 *       console.log('Pokemon deleted successfully');
 *       // Reload list, redirect, etc.
 *     }
 *   }
 * );
 *
 * // OPTION 2: Direct call
 * const deletePokemonDirect = async () => {
 *   // Show confirmation
 *   if (!confirm('Are you sure you want to delete this Pokemon?')) {
 *     return;
 *   }
 *
 *   try {
 *     await pokemonService.delete(pokemonId.value);
 *     console.log('Deleted successfully');
 *   } catch (error) {
 *     console.error('Failed to delete:', error);
 *   }
 * };
 * </script>
 *
 * ----------------------------------------------------------------------------
 * COMPLETE CRUD COMPONENT EXAMPLE
 * ----------------------------------------------------------------------------
 *
 * Here's a complete component showing all CRUD operations:
 *
 * <script setup lang="ts">
 * import { ref, onMounted } from 'vue';
 * import { useApiRequest } from '@/composables/useApiRequest';
 * import myResourceService, { type MyResource } from '@/services/my-resource.service';
 *
 * // List
 * const { data: items, loading, execute: fetchItems } = useApiRequest(
 *   () => myResourceService.getAll()
 * );
 *
 * // Create
 * const newItem = ref({ name: '', description: '' });
 * const { loading: creating, execute: createItem } = useApiRequest(
 *   () => myResourceService.create(newItem.value),
 *   {
 *     successMessage: 'Created!',
 *     onSuccess: () => {
 *       fetchItems(); // Reload list
 *       newItem.value = { name: '', description: '' }; // Reset form
 *     }
 *   }
 * );
 *
 * // Update
 * const selectedItem = ref<MyResource | null>(null);
 * const { loading: updating, execute: updateItem } = useApiRequest(
 *   () => myResourceService.update(selectedItem.value!.id, selectedItem.value!),
 *   {
 *     successMessage: 'Updated!',
 *     onSuccess: () => fetchItems()
 *   }
 * );
 *
 * // Patch (partial update)
 * const patchItem = async (id: string, changes: Partial<MyResource>) => {
 *   const { execute } = useApiRequest(
 *     () => myResourceService.patch(id, changes),
 *     {
 *       successMessage: 'Updated!',
 *       onSuccess: () => fetchItems()
 *     }
 *   );
 *   await execute();
 * };
 *
 * // Delete
 * const deleteItem = async (id: string) => {
 *   if (!confirm('Delete this item?')) return;
 *
 *   const { execute } = useApiRequest(
 *     () => myResourceService.delete(id),
 *     {
 *       successMessage: 'Deleted!',
 *       onSuccess: () => fetchItems()
 *     }
 *   );
 *   await execute();
 * };
 *
 * onMounted(() => fetchItems());
 * </script>
 *
 * <template>
 *   <div>
 *     <!-- Create Form -->
 *     <form @submit.prevent="createItem">
 *       <input v-model="newItem.name" placeholder="Name" required />
 *       <input v-model="newItem.description" placeholder="Description" />
 *       <button type="submit" :disabled="creating">
 *         {{ creating ? 'Creating...' : 'Create' }}
 *       </button>
 *     </form>
 *
 *     <!-- List -->
 *     <div v-if="loading">Loading...</div>
 *     <div v-else-if="items">
 *       <div v-for="item in items" :key="item.id">
 *         <h3>{{ item.name }}</h3>
 *         <p>{{ item.description }}</p>
 *
 *         <!-- Quick partial update -->
 *         <button @click="patchItem(item.id, { name: 'Updated Name' })">
 *           Quick Update Name
 *         </button>
 *
 *         <!-- Full update -->
 *         <button @click="selectedItem = item; updateItem()">
 *           Full Update
 *         </button>
 *
 *         <!-- Delete -->
 *         <button @click="deleteItem(item.id)">
 *           Delete
 *         </button>
 *       </div>
 *     </div>
 *   </div>
 * </template>
 *
 * ----------------------------------------------------------------------------
 * KEY DIFFERENCES: UPDATE vs PATCH
 * ----------------------------------------------------------------------------
 *
 * **UPDATE** (PUT):
 * - Replaces the ENTIRE resource
 * - Must send ALL required fields
 * - Missing fields will be removed/reset
 *
 * **PATCH**:
 * - Updates ONLY specified fields
 * - Send only fields you want to change
 * - Other fields remain unchanged
 *
 * Example:
 *
 * // UPDATE (must send everything)
 * await service.update(id, {
 *   name: 'New Name',
 *   description: 'New Description',
 *   price: 100,
 *   stock: 50,
 *   category: 'Electronics'
 *   // All required fields!
 * });
 *
 * // PATCH (only what changed)
 * await service.patch(id, {
 *   price: 120 // Only update price
 * });
 *
 * ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * This Pokemon service demonstrates READ operations with a real API.
 * For YOUR OWN APIs that support write operations, you have these methods
 * available from BaseService:
 *
 * - ✅ getAll(params?) - List resources
 * - ✅ getById(id) - Get single resource
 * - 📝 create(data) - Create new resource (POST)
 * - 📝 update(id, data) - Full update (PUT)
 * - 📝 patch(id, data) - Partial update (PATCH)
 * - ❌ delete(id) - Delete resource (DELETE)
 *
 * All methods return typed promises and work with the useApiRequest composable!
 *
 * ============================================================================
 */
