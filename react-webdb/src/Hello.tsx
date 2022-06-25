import { useState, useEffect, startTransition, Suspense, ChangeEvent } from 'react'

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

export const Counter = () => {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>
}

export const Timer = () => {
  const count = useTimer()
  return <p>{count}</p>
}

const useTimer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return count
}

let count = 0
export const RenderCount = () => {
  count++
  return <p>ImpureCounter: {count}</p>
}

export const SearchArea = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [input, setInput] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement
    setInput(target.value)
    startTransition(() => {
      setSearchQuery(target.value)
    })
  }

  return (
    <>
      <p>
        <input type="search" value={input} onChange={handleInput} />
      </p>
      <Suspense fallback={<p>Searching...</p>}>
        <SearchResult query={searchQuery} />
      </Suspense>
    </>
  )
}

const SearchResult = (props: { query: string }) => {
  return (
    <>
      <p>Search Result: {props.query}</p>
    </>
  )
}
