import { useState } from "react";
import { Play } from "lucide-react";

interface VideoSectionProps {
  videoSrc: string;
  title?: string;
  description?: string;
  posterImage?: string;
  layout?: "full" | "contained" | "split";
}

export function VideoSection({ 
  videoSrc, 
  title,
  description,
  posterImage,
  layout = "contained"
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlayClick = () => {
    const video = document.getElementById('main-video') as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <p className="text-muted-foreground">Vídeo temporariamente indisponível</p>
          </div>
        </div>
      </section>
    );
  }

  // Layout Full Width
  if (layout === "full") {
    return (
      <section className="relative w-full">
        {title && (
          <div className="container py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="relative w-full aspect-video bg-black">
          {!isPlaying && posterImage && (
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={handlePlayClick}
            >
              <img 
                src={posterImage} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-10 w-10 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          )}
          <video
            id="main-video"
            controls
            poster={posterImage}
            onError={handleError}
            className="w-full h-full"
            style={{ display: isPlaying || !posterImage ? 'block' : 'none' }}
          >
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </section>
    );
  }

  // Layout Split (vídeo + conteúdo lado a lado)
  if (layout === "split") {
    return (
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
              )}
              {description && (
                <p className="text-lg text-muted-foreground">{description}</p>
              )}
            </div>
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              {!isPlaying && posterImage && (
                <div 
                  className="absolute inset-0 cursor-pointer group z-10"
                  onClick={handlePlayClick}
                >
                  <img 
                    src={posterImage} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
              <video
                id="main-video"
                controls
                poster={posterImage}
                onError={handleError}
                className="w-full h-full"
                style={{ display: isPlaying || !posterImage ? 'block' : 'none' }}
              >
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout Contained (padrão - centralizado com container)
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying && posterImage && (
              <div 
                className="absolute inset-0 cursor-pointer group z-10"
                onClick={handlePlayClick}
              >
                <img 
                  src={posterImage} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}
            <video
              id="main-video"
              controls
              poster={posterImage}
              onError={handleError}
              className="w-full h-full"
              style={{ display: isPlaying || !posterImage ? 'block' : 'none' }}
            >
              <source src={videoSrc} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
