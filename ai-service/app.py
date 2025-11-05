import gradio as gr
from transformers import pipeline

# Hugging Face'ten hazır sentiment analysis modeli
sentiment_analyzer = pipeline("sentiment-analysis")

def analyze_sentiment(text):
    if not text.strip():
        return "neutral"
    result = sentiment_analyzer(text)[0]
    label = result["label"].lower()
    if "pos" in label:
        return "positive"
    elif "neg" in label:
        return "negative"
    else:
        return "neutral"

# Gradio arayüzü (API endpoint gibi çalışacak)
iface = gr.Interface(
    fn=analyze_sentiment,
    inputs="text",
    outputs="text",
    title="AI Sentiment Analyzer",
    description="Returns sentiment: positive / neutral / negative"
)

if __name__ == "__main__":
    iface.launch()
