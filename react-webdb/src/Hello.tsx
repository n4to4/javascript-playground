import { useEffect } from 'react'

export const Hello = (props: { target: string; interval: number }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Hello!')
    }, props.interval)

    return () => {
      clearInterval(timer)
    }
  }, [props.interval])

  return <p>{props.target}</p>
}
