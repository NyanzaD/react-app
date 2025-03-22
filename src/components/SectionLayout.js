function SectionLayout({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className={`py-6 flex flex-col ${
            item.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-6 px-8`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/2 rounded shadow-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionLayout;
