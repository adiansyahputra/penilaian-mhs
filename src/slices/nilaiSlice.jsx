import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  aspek_penilaian_1: { mahasiswa_1: '' },
  aspek_penilaian_2: [],
  aspek_penilaian_3: [],
  aspek_penilaian_4: [],
};

export const nilaiSlice = createSlice({
  name: 'nilai',
  initialState: initialValue,
  reducers: {
    addAspekPenilaian1Mhs1: (state, action) => {
      state.aspek_penilaian_1.mahasiswa_1 = action.payload;
    },
  },
});

export const { addAspekPenilaian1Mhs1 } = nilaiSlice.actions;
export default nilaiSlice.reducer;
