import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import pokemonApi from '../api/pokemonApi';
import confetti from "canvas-confetti";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);

  const randomPokemon = computed( () => pokemonsOptions.value[ Math.floor( Math.random() * pokemonsOptions.value.length ) ] ); // Un pokemon de pokemonOptions
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

  const getNextRounds = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = ( id: number ) => {
    const hasWon = randomPokemon.value.id === id;
    if( hasWon ) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: {
          x: 0.5,
          y: 0.6
        }
      });

      return;
    }

    gameStatus.value = GameStatus.Lost;
    
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextRounds();
  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,

    // Methods
    getNextRounds,
    checkAnswer,
  };
};
