
import { Button } from '@/components/ui/button';
import { Gift, ArrowRight, Calendar, Clock, Percent } from 'lucide-react';
import { useState, useEffect } from 'react';

const Bonus = () => {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="bonus" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/5 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-royal-light/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gold/10 px-4 py-1 rounded-full text-gold text-sm font-medium mb-4">
            <Gift className="h-4 w-4 mr-2" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Exclusive 150% Welcome Bonus
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Start your journey with an incredible bonus on your first deposit
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Offer Details */}
          <div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-8">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-gold-light via-gold to-gold-light text-navy-dark font-display font-bold text-7xl px-6 py-2 rounded-xl animate-pulse-subtle mb-2">
                  150%
                </div>
                <p className="text-white/80">on your first deposit</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-lg p-4 flex-1 text-center">
                    <p className="text-white/60 text-sm mb-1">Min. Deposit</p>
                    <p className="text-white font-bold text-xl">$20</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex-1 text-center">
                    <p className="text-white/60 text-sm mb-1">Max. Bonus</p>
                    <p className="text-white font-bold text-xl">$1,000</p>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-2">Bonus Example:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded p-2 text-center">
                      <p className="text-white/80 text-xs">Deposit $100</p>
                      <p className="text-white font-bold">Get $250 to play</p>
                    </div>
                    <div className="bg-white/5 rounded p-2 text-center">
                      <p className="text-white/80 text-xs">Deposit $500</p>
                      <p className="text-white font-bold">Get $1,250 to play</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Calendar className="h-5 w-5 mr-3 text-gold" />
                  <span>Limited time offer - Don't miss out!</span>
                </div>
                <div className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-3 text-gold" />
                  <span>Quick processing - Start playing instantly</span>
                </div>
                <div className="flex items-center text-white">
                  <Percent className="h-5 w-5 mr-3 text-gold" />
                  <span>Reasonable 25x wagering requirement</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="primary-button w-full text-lg py-6 group">
                  Claim Your 150% Bonus Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <p className="text-white/50 text-xs text-center">
                Terms & conditions apply. 18+ only. Please play responsibly.
              </p>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Limited Time Offer
              </h3>
              <p className="text-white/80">
                This exclusive bonus expires in:
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-8 w-full max-w-md">
              <CountdownItem value={countdown.days} label="Days" />
              <CountdownItem value={countdown.hours} label="Hours" />
              <CountdownItem value={countdown.minutes} label="Minutes" />
              <CountdownItem value={countdown.seconds} label="Seconds" />
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md">
              <h4 className="text-xl font-display font-bold text-white mb-4">
                How to Claim Your Bonus
              </h4>
              
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Create your account</p>
                    <p className="text-white/60 text-sm">Quick and simple registration process</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Make your first deposit</p>
                    <p className="text-white/60 text-sm">Minimum $20 to qualify for the bonus</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Receive 150% bonus automatically</p>
                    <p className="text-white/60 text-sm">Bonus is credited instantly to your account</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">Start playing and winning</p>
                    <p className="text-white/60 text-sm">Enjoy hundreds of premium games</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
    <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">
      {value < 10 ? `0${value}` : value}
    </div>
    <div className="text-white/60 text-sm">{label}</div>
  </div>
);

export default Bonus;
