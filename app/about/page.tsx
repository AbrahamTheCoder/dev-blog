import Image from 'next/image';
import ProfilePicture from '../components/ProfilePicture';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=2400&auto=format&fit=crop&q=80"
            alt="About background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-light mb-6">About</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Exploring the intersection of technology, creativity, and human experience
          </p>
        </div>
      </section>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ProfilePicture />
        </div>
        <section className="pt-40 px-4 max-w-4xl mx-auto text-center">
          <div className="max-w-6xl w-full">
            <div className="prose dark:prose-invert mx-auto text-center">
              <p className="text-xl leading-relaxed">
                Hi, I&apos;m Alex Chen, a software engineer and writer based in San Francisco. 
                Through this journal, I explore the evolving landscape of technology 
                and its impact on our lives.
              </p>
              <p className="text-xl leading-relaxed">
                My writing focuses on the intersection of software development, 
                design thinking, and digital culture. I believe in creating technology 
                that enhances human experience while maintaining simplicity and elegance.
              </p>
              <p className="text-xl leading-relaxed">
                When I&apos;m not coding or writing, you can find me exploring new coffee shops, 
                practicing photography, or contributing to open-source projects.
              </p>
              <p className="text-xl leading-relaxed">
                When I&apos;m not coding or writing, you can find me exploring new coffee shops, 
                practicing photography, or contributing to open-source projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}