import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { 
  Plane, 
  ArrowLeft, 
  CreditCard,
  Crown,
  Shield,
  Check,
  Calendar,
  User
} from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: "",
    email: "",
    country: "BR"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join(' ') : cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value.replace(/\D/g, ''));
    if (formatted.replace(/\s/g, '').length <= 16) {
      handleInputChange('cardNumber', formatted);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simular processamento do pagamento
    setTimeout(() => {
      setIsProcessing(false);
      alert("Pagamento processado com sucesso! Bem-vindo ao Premium!");
      navigate("/dashboard");
    }, 2000);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = [
    { value: "01", label: "01" },
    { value: "02", label: "02" },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/profile" className="flex items-center space-x-2 mr-8">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Voltar ao Perfil</span>
              </Link>
              <Link to="/" className="flex items-center space-x-2">
                <Plane className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">TravelPlan</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Upgrade para Premium
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete sua assinatura para acessar todos os recursos premium
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <Card className="bg-gradient-card shadow-card h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="h-5 w-5 mr-2 text-primary" />
                Plano Premium
              </CardTitle>
              <CardDescription>
                Acesso completo a todos os recursos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-3 text-primary" />
                  <span className="text-sm">Roteiros ilimitados</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-3 text-primary" />
                  <span className="text-sm">IA para sugestões personalizadas</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-3 text-primary" />
                  <span className="text-sm">Exportar em PDF/Excel</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-3 text-primary" />
                  <span className="text-sm">Suporte prioritário</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-3 text-primary" />
                  <span className="text-sm">Acesso antecipado a novos recursos</span>
                </div>
              </div>

              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plano Mensal</span>
                  <span className="font-semibold">R$ 29,90</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Impostos</span>
                  <span className="font-semibold">Inclusos</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-primary">R$ 29,90/mês</span>
                </div>
              </div>

              <div className="bg-primary/10 p-3 rounded-lg">
                <div className="flex items-center text-sm text-primary">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Cancele a qualquer momento</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Informações de Pagamento
              </CardTitle>
              <CardDescription>
                Insira os dados do seu cartão de crédito
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardholderName">Nome no Cartão</Label>
                  <Input
                    id="cardholderName"
                    placeholder="Nome completo conforme no cartão"
                    value={formData.cardholderName}
                    onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      className="pl-10"
                      maxLength={19}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Mês</Label>
                    <Select
                      value={formData.expiryMonth}
                      onValueChange={(value) => handleInputChange('expiryMonth', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month.value} value={month.value}>
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Ano</Label>
                    <Select
                      value={formData.expiryYear}
                      onValueChange={(value) => handleInputChange('expiryYear', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="AAAA" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 4) {
                          handleInputChange('cvv', value);
                        }
                      }}
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>País</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => handleInputChange('country', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BR">Brasil</SelectItem>
                      <SelectItem value="US">Estados Unidos</SelectItem>
                      <SelectItem value="CA">Canadá</SelectItem>
                      <SelectItem value="MX">México</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <Button
                onClick={handlePayment}
                disabled={isProcessing || !formData.cardNumber || !formData.cvv || !formData.cardholderName || !formData.email}
                className="w-full bg-gradient-ocean text-lg py-6"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <Crown className="h-5 w-5 mr-2" />
                    Assinar Premium - R$ 29,90/mês
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade. 
                Sua assinatura será renovada automaticamente todos os meses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;