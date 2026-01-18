import Hero from "@/components/hero"
import reliabilityImg from 'public/reliability.jpg'

export default function Reliability() {
  return <div>
    <Hero
      imgData={reliabilityImg}
      imgAlt="worker welding"
      title="Super high R.H."    />
  </div>
}
