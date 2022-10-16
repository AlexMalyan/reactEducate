// import { Count as CountClass } from './class-components/Count';
import { Form } from './components/Form/Form';
import { Form as FormClass } from './class-components/Form';
import { Count } from './components/Count';

import './index.css'


export const App = () => {
  return (
    <div className="App">
      <h2 style={{ backgroundColor: 'grey' }}>
        Class component
      </h2>
      <Form />
      {/* <CountClass count={10} /> */}
      <Count />
      <hr />
      <FormClass />
    </div>
  );
}

export default App;
