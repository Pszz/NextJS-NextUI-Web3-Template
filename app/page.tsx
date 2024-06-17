import { Button } from '@nextui-org/react'

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className="text-lg">HomePage</h1>
      <div className="flex gap-4">
        <Button>button</Button>
        <Button color="primary">primary</Button>
      </div>
    </section>
  )
}
