import { computed, onMounted, ref } from 'vue';
import { GammeStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import pokemonApi from '../api/pokemonApi';

export const usePokemonGame = () => {
  const gameStatus = ref<GammeStatus>(GammeStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);

  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlPats = pokemon.url.split('/');
      const id = urlPats.at(-2) ?? 0;

      return {
        id: +id,
        name: pokemon.name,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GammeStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextOptions();
  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,

    // Methods
    getNextOptions,
  };
};
