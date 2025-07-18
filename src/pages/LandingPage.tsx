import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plane, MapPin, Users, Sparkles, Globe, Calendar, Star } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-sky">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">TravelPlan</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/explore">
                <Button variant="ghost">Explorar Roteiros</Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline">Entrar</Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-ocean shadow-button">Cadastrar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Travel planning illustration" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-sky/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-accent/20 text-accent-foreground border-accent/30">
              ✨ Planejamento de viagem inteligente
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Planeje roteiros
              <span className="text-primary block lg:inline"> incríveis</span>
              <br className="hidden lg:block" />
              com ajuda de IA
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up">
              Crie, compartilhe e colabore em roteiros de viagem personalizados. 
              Nossa IA sugere os melhores destinos e atividades para tornar sua viagem inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/create">
                <Button size="lg" className="bg-gradient-ocean shadow-button hover:shadow-travel transition-all duration-300">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Criar Meu Roteiro
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="hover:bg-secondary transition-all duration-300">
                  <Globe className="mr-2 h-5 w-5" />
                  Ver Roteiros Públicos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 opacity-20 animate-float">
          <MapPin className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Calendar className="h-10 w-10 text-accent-orange" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-20 animate-float" style={{ animationDelay: '4s' }}>
          <Star className="h-8 w-8 text-accent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que usar o TravelPlan?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme suas ideias de viagem em roteiros organizados e compartilháveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-travel transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">IA Inteligente</h3>
                <p className="text-muted-foreground">
                  Nossa IA analisa suas preferências e sugere destinos, atividades e horários perfeitos para sua viagem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-travel transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Colaborativo</h3>
                <p className="text-muted-foreground">
                  Convide amigos e familiares para colaborar em tempo real no planejamento da viagem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-travel transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Compartilhável</h3>
                <p className="text-muted-foreground">
                  Compartilhe seus roteiros com a comunidade e descubra roteiros incríveis criados por outros viajantes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Pronto para sua próxima aventura?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Junte-se a milhares de viajantes que já planejam suas viagens conosco
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-lg">
              <Plane className="mr-2 h-5 w-5" />
              Começar Agora - É Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">TravelPlan</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TravelPlan. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;