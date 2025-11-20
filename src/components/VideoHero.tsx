import { useState, useEffect } from "react";

interface VideoHeroProps {
  videoSrc: string;
  fallbackImage: string;
  posterImage?: string;
  className?: string;
}

export function VideoHero({ 
  videoSrc, 
  fallbackImage, 
  posterImage,
  className = "" 
}: VideoHeroProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [videoSrc]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  // Se houver erro ou não houver suporte a vídeo, mostra imagem
  if (hasError) {
    return (
      <img 
        src={fallbackImage} 
        alt="Hero background" 
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <>
      {isLoading && (
        <img 
          src={posterImage || fallbackImage} 
          alt="Loading background" 
          className={`w-full h-full object-cover ${className}`}
        />
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterImage || fallbackImage}
        onError={handleError}
        onLoadedData={handleLoadedData}
        className={`w-full h-full object-cover ${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        {/* Fallback para navegadores que não suportam vídeo */}
        <img 
          src={fallbackImage} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </video>
    </>
  );
}
