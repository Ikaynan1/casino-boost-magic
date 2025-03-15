
import { Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-5">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-gold-light">
                PREMIUM PLAY
              </span>
            </div>
            <p className="mb-4">
              Uma plataforma premium de entretenimento oferecendo a melhor experiência de jogos com bônus generosos e serviço excepcional ao cliente.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Twitter} href="https://poba3zfmsomst.com/XDlF" />
              <SocialLink icon={Facebook} href="https://poba3zfmsomst.com/XDlF" />
              <SocialLink icon={Instagram} href="https://poba3zfmsomst.com/XDlF" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#games">Jogos</FooterLink>
              <FooterLink href="#bonus">Bônus</FooterLink>
              <FooterLink href="#about">Sobre Nós</FooterLink>
              <FooterLink href="#testimonials">Depoimentos</FooterLink>
              <FooterLink href="https://poba3zfmsomst.com/XDlF">Termos & Condições</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Jogos</h3>
            <ul className="space-y-2">
              <FooterLink href="https://poba3zfmsomst.com/XDlF">Jogos de Mesa</FooterLink>
              <FooterLink href="https://poba3zfmsomst.com/XDlF">Jogos de Cartas</FooterLink>
              <FooterLink href="https://poba3zfmsomst.com/XDlF">Dealers ao Vivo</FooterLink>
              <FooterLink href="https://poba3zfmsomst.com/XDlF">Game Shows</FooterLink>
              <FooterLink href="https://poba3zfmsomst.com/XDlF">Novos Lançamentos</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span>suporte@premiumplay.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span>Chat ao Vivo 24/7</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span>Operado por Play Entertainment Ltda.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Premium Play. Todos os direitos reservados.
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-white/60 text-sm text-center md:text-right">
                Este site é para adultos (18+). Jogue com responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a 
    href={href} 
    className="bg-white/10 hover:bg-white/20 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="hover:text-white transition-colors duration-300 inline-block"
    >
      {children}
    </a>
  </li>
);

export default Footer;
