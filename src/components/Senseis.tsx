import FadeIn from "./FadeIn";

const senseis = [
  {
    name: "Leopoldo Schiavone",
    rank: "3er Dan",
    image: "./images/optimized/profe_leopoldo.webp",
    alt: "Sensei Leopoldo Schiavone",
  },
  {
    name: "Lucas Le Pera",
    rank: "1er Dan",
    image: "./images/optimized/profe_lucas_final.webp",
    alt: "Sensei Lucas Le Pera",
  },
];

export default function Senseis() {
  return (
    <section
      id="senseis"
      className="bg-dojo-black py-16 md:py-24 px-8 md:px-12"
    >
      <div className="max-w-[1800px] mx-auto">
        <FadeIn>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-8 md:mb-10">
            Senseis
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 ">
          {senseis.map((sensei, i) => (
            <FadeIn key={sensei.name} delay={0.2 + i * 0.3}>
              <div className="flex items-center">
                {/* Info */}
                <div className="pr-10">
                  <p className="font-display text-xl md:text-2xl text-dojo-cream leading-tight">
                    {sensei.name}
                  </p>
                  <p className="text-dojo-yellow text-xs tracking-[0.2em] uppercase mt-2">
                    {sensei.rank}
                  </p>
                </div>

                {/* Image wrapper with border-radius */}
                <div
                  className="flex-1 overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  <img
                    src={sensei.image}
                    alt={sensei.alt}
                    width="700"
                    height="1244"
                    loading="lazy"
                    className="w-full max-h-[55vh] object-cover senseiImage"
                    style={{ borderRadius: "16px" }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
