import Container from "../shared/Container";
import Title from "../shared/Title";

const logos = ["discord", "openai", "paypal", "spotify", "youtube"];

const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted By Industry Leaders</Title>
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, idx) => {
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-body border border-gray-900 group"
              >
                <img
                  src={`/logos/${logo}.png`}
                  alt={logo}
                  width={100}
                  height={60}
                  className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Brands;
