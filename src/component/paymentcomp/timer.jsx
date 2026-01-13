"use client"

import { useEffect, useState } from "react"

const Timer = ({invoice}) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const key = `endTime_${invoice}`
    let endTime = Number(localStorage.getItem(key))

 
    if (!endTime || endTime <= Date.now()) {
      endTime = Date.now() + 5 * 60 * 1000
      localStorage.setItem(key, endTime.toString())
    }

    const interval = setInterval(() => {
      const secondsLeft = Math.floor((endTime - Date.now()) / 1000)

      if (secondsLeft <= 0) {
        setTime(0)
        clearInterval(interval)
        return
      }

      setTime(secondsLeft)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)

  return (
    <div>
      <p className="mx-10 rounded-xl border-2 border-amber-500 p-3 text-amber-500 bg-amber-500/20 text-lg">
        waiting for your payment. please complete your payment
      </p>

      <p className="mx-10 mt-4 max-w-2xs rounded-xl border-2 border-amber-500 p-3 text-xl font-bold text-amber-600">
        {hours} jam : {minutes} menit : {seconds} detik
      </p>
    </div>
  )
}

export default Timer
