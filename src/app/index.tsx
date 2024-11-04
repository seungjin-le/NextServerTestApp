'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { serverSide } from './page'
import { useState } from 'react'

import axios from 'axios'

export default function Index() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })
  const [email, setEmail] = useState('asfdsafd')
  const [password, setPassword] = useState('asfasffasd')

  const handleLogin = async () => {
    const res = await axios.post('/api/v1/login', {
      data: {
        email,
        password
      }
    })
  }

  return <div></div>
}
