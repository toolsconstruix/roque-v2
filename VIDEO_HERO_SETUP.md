# Configuração do Vídeo Hero na Home

## ✅ O que foi implementado

Foi criado um componente `VideoHero` moderno e otimizado para exibir vídeos na seção hero da home page, com as seguintes funcionalidades:

### Recursos implementados:
- ✅ Reprodução automática de vídeo (autoplay, muted, loop)
- ✅ Fallback automático para imagem caso o vídeo não carregue
- ✅ Poster image enquanto o vídeo está carregando
- ✅ Suporte a múltiplos formatos (MP4 e WebM)
- ✅ Transição suave entre loading e vídeo
- ✅ Responsivo e otimizado para mobile
- ✅ Atributo `playsInline` para iOS

## 📁 Estrutura de arquivos

```
src/
├── components/
│   └── VideoHero.tsx          # Componente de vídeo hero
├── pages/
│   └── Index.tsx              # Home page (já modificada)
└── assets/
    └── hero-home.jpg          # Imagem de fallback
```

## 🎬 Como adicionar seu vídeo

### Passo 1: Prepare seu vídeo

**Recomendações técnicas:**
- **Formato:** MP4 (H.264) ou WebM
- **Resolução:** 1920x1080 (Full HD) ou 1280x720 (HD)
- **Duração:** 10-30 segundos (loop automático)
- **Tamanho:** Máximo 5-10 MB (compressão recomendada)
- **Frame rate:** 24-30 fps
- **Aspect ratio:** 16:9

**Ferramentas para comprimir vídeo:**
- [HandBrake](https://handbrake.fr/) (gratuito)
- [CloudConvert](https://cloudconvert.com/mp4-converter) (online)
- [FFmpeg](https://ffmpeg.org/) (linha de comando)

### Passo 2: Adicione o vídeo ao projeto

Crie a pasta `public/videos` (se não existir) e coloque seu vídeo lá:

```
public/
└── videos/
    └── hero-video.mp4
```

**Importante:** O vídeo deve estar na pasta `public` para ser acessível via URL.

### Passo 3: (Opcional) Otimize para múltiplos formatos

Para melhor compatibilidade, você pode criar uma versão WebM:

```bash
# Usando FFmpeg
ffmpeg -i hero-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 hero-video.webm
```

## 🔧 Configuração atual

O componente já está configurado em `src/pages/Index.tsx`:

```tsx
<VideoHero 
  videoSrc="/videos/hero-video.mp4"
  fallbackImage={heroImage}
  posterImage={heroImage}
/>
```

### Parâmetros do componente:

- **videoSrc:** Caminho para o arquivo de vídeo
- **fallbackImage:** Imagem exibida se o vídeo falhar
- **posterImage:** Imagem exibida enquanto o vídeo carrega
- **className:** (opcional) Classes CSS adicionais

## 🎨 Personalizações possíveis

### Alterar o overlay (gradiente)

No arquivo `Index.tsx`, linha 166:

```tsx
<div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
```

Ajuste a opacidade alterando os valores `/95`, `/80`, `/60`.

### Adicionar controles de vídeo

Se quiser permitir que o usuário pause/play o vídeo, modifique `VideoHero.tsx`:

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  controls  // Adicione esta linha
  // ... resto das props
>
```

### Desabilitar autoplay em mobile

Adicione esta lógica no `VideoHero.tsx`:

```tsx
const isMobile = window.innerWidth < 768;

<video
  autoPlay={!isMobile}
  // ... resto das props
>
```

## 📱 Comportamento em diferentes dispositivos

- **Desktop:** Vídeo reproduz automaticamente em loop
- **Mobile:** Vídeo reproduz automaticamente (muted) graças ao `playsInline`
- **Conexões lentas:** Mostra poster image enquanto carrega
- **Erro no vídeo:** Fallback automático para imagem estática

## ⚡ Otimizações de performance

O componente já inclui:
- Lazy loading automático do vídeo
- Transição suave entre estados
- Fallback inteligente em caso de erro
- Preload do poster para evitar flash

## 🐛 Troubleshooting

### O vídeo não aparece
1. Verifique se o arquivo está em `public/videos/hero-video.mp4`
2. Confirme que o caminho no código está correto: `/videos/hero-video.mp4`
3. Verifique o console do navegador para erros

### O vídeo está muito grande
- Comprima o vídeo usando HandBrake ou FFmpeg
- Reduza a resolução para 1280x720
- Diminua o bitrate para 2-3 Mbps

### O vídeo não reproduz em iOS
- Certifique-se de que o atributo `playsInline` está presente
- O vídeo deve estar `muted` para autoplay funcionar

## 📊 Exemplo de comando FFmpeg para otimização

```bash
# Comprimir vídeo mantendo boa qualidade
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart hero-video.mp4

# Criar versão WebM
ffmpeg -i hero-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus hero-video.webm
```

## 🚀 Próximos passos

1. **Adicione seu vídeo** em `public/videos/hero-video.mp4`
2. **Teste em diferentes navegadores** (Chrome, Firefox, Safari)
3. **Teste em mobile** para garantir boa performance
4. **(Opcional)** Crie versão WebM para melhor compatibilidade

## 💡 Dicas adicionais

- Use vídeos curtos (10-30s) que fazem loop naturalmente
- Evite vídeos com muito movimento para não distrair do conteúdo
- Teste a velocidade de carregamento em conexões 3G
- Considere usar um CDN para servir o vídeo em produção
