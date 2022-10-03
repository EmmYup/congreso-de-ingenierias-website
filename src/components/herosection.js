import React from "react"
import ReactPlayer from "react-player"

const HeroSection = () => (
  <section className="text-gray-700 body-font py-5">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          XVI Congreso de
          <br className="hidden lg:inline-block" />
          Estudiantes de Ingeniería
        </h1>
        <p className="mb-8 leading-relaxed">
          El Congreso de Estudiantes de Ingeniería (CEI) se realiza desde hace
          15 años y cada año se presentan Conferencias Magistrales, Talleres,
          Concursos y Presentación de proyectos de ingeniería a través de
          Ponencias, Póster y Prototipo.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            ¡Regístrate!
          </button>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
            Button
          </button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <ReactPlayer url="https://youtu.be/Vn9hGZZWczU" />
      </div>
    </div>
  </section>
)

export default HeroSection
