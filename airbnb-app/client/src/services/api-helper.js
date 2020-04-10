import axios from "axios"

const baseUrl = "http://localhost:3000"

const api = axios.create({
  baseURL: baseUrl,
})

const authToken = localStorage.getItem("authToken")
if (authToken) {
  api.defaults.headers.common.authorization = `Bearer ${authToken}`
}

// ######################################
// ################ AUTH ################
// ######################################

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData })
  localStorage.setItem("authToken", resp.data.token)
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post("/users/", { user: registerData })
  localStorage.setItem("authToken", resp.data.token)
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken")
  if (token) {
    const resp = await api.get("/auth/verify")
    return resp.data
  }
  return false
}

export const removeToken = () => {
  localStorage.clear()
}

export const getUser = () => api.get(`/users/current-user`)

// ############################################
// ################ PROPERTIES ################
// ############################################

export const listProperties = async () => {
  const resp = await api.get(`/properties`)
  return resp.data
}

export const listPropertyItem = async (id) => {
  const resp = await api(`/properties/${id}`)
  return resp.data
}

export const destroyProperty = (id) => api.delete(`/properties/${id}`)

export const postProperty = (item) => api.post(`/properties`, item)

export const updateProperty = (item) =>
  api.patch(`/properties/${item.id}`, item)

// ############################################
// ################ CITIES ################
// ############################################

export const listCities = () => api.get(`/cities`)
