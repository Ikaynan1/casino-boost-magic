
import { Dices, Wallet, Shield, Gift, Clock, Award } from 'lucide-react';

const Features = () => {
  return (
    <section id="games" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Premium Entertainment Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover a world of premium games and exclusive features designed for an exceptional gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-2xl bg-navy-dark p-8 md:p-10">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-gold/10 filter blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Exclusive VIP Program
                </h3>
                <p className="text-white/80 mb-6">
                  Join our VIP program and enjoy exclusive benefits, personalized offers, and premium customer support. Experience gaming at its finest.
                </p>
                <ul className="space-y-3">
                  {vipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <span className="mr-3 text-gold">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="glass-panel p-6 rounded-xl text-center">
                  <Award className="h-16 w-16 text-gold mx-auto mb-4" />
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    VIP Membership
                  </h4>
                  <p className="text-white/80 mb-4">
                    Unlock exclusive rewards and personalized service.
                  </p>
                  <div className="inline-block px-4 py-2 bg-gold font-bold text-navy-dark rounded-full">
                    Join VIP Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: any; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <div className={`bg-white rounded-xl p-6 shadow-md card-hover animate-slide-up`} style={{ animationDelay: `${delay}ms` }}>
    <div className="flex items-center mb-4">
      <div className="bg-navy-light/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
        <Icon className="h-6 w-6 text-navy-light" />
      </div>
      <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const features = [
  {
    icon: Dices,
    title: 'Premium Games',
    description: 'Access hundreds of high-quality games from top providers. From classic tables to the latest slots.'
  },
  {
    icon: Gift,
    title: 'Generous Bonuses',
    description: 'Enjoy regular promotions, free spins, and loyalty rewards designed to enhance your gaming experience.'
  },
  {
    icon: Wallet,
    title: 'Secure Payments',
    description: 'Multiple payment options with quick deposits and fast withdrawals. Your transactions are always protected.'
  },
  {
    icon: Shield,
    title: 'Safe & Fair Gaming',
    description: 'We use advanced security protocols and certified random number generators for fair gameplay.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our professional support team is available around the clock to assist you with any questions.'
  },
  {
    icon: Award,
    title: 'Loyalty Rewards',
    description: 'Earn points as you play and exchange them for bonuses, free spins, and exclusive rewards.'
  }
];

const vipBenefits = [
  'Personalized bonus offers',
  'Dedicated account manager',
  'Higher withdrawal limits',
  'Exclusive tournaments',
  'Faster processing times',
  'Special event invitations'
];

export default Features;
