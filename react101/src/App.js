import './App.css';

function App() {
  const name = 'saleh';
  const time = 4 * 5;
  const age = 25;
  let message;

  // if (age > 20) {
  //   message = 'You are older than 20 years old';
  // } else {
  //   message = 'You are  not older than 20 years old';
  // }

  const colors = ['red', 'green', 'blue', 'black'];
  const colorsMap = colors.map((color) => {
    return <li>{color}</li>;
  });

  return (
    <div className='app'>
      <label htmlFor='123'></label>
      <h1 className='title'>Hey from react !</h1>
      <h1>{4 * 4}</h1>
      <p>{time}</p>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{message}</h1>
      <h2>{age > 20 ? 'You are older than 20 years old' : 'You are  not older than 20 years old'}</h2>
      <ol>{colorsMap}</ol>
      <ol>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
