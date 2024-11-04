'use client'

import { useState, useCallback } from 'react'

export function useToggle(initialValue: boolean = false): [boolean, (value?: boolean) => void] {
  const [on, setOn] = useState<boolean>(initialValue)

  const handleToggle = useCallback((value?: boolean) => {
    if (typeof value === 'boolean') {
      return setOn(value)
    }

    return setOn((v) => !v)
  }, [])

  return [on, handleToggle]
}
