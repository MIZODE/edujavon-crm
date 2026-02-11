import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Mail, Phone, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import AuthBranding from "./AuthBranding";
import FormatPhone, { formatPhoneNumber } from "./FormatPhone";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // login-----------------------------------------------------------
  const [phoneNumberlogin, setPhoneNumberlogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const loginInfo = [
    {
      id: 1,
      phoneNumberlogin: phoneNumberlogin
        .replace("+998 ", "")
        .replace(" ", "")
        .replace(" ", "")
        .replace(" ", ""),
      passwordlogin: passwordlogin,
      role: "user",
    },
  ];

  // register---------------------------------------------------------
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerInfo = [
    {
      id: 1,
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phoneNumber
        .replace("+998 ", "")
        .replace(" ", "")
        .replace(" ", "")
        .replace(" ", ""),
      password: password,
      role: "user",
    },
  ];

  // Parolni ko'rish ------------------------------------------------
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const checkPhone = (rawValue) => {
    const formatted = formatPhoneNumber(rawValue);
    setPhoneNumber(formatted);
  };

  const checkPhoneLogin = (rawValue) => {
    const formatted = formatPhoneNumber(rawValue);
    setPhoneNumberlogin(formatted);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginInfo);
    localStorage.setItem("userinfo", JSON.stringify(loginInfo));
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(registerInfo);
    localStorage.setItem("userinfo", JSON.stringify(registerInfo));
    navigate("/");
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
        <AuthBranding />

        {/* Right side - Login/Register Tabs */}
        <Card
          className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl animate-fade-in overflow-hidden"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

          <CardHeader className="space-y-2 pt-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Xush kelibsiz
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Tizimga kiring yoki Ro'yxatdan o'ting
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-8">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-gray-100 rounded-xl">
                <TabsTrigger
                  value="login"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  Kirish
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  Ro'yxatdan o'tish
                </TabsTrigger>
              </TabsList>

              {/* ---------------------------------Login Tab--------------------------------- */}
              <TabsContent value="login" className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* ---------------------------------Phone Number--------------------------------- */}
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
                        value={phoneNumberlogin}
                        onChange={(e) => checkPhoneLogin(e.target.value)}
                        placeholder="+998 90 123 45 67"
                        maxLength="17"
                        className="pl-11 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* ---------------------------------Password--------------------------------- */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Parol
                    </Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                      <Input
                        id="password"
                        name="password"
                        onChange={(e) => setPasswordlogin(e.target.value)}
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-11 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-600 focus:outline-none transition-colors"
                      >
                        {showLoginPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Kirish...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Kirish
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="link"
                    className="w-full text-sm text-blue-600 hover:text-blue-700"
                  >
                    Parolni unutdingizmi?
                  </Button>
                </form>
              </TabsContent>

              {/* ---------------------------------Register Tab--------------------------------- */}
              <TabsContent value="register" className="space-y-5">
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="reg-name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Ism
                    </Label>
                    <Input
                      id="reg-name"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="Ism"
                      className="h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="reg-name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Familiya
                    </Label>
                    <Input
                      id="reg-name"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Familiya"
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
                        onChange={(e) => checkPhone(e.target.value)}
                        placeholder="+998 90 123 45 67"
                        maxLength="17"
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
                        type={showRegisterPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="pl-11 pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowRegisterPassword(!showRegisterPassword)
                        }
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-purple-600 focus:outline-none transition-colors"
                      >
                        {showRegisterPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
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
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="pl-11 pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-purple-600 focus:outline-none transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
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
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
