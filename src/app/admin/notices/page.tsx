'use client'

import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminNotices() {
  const { user, role } = useAuth()
  const router = useRouter()
  const [notices, setNotices] = useState<any[]>([])
  const [form, setForm] = useState({ title: '', description: '', category: '' })

  useEffect(() => {
    if (role !== 'admin') router.push('/dashboard')
    fetchNotices()
  }, [role, router])

  const fetchNotices = async () => {
    const { data } = await supabase.from('announcements').select('*')
    setNotices(data || [])
  }

  const addNotice = async () => {
    await supabase.from('announcements').insert([form])
    setForm({ title: '', description: '', category: '' })
    fetchNotices()
  }

  if (role !== 'admin') return null

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel - Notices</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Notice</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="block w-full border-gray-300 rounded-md shadow-sm"
              />
              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="block w-full border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="block w-full border-gray-300 rounded-md shadow-sm"
              />
              <button
                onClick={addNotice}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Notice
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Existing Notices</h3>
              <div className="mt-4 space-y-3">
                {notices.map((notice) => (
                  <div key={notice.id} className="border rounded p-4">
                    <h4 className="font-medium">{notice.title}</h4>
                    <p>{notice.description}</p>
                    <span className="text-sm text-gray-500">{notice.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}