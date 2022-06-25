import { useEffect } from 'react'

export const Hello = (props: { target: string }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Hello!')
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <p>{props.target}</p>
}
