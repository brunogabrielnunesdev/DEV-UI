import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.devui.local',
  timeout: 8000,
  headers: {
    'x-devui-client': 'design-system-docs',
  },
})

export function buildEndpoint(path) {
  return `${apiClient.defaults.baseURL}${path}`
}
