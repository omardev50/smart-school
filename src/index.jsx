import { render } from 'preact';

import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {
  return (
    <h1>Hello World!</h1>
  )
}

render(<App />, document.getElementById('app'));
