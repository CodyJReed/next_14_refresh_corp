import Hero from "@/components/hero"
import scaleImg from 'public/scale.jpg'

export default function Scale() {
  return <div>
    <Hero
      imgData={scaleImg}
      imgAlt="massive steel factory"
      title="Scale your app..."
    />
  </div>
}
