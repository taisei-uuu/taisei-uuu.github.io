import React from 'react';
import { useInView } from '../hooks/useInView';

const Timeline: React.FC<{
  year: string;
  title: string;
  description: string;
  inView: boolean;
  delay: number;
}> = ({ year, title, description, inView, delay }) => (
  <div
    className={`relative pl-8 md:pl-10 pb-10 transition-all duration-1000 transform ${
      inView
        ? `opacity-100 translate-y-0 delay-${delay}`
        : 'opacity-0 translate-y-10'
    }`}
  >
    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-400 to-teal-300"></div>
    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-400 shadow-glow-sm"></div>
    <div className="text-sm text-teal-300 font-medium mb-1">{year}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-blue-200">{description}</p>
  </div>
);

const Biography: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const timelineEvents = [
    {
      year: '2003',
      title: 'Born in Japan',
      description:
        'Started my journey in this beautiful country, surrounded by a loving family.',
    },
    {
      year: '2009',
      title: 'Started Elementary School',
      description:
        'Began my education journey, discovering a love for learning and exploration.',
    },
    {
      year: '2015',
      title: 'Entered Junior High School',
      description:
        'Continued my educational path, developing new interests and building strong foundations.',
    },
    {
      year: '2018',
      title: 'Entered High School',
      description:
        'Focused on academic excellence while participating in various extracurricular activities.',
    },
    {
      year: '2021',
      title: 'Admitted to Keio University',
      description:
        'Achieved a significant milestone by being accepted into one of Japan\'s most prestigious universities.',
    },
    {
      year: 'Present',
      title: 'Continuing My Studies',
      description:
        'Currently focusing on my studies while exploring new opportunities and expanding my horizons.',
    },
  ];

  return (
    <section
      id="biography"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div
        ref={ref}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            My Journey
          </h2>
          <div className="ml-4">
            {timelineEvents.map((event, index) => (
              <Timeline
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                inView={inView}
                delay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
    </section>
  );
};

export default Biography;