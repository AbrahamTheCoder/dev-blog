export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=2400&auto=format&fit=crop&q=80"
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4 max-w-4xl text-white text-center">
          <h1 className="text-6xl font-light mb-6">About</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Exploring the intersection of technology, creativity, and human experience
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 max-w-2xl">
          <div className="prose dark:prose-invert mx-auto">
            <p className="text-xl leading-relaxed">
              Hi, I'm Alex Chen, a software engineer and writer based in San Francisco. 
              Through this journal, I explore the evolving landscape of technology 
              and its impact on our lives.
            </p>
            <p className="text-xl leading-relaxed">
              My writing focuses on the intersection of software development, 
              design thinking, and digital culture. I believe in creating technology 
              that enhances human experience while maintaining simplicity and elegance.
            </p>
            <p className="text-xl leading-relaxed">
              When I'm not coding or writing, you can find me exploring new coffee shops, 
              practicing photography, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}