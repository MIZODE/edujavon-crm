import { BookOpen, Library, User, Sparkles } from "lucide-react";

export default function AuthBranding() {
  return (
    <div className="hidden lg:flex flex-col justify-center space-y-8 animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300">
            <Library className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              EduJavon
            </h1>
            <p className="text-gray-600 text-lg flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              Zamonaviy kutubxona tizimi
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Kutubxonangizni boshqarish uchun eng yaxshi platforma. Kitoblarni oson
          qidiring, bron qiling va boshqaring.
        </p>
      </div>

      <div className="space-y-4">
        <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Keng Katalog
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Minglab kitoblar, tezkor qidiruv va filtrlar bilan istalgan
                kitobni toping
              </p>
            </div>
          </div>
        </div>

        <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              <User className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Oson Boshqaruv
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bron, ijara va qaytarishni bir necha bosishda amalga oshiring
              </p>
            </div>
          </div>
        </div>

        <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              <Library className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Qulay</h3>
              <p className="text-gray-600 leading-relaxed">
                Barcha filiallarda mavjud kitoblarni bir joydan boshqaring
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
