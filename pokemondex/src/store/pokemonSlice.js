import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  selectedPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.selectedPokemons.length < 6) {
        const isExist = state.selectedPokemons.some(
          (pokemon) => pokemon.id === action.payload.id
        );

        if (!isExist) {
          state.selectedPokemons.push(action.payload);
        } else {
          //alert("포켓몬이 이미 추가되어 있습니다.");
          toast.error("포켓몬이 이미 추가되어 있습니다.");
        }
      } else {
        //alert("포켓몬을 최대 6개까지 선택할 수 있습니다.");
        toast.error("포켓몬을 최대 6개까지 선택할 수 있습니다.");
      }
    },
    removePokemon: (state, action) => {
      state.selectedPokemons = state.selectedPokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
