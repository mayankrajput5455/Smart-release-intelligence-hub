import { useEffect, useState } from "react"

export default function FailedGates() {

  const [failedGates, setFailedGates] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/api/release")
      .then((res) => res.json())
      .then((data) => {
        setFailedGates(data.readiness.failedGates)
      })

  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Failed Gates
      </h2>

      {
        failedGates.length === 0 ? (

          <div className="bg-green-100 text-green-700 p-4 rounded-lg">
            ✅ No failed gates
          </div>

        ) : (

          <div className="space-y-4">

            {
              failedGates.map((gate, index) => (

                <div
                  key={index}
                  className="bg-red-100 text-red-700 p-4 rounded-lg"
                >
                  ❌ {gate.message}
                </div>

              ))
            }

          </div>

        )
      }

    </div>
  )
}