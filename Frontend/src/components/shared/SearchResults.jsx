import React from "react"
import { useSearchParams } from "react-router-dom"

const places = [
  "Taj Mahal",
  "Goa Beaches",
  "Jaipur Fort",
  "Kerala Backwaters",
  "Manali Hills",
]

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query") || ""

  const results = places.filter((place) =>
    place.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">
        Results for "{query}"
      </h2>
      <ul>
        {results.map((place, i) => (
          <li key={i} className="py-2 border-b">
            {place}
          </li>
        ))}
      </ul>
      {results.length === 0 && <p>No matches found.</p>}
    </div>
  )
}

export default SearchResults