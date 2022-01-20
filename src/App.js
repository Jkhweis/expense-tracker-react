import './App.css';
import { Header } from './comps/Header';
import { Balance } from './comps/Balance';
import { IncomeExpenses } from './comps/IncomeExpenses';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
