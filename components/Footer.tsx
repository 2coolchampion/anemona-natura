import React from "react"

const Footer = () => {
  return (
    <footer className="h-64 w-full bg-green-dark py-8 text-center text-xs text-white">
      <div className="flex h-36 justify-center border-2">
        <div className="flex flex-col items-start border px-9">
          <h4>Stranice</h4>
          <ul className="flex flex-col flex-wrap items-start">
            <li className="text-white">Link to</li>
            <li className="text-white">Link to</li>
            <li className="text-white">Link to</li>
            <li className="text-white">Link to</li>
            <li className="text-white">Link to</li>
          </ul>
        </div>
        <div className="flex flex-col items-start border px-9">
          <h4>KONTAKT</h4>
          <ul className="flex flex-col flex-wrap items-start">
            <li className="text-white">VL. Sabrina Hribar</li>
            <li className="text-white">099 286 8118</li>
            <li className="text-white">anemona.natura.info@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col items-start border px-9">
          <h4>ADRESA</h4>
          <ul className="flex flex-col flex-wrap items-start">
            <li className="text-white">Anomna NAture d.o.o.</li>
            <li className="text-white">M. J. Šporera 20</li>
            <li className="text-white">47 000 Karlovac, Hrvatska</li>
          </ul>
        </div>
      </div>
      © 2024 Anemora Natura d.o.o.
    </footer>
  )
}

export default Footer
