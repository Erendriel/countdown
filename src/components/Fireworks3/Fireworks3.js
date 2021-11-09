import { Fireworks } from 'fireworks/lib/react'

function Fireworks3() {
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#ffb4b4', '#e1c693', '#8dd0b3'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 2.3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div>
      <Fireworks {...fxProps} />
      <h1>Congrats!</h1>
    </div>
  )
}

export default Fireworks3;