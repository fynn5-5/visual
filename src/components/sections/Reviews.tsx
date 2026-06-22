import { Star, Quote, Check } from "@/components/brand/Icons"

const reviews = [
  {
    name: "Sandra & Bruno",
    pet: "Labrador, 4 J.",
    text: "Die Kühlmatte war im Hochsommer die Rettung. Bruno liegt nur noch darauf und hechelt deutlich weniger. Lieferung kam in 4 Tagen!",
    initial: "S",
  },
  {
    name: "Michael K.",
    pet: "Katze Lotte",
    text: "Endlich trinkt Lotte genug – der Brunnen läuft leise und sieht auch noch schön aus. Filter im Abo ist mega praktisch.",
    initial: "M",
  },
  {
    name: "Jasmin R.",
    pet: "Mini-Aussie",
    text: "Das Schnüffelspiel beschäftigt meinen Wirbelwind an Regentagen perfekt. Top Qualität, und der Kundenservice ist superschnell.",
    initial: "J",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-sage-deep px-6 py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="flex text-honey">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" />
              ))}
            </span>
            <span className="font-sans text-lg font-bold">4,8 / 5</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Über 3.400 glückliche Tierfreunde
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 text-cream/75">
            <Check className="h-4 w-4" /> Verifizierte Bewertungen
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl bg-cream/8 p-7 backdrop-blur-sm ring-1 ring-cream/15"
            >
              <Quote className="h-7 w-7 text-honey" />
              <blockquote className="mt-4 flex-1 text-cream/90">
                „{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terra font-serif text-lg text-cream">
                  {r.initial}
                </span>
                <span>
                  <span className="block font-sans text-sm font-bold">{r.name}</span>
                  <span className="block text-xs text-cream/70">{r.pet}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
