import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h2> This is my first vite-typescript project. </h2>
  </div>
`

setupCounter()
