import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Plus, 
  MapPin, 
  Calendar, 
  Users, 
  Settings, 
  LogOut,
  Share2,
  Edit3
} from "lucide-react";

const Dashboard = () => {
  // Mock data
  const myItineraries = [
    {
      id: 1,
      title: "Paris Romântico",
      destination: "Paris, França",
      startDate: "2024-08-15",
      endDate: "2024-08-22",
      type: "Romântico",
      collaborators: 2
    },
    {
      id: 2,
      title: "Aventura no Japão",
      destination: "Tóquio, Japão",
      startDate: "2024-09-10",
      endDate: "2024-09-20",
      type: "Aventura",
      collaborators: 1
    }
  ];

  const sharedItineraries = [
    {
      id: 3,
      title: "Costa Rica Eco Tour",
      destination: "San José, Costa Rica",
      startDate: "2024-07-05",
      endDate: "2024-07-15",
      type: "Aventura",
      owner: "Ana Silva"
    }
  ];

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
              <Link to="/explore">
                <Button variant="ghost">Explorar</Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Perfil
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Olá, João! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Pronto para planejar sua próxima aventura?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-ocean text-primary-foreground hover:shadow-travel transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Criar Novo Roteiro</h3>
                  <p className="text-primary-foreground/90">
                    Comece a planejar uma nova viagem com ajuda da IA
                  </p>
                </div>
                <Link to="/create">
                  <Button variant="secondary" size="lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Criar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card hover:shadow-card transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Roteiros Compartilhados</h3>
                  <p className="text-muted-foreground">
                    Veja roteiros que outros compartilharam com você
                  </p>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {sharedItineraries.length}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Itineraries */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Meus Roteiros</h2>
            <Link to="/create">
              <Button className="bg-gradient-ocean shadow-button">
                <Plus className="h-4 w-4 mr-2" />
                Novo Roteiro
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myItineraries.map((itinerary) => (
              <Card key={itinerary.id} className="bg-gradient-card shadow-card hover:shadow-travel transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{itinerary.title}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {itinerary.destination}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{itinerary.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(itinerary.startDate).toLocaleDateString('pt-BR')} - {new Date(itinerary.endDate).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {itinerary.collaborators} colaborador(es)
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Link to={`/itinerary/${itinerary.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Edit3 className="h-4 w-4 mr-2" />
                          Editar
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Shared with Me */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Compartilhados Comigo</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sharedItineraries.map((itinerary) => (
              <Card key={itinerary.id} className="bg-gradient-card shadow-card hover:shadow-travel transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{itinerary.title}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {itinerary.destination}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{itinerary.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(itinerary.startDate).toLocaleDateString('pt-BR')} - {new Date(itinerary.endDate).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Por: {itinerary.owner}
                    </div>
                    <Link to={`/itinerary/${itinerary.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Roteiro
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;