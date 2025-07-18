import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Star, 
  Copy, 
  Eye,
  Heart,
  Mountain,
  Camera,
  Briefcase,
  UtensilsCrossed
} from "lucide-react";

const PublicItineraries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  // Mock data
  const publicItineraries = [
    {
      id: 1,
      title: "Aventura nos Alpes Suíços",
      destination: "Interlaken, Suíça",
      author: "Carlos Adventures",
      authorInitial: "CA",
      startDate: "2024-07-10",
      endDate: "2024-07-17",
      style: "Aventura",
      rating: 4.8,
      likes: 142,
      views: 1200,
      description: "7 dias de trilhas incríveis, parapente e paisagens de tirar o fôlego nos Alpes Suíços.",
      tags: ["Trilha", "Parapente", "Montanha", "Natureza"]
    },
    {
      id: 2,
      title: "Rota Gastronômica pela Toscana",
      destination: "Florença, Itália",
      author: "Sofia Gourmet",
      authorInitial: "SG",
      startDate: "2024-06-15",
      endDate: "2024-06-22",
      style: "Gastronômico",
      rating: 4.9,
      likes: 89,
      views: 856,
      description: "Descobrindo vinícolas, trattorias autênticas e mercados locais na bela região da Toscana.",
      tags: ["Vinho", "Culinária", "Mercados", "Vinícolas"]
    },
    {
      id: 3,
      title: "Lua de Mel em Santorini",
      destination: "Santorini, Grécia",
      author: "Ana & Pedro",
      authorInitial: "AP",
      startDate: "2024-05-20",
      endDate: "2024-05-27",
      style: "Romântico",
      rating: 4.7,
      likes: 234,
      views: 2100,
      description: "Roteiro romântico perfeito com pôr do sol espetacular, vinícolas e praias paradisíacas.",
      tags: ["Pôr do sol", "Praias", "Romance", "Fotografia"]
    },
    {
      id: 4,
      title: "Descobrindo Tóquio",
      destination: "Tóquio, Japão",
      author: "Travel Explorer",
      authorInitial: "TE",
      startDate: "2024-04-10",
      endDate: "2024-04-18",
      style: "Turismo",
      rating: 4.6,
      likes: 176,
      views: 1580,
      description: "Guia completo para primeira viagem ao Japão: templos, tecnologia, culinária e cultura.",
      tags: ["Cultura", "Templos", "Tecnologia", "Anime"]
    }
  ];

  const getStyleIcon = (style: string) => {
    switch (style) {
      case "Aventura": return Mountain;
      case "Romântico": return Heart;
      case "Turismo": return Camera;
      case "Negócios": return Briefcase;
      case "Gastronômico": return UtensilsCrossed;
      default: return Camera;
    }
  };

  const getStyleColor = (style: string) => {
    switch (style) {
      case "Aventura": return "bg-green-100 text-green-700 border-green-200";
      case "Romântico": return "bg-pink-100 text-pink-700 border-pink-200";
      case "Turismo": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Negócios": return "bg-gray-100 text-gray-700 border-gray-200";
      case "Gastronômico": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const filteredItineraries = publicItineraries.filter(itinerary => {
    const matchesSearch = itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         itinerary.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDestination = !selectedDestination || itinerary.destination.includes(selectedDestination);
    const matchesStyle = !selectedStyle || itinerary.style === selectedStyle;
    
    return matchesSearch && matchesDestination && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">TravelPlan</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost">Meus Roteiros</Button>
              </Link>
              <Link to="/create">
                <Button className="bg-gradient-ocean shadow-button">Criar Roteiro</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Roteiros Públicos
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra roteiros incríveis criados pela nossa comunidade de viajantes
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-gradient-card shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </CardTitle>
            <CardDescription>
              Encontre o roteiro perfeito para sua próxima viagem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Destino ou título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Destino</label>
                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os destinos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos os destinos</SelectItem>
                    <SelectItem value="Europa">Europa</SelectItem>
                    <SelectItem value="Ásia">Ásia</SelectItem>
                    <SelectItem value="América">América</SelectItem>
                    <SelectItem value="África">África</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Estilo</label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os estilos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos os estilos</SelectItem>
                    <SelectItem value="Turismo">Turismo</SelectItem>
                    <SelectItem value="Romântico">Romântico</SelectItem>
                    <SelectItem value="Aventura">Aventura</SelectItem>
                    <SelectItem value="Negócios">Negócios</SelectItem>
                    <SelectItem value="Gastronômico">Gastronômico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItineraries.map((itinerary) => {
            const StyleIcon = getStyleIcon(itinerary.style);
            
            return (
              <Card key={itinerary.id} className="bg-gradient-card shadow-card hover:shadow-travel transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2">{itinerary.title}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {itinerary.destination}
                      </CardDescription>
                    </div>
                    <Badge className={`${getStyleColor(itinerary.style)} border`}>
                      <StyleIcon className="h-3 w-3 mr-1" />
                      {itinerary.style}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{itinerary.authorInitial}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{itinerary.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {itinerary.rating}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(itinerary.startDate).toLocaleDateString('pt-BR')} - {new Date(itinerary.endDate).toLocaleDateString('pt-BR')}
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {itinerary.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {itinerary.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {itinerary.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{itinerary.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          {itinerary.likes}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          {itinerary.views}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Link to={`/itinerary/${itinerary.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredItineraries.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum roteiro encontrado</p>
              <p className="text-sm">Tente ajustar os filtros de busca</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicItineraries;