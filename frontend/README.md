# 🧠 Full Stack + AI Chat (Frontend)

Bu proje, .NET backend ve Hugging Face AI servisi ile entegre çalışan basit bir React chat uygulamasıdır.

## 🚀 Kurulum

1️⃣ Gerekli paketleri yükle:
```bash
npm install
```

2️⃣ Geliştirme modunda çalıştır:
```bash
npm start
```

3️⃣ Tarayıcıdan aç:
```
http://localhost:3000
```

Backend ve AI servisi adresleri `src/App.js` içinde:
```js
const BACKEND_URL = "http://localhost:5000/api/messages";
const AI_URL = "http://localhost:7860/run/predict";
```

## 🌐 Deploy (Vercel)

1. Vercel hesabı aç → https://vercel.com  
2. GitHub reposunu bağla  
3. Build kısmına `frontend/` klasörünü seç  
4. Deploy et 🎉

## 📂 Klasör Yapısı
```
frontend/
 ├── src/
 │   ├── App.js
 ├── package.json
 └── README.md
```
