import React from 'react';
import { useInView } from '../hooks/useInView';
import { Book, Music, Code, Bike } from 'lucide-react';

interface HobbyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  inView: boolean;
  delay: number;
}

const HobbyCard: React.FC<HobbyCardProps> = ({
  icon,
  title,
  description,
  inView,
  delay,
}) => (
  <div
    className={`bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-1000 transform ${
      inView
        ? `opacity-100 translate-y-0 delay-${delay}`
        : 'opacity-0 translate-y-10'
    }`}
  >
    <div className="flex flex-col items-center text-center">
      <div className="text-teal-300 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </div>
  </div>
);

const Hobbies: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const hobbies = [
    {
      icon: <Book size={32} />,
      title: 'Reading',
      description:
        'I enjoy exploring diverse literature, from classical novels to modern non-fiction works that expand my knowledge.',
    },
    {
      icon: <Music size={32} />,
      title: 'Music',
      description:
        'Music is my escape. I love discovering new artists and genres that resonate with different moods and moments.',
    },
    {
      icon: <Code size={32} />,
      title: 'Programming',
      description:
        'Building websites and applications is not just a skill but a creative outlet that allows me to bring ideas to life.',
    },
    {
      icon: <Bike size={32} />,
      title: 'Cycling',
      description:
        'Exploring the city and countryside on two wheels gives me both exercise and a chance to appreciate my surroundings.',
    },
  ];

  return (
    <section
      id="hobbies"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold text-white mb-12 text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          My Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              icon={hobby.icon}
              title={hobby.title}
              description={hobby.description}
              inView={inView}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;