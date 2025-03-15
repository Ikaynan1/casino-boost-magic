
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
            Oferta por Tempo Limitado
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Bônus Exclusivo de 150% de Boas-Vindas
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comece sua jornada com um incrível bônus no seu primeiro depósito
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
                <p className="text-white/80">no seu primeiro depósito</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-lg p-4 flex-1 text-center">
                    <p className="text-white/60 text-sm mb-1">Depósito Min.</p>
                    <p className="text-white font-bold text-xl">R$20</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex-1 text-center">
                    <p className="text-white/60 text-sm mb-1">Bônus Máx.</p>
                    <p className="text-white font-bold text-xl">R$1.000</p>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-2">Exemplo de Bônus:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded p-2 text-center">
                      <p className="text-white/80 text-xs">Deposite R$100</p>
                      <p className="text-white font-bold">Receba R$250 para jogar</p>
                    </div>
                    <div className="bg-white/5 rounded p-2 text-center">
                      <p className="text-white/80 text-xs">Deposite R$500</p>
                      <p className="text-white font-bold">Receba R$1.250 para jogar</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Calendar className="h-5 w-5 mr-3 text-gold" />
                  <span>Oferta por tempo limitado - Não perca!</span>
                </div>
                <div className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-3 text-gold" />
                  <span>Processamento rápido - Comece a jogar instantaneamente</span>
                </div>
                <div className="flex items-center text-white">
                  <Percent className="h-5 w-5 mr-3 text-gold" />
                  <span>Requisito de apostas razoável de 25x</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="primary-button w-full text-lg py-6 group" asChild>
                  <a href="https://poba3zfmsomst.com/XDlF">
                    Resgate Seu Bônus de 150% Agora
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              
              <p className="text-white/50 text-xs text-center">
                Termos e condições se aplicam. Apenas para maiores de 18 anos. Jogue com responsabilidade.
              </p>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Oferta por Tempo Limitado
              </h3>
              <p className="text-white/80">
                Este bônus exclusivo expira em:
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-8 w-full max-w-md">
              <CountdownItem value={countdown.days} label="Dias" />
              <CountdownItem value={countdown.hours} label="Horas" />
              <CountdownItem value={countdown.minutes} label="Min" />
              <CountdownItem value={countdown.seconds} label="Seg" />
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md">
              <h4 className="text-xl font-display font-bold text-white mb-4">
                Como Resgatar Seu Bônus
              </h4>
              
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Crie sua conta</p>
                    <p className="text-white/60 text-sm">Processo de registro rápido e simples</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Faça seu primeiro depósito</p>
                    <p className="text-white/60 text-sm">Mínimo de R$20 para se qualificar para o bônus</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Receba bônus de 150% automaticamente</p>
                    <p className="text-white/60 text-sm">Bônus é creditado instantaneamente na sua conta</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-gold/20 text-gold font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">Comece a jogar e ganhar</p>
                    <p className="text-white/60 text-sm">Aproveite centenas de jogos premium</p>
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
