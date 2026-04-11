'use client'

import { useEffect, useState } from 'react'
import { getScreenCode } from '@/lib/stitch'

interface StitchScreenProps {
  projectId: string
  screenId: string
}

export default function StitchScreen({ projectId, screenId }: StitchScreenProps) {
  const [html, setHtml] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchScreen = async () => {
      try {
        const result = await getScreenCode(projectId, screenId)
        setHtml(result.html) // assuming the result has html
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load screen')
      } finally {
        setLoading(false)
      }
    }
    fetchScreen()
  }, [projectId, screenId])

  if (loading) return <div className="flex items-center justify-center h-64">Loading screen...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}