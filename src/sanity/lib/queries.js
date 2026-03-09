import { client } from './client'

// Services
export async function getServices() {
  return client.fetch(
    `*[_type == "services"] | order(order asc) {
      "id": calEventTypeId,
      name,
      duration,
      price
    }`
  )
}

// Location
export async function getLocation() {
  return client.fetch(
    `*[_type == "location"][0] {
      address,
      city,
      phone,
      email,
      hours
    }`
  )
}

export async function getLookbook() {
  return client.fetch(
    `*[_type == "lookbook"] | order(order asc) {
      _id,
      alt,
      "url": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
    }`
  )
}
