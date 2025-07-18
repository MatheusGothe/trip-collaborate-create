import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link, useParams } from "react-router-dom";
import { 
  Plane, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Share2, 
  UserPlus, 
  Download, 
  Edit3, 
  Trash2,
  Plus,
  MessageCircle
} from "lucide-react";

const ItineraryDetail = () => {
  const { id } = useParams();
  const [activeDay, setActiveDay] = useState("day1");

  // Mock data
  const itinerary = {
    id: 1,
    title: "Paris Romântico",
    destination: "Paris, França",
    startDate: "2024-08-15",
    endDate: "2024-08-22",
    type: "Romântico",
    days: [
      {
        id: "day1",
        date: "2024-08-15",
        title: "Chegada e Primeira Impressão",
        activities: [
          {
            id: 1,
            title: "Check-in no Hotel",
            location: "Hotel des Grands Boulevards",
            time: "14:00",
            description: "Check-in no hotel boutique no 2º arrondissement",
            duration: "30 min"
          },
          {
            id: 2,
            title: "Passeio pela Île de la Cité",
            location: "Notre-Dame, Sainte-Chapelle",
            time: "16:00",
            description: "Explorar a ilha histórica e visitar monumentos icônicos",
            duration: "3 horas"
          },
          {
            id: 3,
            title: "Jantar romântico",
            location: "Le Comptoir du Relais",
            time: "20:00",
            description: "Bistrô autêntico com cozinha francesa tradicional",
            duration: "2 horas"
          }
        ]
      },
      {
        id: "day2",
        date: "2024-08-16",
        title: "Arte e Cultura",
        activities: [
          {
            id: 4,
            title: "Museu do Louvre",
            location: "Louvre Museum",
            time: "09:00",
            description: "Visita aos principais obras incluindo Mona Lisa",
            duration: "4 horas"
          },
          {
            id: 5,
            title: "Almoço no Tuileries",
            location: "Jardim das Tulherias",
            time: "13:30",
            description: "Piquenique nos jardins do palácio",
            duration: "1 hora"
          }
        ]
      }
    ],
    collaborators: [
      { name: "João Silva", initial: "JS" },
      { name: "Maria Santos", initial: "MS" }
    ],
    notes: "Lembrar de reservar mesa nos restaurantes com antecedência. Verificar horários dos museus."
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2 mr-8">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Dashboard</span>
              </Link>
              <Link to="/" className="flex items-center space-x-2">
                <Plane className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">TravelPlan</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button variant="outline" size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Colaborador
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Info */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {itinerary.title}
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {itinerary.destination}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(itinerary.startDate).toLocaleDateString('pt-BR')} - {new Date(itinerary.endDate).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">{itinerary.type}</Badge>
              <div className="flex items-center space-x-2">
                {itinerary.collaborators.map((collaborator, index) => (
                  <Avatar key={index} className="h-8 w-8">
                    <AvatarFallback className="text-xs">{collaborator.initial}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeDay} onValueChange={setActiveDay}>
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
                {itinerary.days.map((day, index) => (
                  <TabsTrigger key={day.id} value={day.id}>
                    Dia {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {itinerary.days.map((day) => (
                <TabsContent key={day.id} value={day.id} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{day.title}</h3>
                      <p className="text-muted-foreground">
                        {new Date(day.date).toLocaleDateString('pt-BR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <Button size="sm" className="bg-gradient-ocean">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Atividade
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {day.activities.map((activity) => (
                      <Card key={activity.id} className="bg-gradient-card shadow-card hover:shadow-travel transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="flex items-center space-x-1 text-sm font-medium text-primary">
                                  <Clock className="h-4 w-4" />
                                  {activity.time}
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {activity.duration}
                                </Badge>
                              </div>
                              <CardTitle className="text-lg">{activity.title}</CardTitle>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                {activity.location}
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{activity.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Anotações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {itinerary.notes}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Editar Anotações
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Colaboradores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {itinerary.collaborators.map((collaborator, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">{collaborator.initial}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{collaborator.name}</span>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetail;