import ServiceDetail from "../components/ServiceDetail";
import { services } from "../data";
export default function HomePage() {
  return (
    <>
      <div className="container flex flex-col mt-5">
        <h1 className="text-5xl font-bold mb-5 text-indigo-600">
          FullStack <span className="text-indigo-700">Developer</span>
        </h1>
        <p className="text-lg">
          Mi nombre es Marcos, desarrollador fullstack apasionado con la
          tecnologia Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque magnam maiores laboriosam quo commodi fugiat? Consequatur a,
          hic molestiae pariatur officiis et repudiandae velit facilis quia,
          facere numquam tempore assumenda!
        </p>

        <h2 className="text-5xl mt-20 font-bold mb-5 text-indigo-600 text-center">
          Mis servicios
        </h2>
        <div className="grid grid-cols-6 grid-rows-3 mt-10 gap-10">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </div>

      <img src="/foto.png" alt="Imagen marcos" className="shadow w-3xl" />
    </>
  );
}
