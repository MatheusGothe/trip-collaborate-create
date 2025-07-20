import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link, useNavigate } from "react-router-dom";
import { 
  Plane, 
  ArrowLeft, 
  Save, 
  Camera, 
  Mail, 
  Lock, 
  Globe, 
  Bell, 
  Shield, 
  Trash2,
  AlertTriangle,
  CreditCard,
  Crown,
  Check,
  X
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    avatar: "JS",
    defaultBudget: "medium",
    defaultTravelStyle: "turismo",
    language: "pt-BR",
    currency: "BRL",
    notifications: {
      email: true,
      push: true,
      collaborator: true,
      marketing: false
    },
    privacy: {
      profilePublic: true,
      itinerariesPublic: false,
      showEmail: false
    },
    subscription: {
      isActive: true,
      plan: "Premium",
      renewalDate: "2024-12-15",
      price: 29.90
    }
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aqui salvaria os dados
    alert("Perfil atualizado com sucesso!");
  };

  const handleDeleteAccount = () => {
    // Aqui deletaria a conta
    alert("Conta deletada! (Funcionalidade simulada)");
  };

  const handleCancelSubscription = () => {
    // Aqui cancelaria a subscription
    setUserData({
      ...userData,
      subscription: { ...userData.subscription, isActive: false }
    });
    alert("Subscription cancelada com sucesso!");
  };

  const handleUpgradeSubscription = () => {
    navigate("/payment");
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
            
            {isEditing && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleSave} className="bg-gradient-ocean">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Configurações do Perfil
          </h1>
          <p className="text-lg text-muted-foreground">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Information */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    Informações Pessoais
                  </CardTitle>
                  <CardDescription>
                    Atualize suas informações básicas
                  </CardDescription>
                </div>
                {!isEditing && (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Editar
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-xl">{userData.avatar}</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Alterar Foto
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      value={userData.email}
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="space-y-2">
                  <Label htmlFor="password">Nova senha (opcional)</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Travel Preferences */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Preferências de Viagem
              </CardTitle>
              <CardDescription>
                Configure suas preferências padrão para novos roteiros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Orçamento padrão</Label>
                  <Select
                    value={userData.defaultBudget}
                    onValueChange={(value) => setUserData({...userData, defaultBudget: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Econômico</SelectItem>
                      <SelectItem value="medium">Moderado</SelectItem>
                      <SelectItem value="high">Confortável</SelectItem>
                      <SelectItem value="luxury">Luxo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Estilo de viagem favorito</Label>
                  <Select
                    value={userData.defaultTravelStyle}
                    onValueChange={(value) => setUserData({...userData, defaultTravelStyle: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="turismo">Turismo</SelectItem>
                      <SelectItem value="romantico">Romântico</SelectItem>
                      <SelectItem value="aventura">Aventura</SelectItem>
                      <SelectItem value="negocios">Negócios</SelectItem>
                      <SelectItem value="gastronomico">Gastronômico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Idioma</Label>
                  <Select
                    value={userData.language}
                    onValueChange={(value) => setUserData({...userData, language: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Moeda</Label>
                  <Select
                    value={userData.currency}
                    onValueChange={(value) => setUserData({...userData, currency: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BRL">Real (R$)</SelectItem>
                      <SelectItem value="USD">Dólar ($)</SelectItem>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure como deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Notificações por e-mail</div>
                    <div className="text-sm text-muted-foreground">Receba atualizações importantes por e-mail</div>
                  </div>
                  <Switch
                    checked={userData.notifications.email}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        notifications: {...userData.notifications, email: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Notificações push</div>
                    <div className="text-sm text-muted-foreground">Receba notificações no navegador</div>
                  </div>
                  <Switch
                    checked={userData.notifications.push}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        notifications: {...userData.notifications, push: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Novos colaboradores</div>
                    <div className="text-sm text-muted-foreground">Notificar quando alguém compartilhar um roteiro</div>
                  </div>
                  <Switch
                    checked={userData.notifications.collaborator}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        notifications: {...userData.notifications, collaborator: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Marketing</div>
                    <div className="text-sm text-muted-foreground">Receber dicas de viagem e ofertas especiais</div>
                  </div>
                  <Switch
                    checked={userData.notifications.marketing}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        notifications: {...userData.notifications, marketing: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Privacidade
              </CardTitle>
              <CardDescription>
                Controle a visibilidade das suas informações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Perfil público</div>
                    <div className="text-sm text-muted-foreground">Permitir que outros usuários vejam seu perfil</div>
                  </div>
                  <Switch
                    checked={userData.privacy.profilePublic}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        privacy: {...userData.privacy, profilePublic: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Roteiros públicos por padrão</div>
                    <div className="text-sm text-muted-foreground">Novos roteiros serão públicos automaticamente</div>
                  </div>
                  <Switch
                    checked={userData.privacy.itinerariesPublic}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        privacy: {...userData.privacy, itinerariesPublic: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Mostrar e-mail no perfil</div>
                    <div className="text-sm text-muted-foreground">Exibir seu e-mail para outros usuários</div>
                  </div>
                  <Switch
                    checked={userData.privacy.showEmail}
                    onCheckedChange={(checked) => 
                      setUserData({
                        ...userData, 
                        privacy: {...userData.privacy, showEmail: checked}
                      })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Management */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Gerenciar Assinatura
              </CardTitle>
              <CardDescription>
                Controle sua assinatura e planos premium
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Plan Status */}
              <div className="border rounded-lg p-4 bg-primary/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Crown className={`h-5 w-5 ${userData.subscription.isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-semibold text-lg">
                      {userData.subscription.isActive ? `Plano ${userData.subscription.plan}` : 'Plano Gratuito'}
                    </h3>
                  </div>
                  {userData.subscription.isActive && (
                    <div className="flex items-center space-x-1 text-primary">
                      <Check className="h-4 w-4" />
                      <span className="text-sm font-medium">Ativo</span>
                    </div>
                  )}
                </div>
                
                {userData.subscription.isActive ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Preço:</span>
                      <span className="font-medium">R$ {userData.subscription.price.toFixed(2)}/mês</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Próxima renovação:</span>
                      <span className="font-medium">{new Date(userData.subscription.renewalDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Você está usando o plano gratuito. Faça upgrade para acessar recursos premium!
                  </p>
                )}
              </div>

              {/* Plan Features Comparison */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                    Plano Gratuito
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2" />
                      Até 3 roteiros
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2" />
                      Funcionalidades básicas
                    </li>
                    <li className="flex items-center">
                      <X className="h-3 w-3 mr-2" />
                      IA para sugestões
                    </li>
                    <li className="flex items-center">
                      <X className="h-3 w-3 mr-2" />
                      Exportar roteiros
                    </li>
                  </ul>
                </div>

                <div className={`border rounded-lg p-4 ${userData.subscription.isActive ? 'border-primary bg-primary/5' : ''}`}>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Crown className="h-4 w-4 mr-2 text-primary" />
                    Plano Premium
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2 text-primary" />
                      Roteiros ilimitados
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2 text-primary" />
                      IA para sugestões personalizadas
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2 text-primary" />
                      Exportar em PDF/Excel
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 mr-2 text-primary" />
                      Suporte prioritário
                    </li>
                  </ul>
                  <div className="mt-3 font-semibold text-primary">
                    R$ 29,90/mês
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <Separator />
              <div className="flex flex-col sm:flex-row gap-3">
                {userData.subscription.isActive ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={handleCancelSubscription}
                      className="flex-1"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar Assinatura
                    </Button>
                    <Button
                      onClick={handleUpgradeSubscription}
                      className="flex-1 bg-gradient-ocean"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Alterar Plano
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={handleUpgradeSubscription}
                    className="w-full bg-gradient-ocean animate-fade-in"
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    Fazer Upgrade para Premium
                  </Button>
                )}
              </div>

              {userData.subscription.isActive && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Ao cancelar, você terá acesso aos recursos premium até {new Date(userData.subscription.renewalDate).toLocaleDateString('pt-BR')}.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-gradient-card shadow-card border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Zona de Perigo
              </CardTitle>
              <CardDescription>
                Ações irreversíveis que afetam sua conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Deletar sua conta removerá permanentemente todos os seus roteiros e dados. Esta ação não pode ser desfeita.
                </AlertDescription>
              </Alert>
              
              <Button
                variant="destructive"
                onClick={() => setShowDeleteDialog(true)}
                className="w-full md:w-auto"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Deletar Conta
              </Button>

              {showDeleteDialog && (
                <div className="mt-4 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                  <p className="text-sm text-foreground mb-4">
                    Tem certeza que deseja deletar sua conta? Digite "DELETAR" para confirmar:
                  </p>
                  <div className="flex space-x-2">
                    <Input placeholder="Digite DELETAR" className="flex-1" />
                    <Button variant="destructive" onClick={handleDeleteAccount}>
                      Confirmar
                    </Button>
                    <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;