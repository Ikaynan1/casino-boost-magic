
import { Dices, Wallet, Shield, Gift, Clock, Award } from 'lucide-react';

const Features = () => {
  return (
    <section id="games" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experiência Premium de Entretenimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra um mundo de jogos premium e recursos exclusivos projetados para uma experiência de jogo excepcional.
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
                  Programa VIP Exclusivo
                </h3>
                <p className="text-white/80 mb-6">
                  Junte-se ao nosso programa VIP e desfrute de benefícios exclusivos, ofertas personalizadas e suporte premium. Experimente jogos no seu mais alto nível.
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
                    Associação VIP
                  </h4>
                  <p className="text-white/80 mb-4">
                    Desbloqueie recompensas exclusivas e serviço personalizado.
                  </p>
                  <a href="https://poba3zfmsomst.com/XDlF" className="inline-block px-4 py-2 bg-gold font-bold text-navy-dark rounded-full">
                    Seja VIP Agora
                  </a>
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
    title: 'Jogos Premium',
    description: 'Acesse centenas de jogos de alta qualidade dos principais fornecedores. De mesas clássicas aos slots mais recentes.'
  },
  {
    icon: Gift,
    title: 'Bônus Generosos',
    description: 'Aproveite promoções regulares, rodadas grátis e recompensas de fidelidade projetadas para aprimorar sua experiência de jogo.'
  },
  {
    icon: Wallet,
    title: 'Pagamentos Seguros',
    description: 'Múltiplas opções de pagamento com depósitos rápidos e saques velozes. Suas transações estão sempre protegidas.'
  },
  {
    icon: Shield,
    title: 'Jogo Seguro & Justo',
    description: 'Usamos protocolos de segurança avançados e geradores de números aleatórios certificados para um jogo justo.'
  },
  {
    icon: Clock,
    title: 'Suporte 24/7',
    description: 'Nossa equipe de suporte profissional está disponível 24 horas por dia para ajudá-lo com qualquer dúvida.'
  },
  {
    icon: Award,
    title: 'Recompensas de Fidelidade',
    description: 'Ganhe pontos enquanto joga e troque-os por bônus, rodadas grátis e recompensas exclusivas.'
  }
];

const vipBenefits = [
  'Ofertas de bônus personalizadas',
  'Gerente de conta dedicado',
  'Limites de saque mais altos',
  'Torneios exclusivos',
  'Tempos de processamento mais rápidos',
  'Convites para eventos especiais'
];

export default Features;
