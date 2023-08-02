import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pokemonsService from "./pokemonsService";

const initialState = {
  poks: [],
  pok: null,
  isLoading: false,
  isError: false,
  message:''
};
export const pokemonSlice = createSlice({
  name: "poks",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = '';

    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllPokemons.fulfilled, (state, action) => {
      state.poks = action.payload.results;
    })
    .addCase(getAllPokemons.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllPokemons.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getPokemonByName.fulfilled, (state, action) => {
      state.pok = action.payload;
      
      // state.isError = false; 
    })
    .addCase(getPokemonByName.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getPokemonByName.rejected, (state,action) => {
      state.isError = true;
      state.message = action.payload;
   
    })
  },
});

export const getAllPokemons = createAsyncThunk("poks/getAllPokemons",
async (offset) => {
    try {
      return await pokemonsService.getAllPokemons(offset);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getPokemonByName = createAsyncThunk(
  "poks/getPokemonByName",
  async (name,thunkAPI) => {
    try {
      
      return await pokemonsService.getPokemonByName(name);
      
    } catch (error) {
      console.log(error);
   const message = error.response.data;
   return thunkAPI.rejectWithValue(message)
    }
  }
);

export const { reset } = pokemonSlice.actions;
export default pokemonSlice.reducer;
