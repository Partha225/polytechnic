const STITCH_URL = 'https://stitch.googleapis.com/mcp'
const API_KEY = process.env.NEXT_PUBLIC_STITCH_API_KEY || 'AQ.Ab8RN6KFeR0zO7scJh6OwfDkYNurPvR2isDfBD67wDEGh8dmFw'

export async function callStitchTool(method: string, params: any) {
  const response = await fetch(STITCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'tools/call',
      params: {
        name: method,
        arguments: params,
      },
    }),
  })
  const data = await response.json()
  if (data.error) {
    throw new Error(data.error.message)
  }
  return data.result
}

export async function listScreens(projectId: string) {
  return await callStitchTool('list_screens', { projectId })
}

export async function getScreenCode(projectId: string, screenId: string) {
  return await callStitchTool('fetch_screen_code', { projectId, screenId })
}

export async function generateScreen(projectId: string, prompt: string) {
  return await callStitchTool('generate_screen_from_text', { projectId, prompt })
}