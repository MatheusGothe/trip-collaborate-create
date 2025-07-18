import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { 
  Plane, 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Save,
  Heart,
  Mountain,
  Briefcase,
  Camera,
  UtensilsCrossed
} from "lucide-react";

const CreateItinerary = () => {
  const navigate = useNavigate();
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const travelStyles = [
    { id: "turismo", label: "Turismo", icon: Camera, color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: "romantico", label: "Romântico", icon: Heart, color: "bg-pink-100 text-pink-700 border-pink-200" },
    { id: "aventura", label: "Aventura", icon: Mountain, color: "bg-green-100 text-green-700 border-green-200" },
    { id: "negocios", label: "Negócios", icon: Briefcase, color: "bg-gray-100 text-gray-700 border-gray-200" },
    { id: "gastronomico", label: "Gastronômico", icon: UtensilsCrossed, color: "bg-orange-100 text-orange-700 border-orange-200" },
  ];

  const toggleStyle = (styleId: string) => {
    setSelectedStyles(prev => 
      prev.includes(styleId) 
        ? prev.filter(id => id !== styleId)
        : [...prev, styleId]
    );
  };

  const generateAISuggestions = async () => {
    setIsGenerating(true);
    // Simular geração de IA
    setTimeout(() => {
      setIsGenerating(false);
      alert("Sugestões de IA geradas! (Funcionalidade simulada)");
    }, 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular salvamento
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-2 mr-8">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Voltar</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">TravelPlan</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Criar Novo Roteiro
          </h1>
          <p className="text-lg text-muted-foreground">
            Conte-nos sobre sua viagem e nossa IA criará sugestões personalizadas
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Informações Básicas
              </CardTitle>
              <CardDescription>
                Defina os detalhes principais da sua viagem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Nome do roteiro</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Lua de mel em Paris"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destino</Label>
                  <Input
                    id="destination"
                    placeholder="Ex: Paris, França"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Data de início</Label>
                  <Input
                    id="startDate"
                    type="date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Data de fim</Label>
                  <Input
                    id="endDate"
                    type="date"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-primary" />
                Estilo da Viagem
              </CardTitle>
              <CardDescription>
                Selecione um ou mais estilos que combinam com sua viagem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {travelStyles.map((style) => {
                  const Icon = style.icon;
                  const isSelected = selectedStyles.includes(style.id);
                  
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => toggleStyle(style.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        isSelected 
                          ? "border-primary bg-primary/10 scale-105" 
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Icon className={`h-8 w-8 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-medium ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {style.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Preferências e Observações
              </CardTitle>
              <CardDescription>
                Conte-nos mais sobre suas preferências para que a IA possa personalizar melhor as sugestões
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="budget">Orçamento aproximado (opcional)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma faixa de orçamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Econômico (até R$ 3.000)</SelectItem>
                    <SelectItem value="medium">Moderado (R$ 3.000 - R$ 8.000)</SelectItem>
                    <SelectItem value="high">Confortável (R$ 8.000 - R$ 15.000)</SelectItem>
                    <SelectItem value="luxury">Luxo (acima de R$ 15.000)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences">Preferências e interesses</Label>
                <Textarea
                  id="preferences"
                  placeholder="Ex: Gosto de museus, vida noturna, culinária local, atividades ao ar livre, fotografia..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações especiais</Label>
                <Textarea
                  id="notes"
                  placeholder="Ex: Tenho mobilidade reduzida, sou vegetariano, viajo com crianças..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={generateAISuggestions}
              disabled={isGenerating}
              className="bg-gradient-sunset text-foreground border-0 shadow-button"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-foreground mr-2"></div>
                  Gerando...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Gerar Sugestões com IA
                </>
              )}
            </Button>
            
            <Button
              type="submit"
              className="bg-gradient-ocean shadow-button"
            >
              <Save className="mr-2 h-4 w-4" />
              Salvar Roteiro
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateItinerary;