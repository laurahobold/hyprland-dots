import React from 'react'

type Props = {
  className?: string
}

const Gauge: React.FC<Props> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M9.49992 11.0833L12.6666 7.91667M2.64409 15.0417C1.94917 13.8382 1.5833 12.473 1.58325 11.0833C1.5832 9.69359 1.94896 8.32836 2.64378 7.12483C3.3386 5.9213 4.33799 4.92187 5.5415 4.227C6.745 3.53214 8.11022 3.16632 9.49992 3.16632C10.8896 3.16632 12.2548 3.53214 13.4583 4.227C14.6618 4.92187 15.6612 5.9213 16.3561 7.12483C17.0509 8.32836 17.4166 9.69359 17.4166 11.0833C17.4165 12.473 17.0507 13.8382 16.3558 15.0417"
        stroke="#015D7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Gauge
