
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Star, Gift } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      
      {/* Subtle animated shapes in background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-gold/5 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-royal-light/5 animate-float animate-delay-200"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-gold/5 animate-float animate-delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/20">
              <p className="text-sm font-medium text-gold">
                <span className="mr-2">✦</span>
                Oferta Exclusiva de Boas-Vindas
                <span className="ml-2">✦</span>
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Eleve Sua<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-gold-light text-glow">
                Experiência de Jogo
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Junte-se à nossa plataforma premium de entretenimento e descubra um novo mundo de oportunidades com um bônus exclusivo de boas-vindas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="primary-button group" asChild>
                <a href="https://poba3zfmsomst.com/XDlF">
                  Comece a Jogar Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all">
                Saiba Mais
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 mb-2">
                  <Trophy className="h-5 w-5 text-gold" />
                </div>
                <p className="text-white/80 text-sm">Jogos Premium</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 mb-2">
                  <Gift className="h-5 w-5 text-gold" />
                </div>
                <p className="text-white/80 text-sm">Bônus Exclusivo</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 mb-2">
                  <Star className="h-5 w-5 text-gold" />
                </div>
                <p className="text-white/80 text-sm">Suporte VIP</p>
              </div>
            </div>
          </div>
          
          {/* Hero Card/CTA */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-panel p-8 md:p-10 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-white mb-2">
                  Bônus de Boas-Vindas
                </h2>
                <p className="text-white/80">Oferta especial para novos jogadores</p>
              </div>
              
              <div className="bg-card-gradient rounded-xl p-6 mb-8 border border-white/10">
                <div className="flex flex-col items-center">
                  <p className="text-white/80 mb-2">Bônus no Primeiro Depósito</p>
                  <div className="relative">
                    <h3 className="text-7xl font-display font-bold text-gold text-glow">150%</h3>
                    <div className="absolute -top-2 -right-6 bg-royal-light/80 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-subtle">
                      NOVO
                    </div>
                  </div>
                  <p className="text-white/80 mt-2">até R$1.000</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <p className="text-white/80">Verificação instantânea da conta</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <p className="text-white/80">Depósitos e saques rápidos</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <p className="text-white/80">Suporte ao cliente 24/7</p>
                </div>
              </div>
              
              <Button className="primary-button w-full group animate-pulse-subtle" asChild>
                <a href="https://poba3zfmsomst.com/XDlF">
                  Garanta Seu Bônus Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <p className="text-white/60 text-xs text-center mt-4">
                Termos e condições se aplicam. Apenas para maiores de 18 anos. Jogue com responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
