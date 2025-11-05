# fullstack-ai-chat-projesi
React, .NET Core, and Hugging Face Spaces integration — deployable on free tiers (Vercel + Render). Basit bir chat uygulaması: kullanıcı mesajları AI tarafından analiz edilip pozitif/nötr/negatif olarak etiketlenir.

---

## ⚙️ Teknik Notlar

Bu proje, **Full Stack + AI Chat Uygulaması** staj görevi kapsamında geliştirilmiştir.  
Tüm servisler ve bağlantılar test amacıyla **geçici (local) URL’ler** üzerinden ayarlanmıştır.  
Gerçek deployment bağlantıları (Render, Hugging Face Spaces, Vercel) entegrasyon aşamasındadır.

### 🧩 Geçici Bağlantılar
| Servis | URL |
|--------|-----|
| Backend API (.NET Core) | `http://localhost:5000/api/messages` |
| AI Servisi (Hugging Face) | `http://localhost:7860/run/predict` |
| Frontend (React) | `http://localhost:3000` |

### 🔄 Planlanan Güncellemeler
- Backend’in **Render** üzerinde ücretsiz planda deploy edilmesi  
- AI servisin **Hugging Face Spaces** ortamına taşınması  
- Frontend’in **Vercel** üzerinden canlı yayına alınması  

---

💡 Not: Kodun tüm bileşenleri (AI, Backend, Frontend) **ayrı klasörlerde** tutulmuştur.  
Bu yapı, full-stack zincirini uçtan uca anlamayı ve servisler arası veri akışını göstermeyi amaçlar.
