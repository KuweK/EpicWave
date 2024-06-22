'use client'

import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...")
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            setMessage(data.message)
            setPeople(data.people)
        }
    )
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Hello from frontend and {message}
        {
            people.map((person, index) => (
                <div key={index}>
                    {person}
                </div>
            ))
        }
      </div>
    </main>
  );
}
