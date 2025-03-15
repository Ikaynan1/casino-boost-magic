
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Our Players Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied players who have experienced our premium service
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  bg-white rounded-xl shadow-md p-6 transition-all duration-500
                  ${index === activeIndex ? 'scale-105 shadow-premium border-2 border-gold/20' : 'opacity-80'}
                `}
              >
                <div className="flex text-gold mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-navy-light/10 rounded-full flex items-center justify-center text-navy-light font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-gold w-8' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <div className="rounded-2xl bg-navy-dark overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Join the Premium Community
                </h3>
                <p className="text-white/80 mb-6">
                  Become part of our growing community of players who enjoy premium games, exclusive bonuses, and exceptional service.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                      <span className="text-gold text-sm">✓</span>
                    </div>
                    <p className="text-white/80">Over 10,000 satisfied players</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                      <span className="text-gold text-sm">✓</span>
                    </div>
                    <p className="text-white/80">Excellent customer satisfaction</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                      <span className="text-gold text-sm">✓</span>
                    </div>
                    <p className="text-white/80">Responsive customer support</p>
                  </div>
                </div>
                
                <button className="primary-button">
                  Join Now
                </button>
              </div>
              
              <div className="bg-navy-light flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="text-7xl font-display font-bold text-white mb-2">4.9</div>
                  <div className="flex justify-center text-gold mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80">Average player rating</p>
                  <p className="text-white/60 text-sm">Based on 2,500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Rebecca M.",
    location: "London, UK",
    comment: "I'm impressed with the selection of games and the generous welcome bonus. The 150% bonus gave me so much more playtime!"
  },
  {
    name: "James T.",
    location: "Toronto, Canada",
    comment: "The interface is sleek and premium. Customer support is quick to respond and I received my withdrawals without any hassle."
  },
  {
    name: "Michael K.",
    location: "Sydney, Australia",
    comment: "Best entertainment platform I've used. The welcome bonus was credited instantly and the game selection is outstanding."
  }
];

export default Testimonials;
