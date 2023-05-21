import { useDispatch, useSelector } from 'react-redux';
import Title from './components/Title';
import { BsPersonCircle } from 'react-icons/bs';
import { addAspekPenilaian1Mhs1 } from './slices/nilaiSlice';

function App() {
  const dispatch = useDispatch();
  const aspek_penilaian_1 = useSelector((state) => state.nilai);

  console.log(JSON.stringify(aspek_penilaian_1));

  return (
    <div className="max-w-5xl mx-auto w-11/12">
      <Title />
      <div className="grid grid-cols-5 gap-5 m-3 justify-items-center">
        <h3 className="col-start-2">Aspek Penilaian 1</h3>
        <h3>Aspek Penilaian 2</h3>
        <h3>Aspek Penilaian 3</h3>
        <h3>Aspek Penilaian 4</h3>
      </div>
      <form>
        <div className="grid grid-cols-5 gap-5 border-solid border-2 rounded-md border-gray-600 p-2">
          <div className="flex flex-row gap-5">
            <BsPersonCircle className="w-7 h-7" />
            <h3>Mahasiswa 1</h3>
          </div>
          <select
            name="nilai"
            id="nilai"
            onChange={(e) => dispatch(addAspekPenilaian1Mhs1(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-5 m-3 justify-items-end">
          <button className="rounded-md bg-black px-4 py-1 text-white">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
