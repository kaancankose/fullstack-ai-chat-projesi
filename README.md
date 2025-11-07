# 💬 Full Stack + AI Chat Uygulaması

Bu proje, Konuşarak Öğren Stajyer Projesi kapsamında geliştirilmiştir.  
Amaç: Kullanıcıların mesajlaştığı ve mesajların AI tarafından analiz edilip **pozitif / nötr / negatif** olarak etiketlendiği web + mobil chat uygulamasıdır.

---

## 🚀 Proje Özeti
- **React (Web)** → Chat ekranı (Vercel deploy)
- **React Native CLI (Mobil)** → Chat ekranı (APK / build)
- **.NET Core (Backend)** → Kullanıcı ve mesaj API’si (Render deploy)
- **Python + Hugging Face Spaces (AI Servis)** → Duygu analizi API’si

---

## 📦 Klasör Yapısı
```
fullstack-ai-chat-projesi/
 ├── ai-service/           # Python + Hugging Face Spaces (AI model)
 ├── backend/              # .NET Core API (SQLite + Entity Framework)
 ├── frontend/             # React web app (Vercel)
 └── frontend-mobile/      # React Native CLI app (Android/iOS)
```

---

## 🌐 Çalışır Demo Linkleri
| Servis | Platform | Link |
|--------|-----------|------|
| **Frontend (Web Chat)** | Vercel | 🔗 [Vercel Linki Buraya](https://vercel-demo-link.vercel.app) |
| **Mobil (React Native)** | APK / Build | 🔗 [Drive / Expo Linki Buraya](https://example.com/apk) |
| **Backend API (.NET)** | Render | 🔗 [https://your-api.onrender.com/api/messages](https://your-api.onrender.com/api/messages) |
| **AI Servisi (Duygu Analizi)** | Hugging Face Spaces | 🔗 [https://your-hf-space.hf.space/run/predict](https://your-hf-space.hf.space/run/predict) |

> ⚠️ Şu anda linkler **geçici (local)** URL’ler üzerinden çalışmaktadır.  
> Gerçek deploy işlemleri ücretsiz planlara taşınacaktır.

---

## 🧠 Kod Hakimiyeti Kanıtı
Projede hem manuel yazılmış hem de AI destekli kod bölümleri bulunmaktadır.  
Aşağıda hangi dosyaların nasıl oluşturulduğu belirtilmiştir:

| Dosya | Teknoloji | Açıklama | AI Yardımı |
|--------|------------|-----------|-------------|
| `ai-service/app.py` | Python + Gradio | Hugging Face duygu analizi modeli | ✅ Kısmen (model entegrasyonu öneri ile) |
| `backend/Controllers/MessagesController.cs` | C# (.NET Core) | API endpoint (POST & GET) | ❌ Elle yazıldı |
| `backend/Data/AppDbContext.cs` | C# | Veritabanı yönetimi (SQLite) | ❌ Elle yazıldı |
| `frontend/src/App.js` | React | Web chat UI + API/AI entegrasyonu | ✅ Kısmen (yapı önerileriyle) |
| `frontend-mobile/App.js` | React Native | Mobil chat UI + API/AI entegrasyonu | ✅ Kısmen |
| `README.md` | Markdown | Dokümantasyon | ❌ Elle yazıldı |

> 🔸 **Elle yazılan bölümler:** .NET API çağrısı, DB sorgusu, CORS ayarları  
> 🔸 **AI destekli bölümler:** Sentiment model entegrasyonu, bazı React bileşen yapıları

---

## 🧩 Teknolojiler
| Katman | Teknoloji |
|--------|------------|
| **Frontend (Web)** | React, Axios, Vercel |
| **Frontend (Mobil)** | React Native CLI |
| **Backend** | .NET Core, SQLite, Render |
| **AI Servisi** | Python, Transformers, Gradio, Hugging Face Spaces |

---

## 🛠️ Kurulum (Lokal)
### Backend (.NET)
```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

### AI Servisi
```bash
cd ai-service
pip install -r requirements.txt
python app.py
```

### Frontend (Web)
```bash
cd frontend
npm install
npm start
```

### Mobil
```bash
cd frontend-mobile
npm install
npx react-native run-android
```

---

## 📚 Öğrenilenler
- Full-stack zincirini uçtan uca kurma (React → .NET → Python AI)
- API veri akışını ve deploy sürecini yönetme
- AI araçlarını entegre ederken kod mantığını anlama
- Ücretsiz deployment platformlarının (Render, Hugging Face, Vercel) kullanımı

---

🧾 **Hazırlayan:** [Kaan Can Köse](https://github.com/kaancankose)  
📅 **Proje Süresi:** 3 Gün  
💡 **Durum:** Geliştirme tamamlandı, deploy süreci devam ediyor.
