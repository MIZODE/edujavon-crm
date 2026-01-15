import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, Mail, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import AuthBranding from "./AuthBranding";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Telefon raqamni formatlash funksiyasi
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (!phoneNumber) return "";

    let formatted = "+998";
    if (phoneNumber.length > 3) formatted += " " + phoneNumber.substring(3, 5);
    if (phoneNumber.length > 5) formatted += " " + phoneNumber.substring(5, 8);
    if (phoneNumber.length > 8) formatted += " " + phoneNumber.substring(8, 10);
    if (phoneNumber.length > 10)
      formatted += " " + phoneNumber.substring(10, 12);

    return formatted;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhoneNumber(formatted);
  };

  // Parol kuchini tekshirish
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    if (hasUpperCase && hasLowerCase) strength++;

    const hasNumber = /[0-9]/.test(password);
    if (hasNumber) strength++;

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (hasSpecialChar) strength++;

    if (password.length >= 12) strength++;

    if (strength <= 2) return 1;
    if (strength <= 4) return 2;
    return 3;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength === 1) return "Oson";
    if (passwordStrength === 2) return "Yaxshi";
    return "Kuchli";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-yellow-500";
    if (passwordStrength === 3) return "bg-green-500";
    return "bg-gray-200";
  };

  const getPasswordRequirements = () => {
    const hasLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return { hasLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar };
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Parollar mos kelmayapti!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Ro'yxatdan o'tdingiz! Endi tizimga kirishingiz mumkin.");
      navigate("/login");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Branding */}
        <AuthBranding />

        {/* Right side - Register Form */}
        <Card
          className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl animate-fade-in overflow-hidden"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600" />

          <CardHeader className="space-y-2 pt-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ro'yxatdan o'tish
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Yangi hisob yaratish uchun ma'lumotlaringizni kiriting
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-8">
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="reg-name"
                  className="text-sm font-medium text-gray-700"
                >
                  To'liq ism
                </Label>
                <Input
                  id="reg-name"
                  name="name"
                  placeholder="Abdullayev Abdulla"
                  className="h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="reg-username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </Label>
                <Input
                  id="reg-username"
                  name="username"
                  placeholder="username"
                  className="h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="reg-phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Telefon
                </Label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  <Input
                    id="reg-phone"
                    name="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="+998 90 123 45 67"
                    maxLength="17"
                    className="pl-11 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="reg-email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  <Input
                    id="reg-email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className="pl-11 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="reg-password"
                  className="text-sm font-medium text-gray-700"
                >
                  Parol
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  <Input
                    id="reg-password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className="pl-11 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                    required
                  />
                </div>
                {password && (
                  <div className="space-y-2">
                    <div className="flex gap-1">
                      <div
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          passwordStrength >= 1
                            ? getPasswordStrengthColor()
                            : "bg-gray-200"
                        }`}
                      />
                      <div
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          passwordStrength >= 2
                            ? getPasswordStrengthColor()
                            : "bg-gray-200"
                        }`}
                      />
                      <div
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          passwordStrength >= 3
                            ? getPasswordStrengthColor()
                            : "bg-gray-200"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-xs font-medium ${
                        passwordStrength === 1
                          ? "text-red-500"
                          : passwordStrength === 2
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      Parol kuchi: {getPasswordStrengthText()}
                    </p>
                    <div className="text-xs space-y-1 bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-700 mb-2">
                        Parol talablari:
                      </p>
                      <div
                        className={`flex items-center gap-2 ${
                          getPasswordRequirements().hasLength
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        <span>
                          {getPasswordRequirements().hasLength ? "✓" : "○"}
                        </span>
                        <span>Kamida 8 ta belgi</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          getPasswordRequirements().hasUpperCase
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        <span>
                          {getPasswordRequirements().hasUpperCase ? "✓" : "○"}
                        </span>
                        <span>Kamida 1 ta katta harf (A-Z)</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          getPasswordRequirements().hasLowerCase
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        <span>
                          {getPasswordRequirements().hasLowerCase ? "✓" : "○"}
                        </span>
                        <span>Kamida 1 ta kichik harf (a-z)</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          getPasswordRequirements().hasNumber
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        <span>
                          {getPasswordRequirements().hasNumber ? "✓" : "○"}
                        </span>
                        <span>Kamida 1 ta raqam (0-9)</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          getPasswordRequirements().hasSpecialChar
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        <span>
                          {getPasswordRequirements().hasSpecialChar ? "✓" : "○"}
                        </span>
                        <span>Kamida 1 ta maxsus belgi (!@#$%...)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="reg-confirm-password"
                  className="text-sm font-medium text-gray-700"
                >
                  Parolni qayta kiriting
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  <Input
                    id="reg-confirm-password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-11 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                    required
                  />
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <span>⚠️</span> Parollar mos kelmayapti
                  </p>
                )}
                {confirmPassword && password === confirmPassword && (
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span>✓</span> Parollar mos keldi
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Ro'yxatdan o'tish...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Ro'yxatdan o'tish
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>

              <p className="text-center text-sm text-gray-600">
                Allaqachon hisobingiz bormi?{" "}
                <Link
                  to="/login"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Tizimga kiring
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
