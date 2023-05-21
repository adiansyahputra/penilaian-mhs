import { createSlice } from '@reduxjs/toolkit';

const getInitialNilai = () => {
  const nilai = window.localStorage.getItem('nilai');
  if (nilai) {
    return JSON.parse(nilai);
  }
  window.localStorage.setItem('nilai', JSON.stringify([]));
  return [];
};

const initialValue = {
  nilai: getInitialNilai(),
};

export const nilaiSlice = createSlice({
  name: 'nilai',
  initialState: initialValue,
  reducers: {
    addNilai: (state, action) => {
      state.nilai.push(action.payload);
      const nilai = window.localStorage.getItem('nilai');
      if (nilai) {
        const nilaiArr = JSON.parse(nilai);
        nilaiArr.push({ ...action.payload });
        window.localStorage.setItem('nilai', JSON.stringify(nilaiArr));
      } else {
        window.localStorage.setItem(
          'nilai',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
  },
});

export const { addNilai } = nilaiSlice.actions;
export default nilaiSlice.reducer;
