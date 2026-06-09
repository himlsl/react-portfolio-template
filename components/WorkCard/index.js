import React from "react";

const CARD_HEIGHT = "600px";

const cardFrame = "overflow-hidden rounded-lg transition-all ease-out duration-300 w-full";

const WorkCard = ({ project }) => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  if (project.type === "still") {
    return (
      <>
        <div
          className="overflow-hidden rounded-lg p-2 laptop:p-4 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <div className={`${cardFrame} group`} style={{ height: CARD_HEIGHT }}>
            <img
              src={project.imageSrc}
              alt="still"
              className="w-full h-full object-cover group-hover:scale-105 transition-all ease-out duration-300"
            />
          </div>
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl font-light leading-none hover:opacity-70 transition-opacity"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
            <img
              src={project.imageSrc}
              alt="still"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  if (project.type === "vimeo") {
    return (
      <div
        className="overflow-hidden rounded-lg p-2 laptop:p-4 cursor-pointer"
        onClick={() => window.open(`https://vimeo.com/${project.vimeoId}`, "_blank")}
      >
        <div className={`${cardFrame} relative group`} style={{ height: CARD_HEIGHT }}>
          <img
            alt={project.title || "Video"}
            className="h-full w-full object-cover group-hover:scale-105 transition-all ease-out duration-300"
            src={project.thumbnail}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all ease-out duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all ease-out duration-300">
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        {project.title && (
          <h1 className="mt-5 text-3xl font-medium">{project.title}</h1>
        )}
        {project.description && (
          <h2 className="text-xl opacity-50">{project.description}</h2>
        )}
      </div>
    );
  }

  if (project.type === "link") {
    return (
      <div
        className="overflow-hidden rounded-lg p-2 laptop:p-4 link cursor-pointer"
        onClick={() => window.open(project.url, "_blank")}
      >
        <div
          className={`${cardFrame} relative group`}
          style={{ height: CARD_HEIGHT }}
        >
          {project.imageSrc && (
            <img
              src={project.imageSrc}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all ease-out duration-300"
            />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all ease-out duration-300 flex flex-col items-center justify-center">
            <p className="text-white text-3xl font-bold drop-shadow">{project.title}</p>
            {project.description && (
              <p className="text-white text-sm opacity-70 mt-1">{project.description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (project.type === "coming-soon") {
    return (
      <div className="overflow-hidden rounded-lg p-2 laptop:p-4">
        <div
          className={`${cardFrame} relative flex flex-col items-center justify-center`}
          style={{ height: CARD_HEIGHT }}
        >
          {project.imageSrc && (
            <img
              src={project.imageSrc}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 backdrop-blur-md bg-black/40 rounded-lg" />
          <div className="relative z-10 text-center px-8">
            <p className="text-4xl font-bold text-white">{project.title}</p>
            <p className="mt-3 text-lg text-white opacity-60">{project.description}</p>
          </div>
        </div>
      </div>
    );
  }

  // fallback image card
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 link"
      onClick={() => project.url && window.open(project.url, "_blank")}
    >
      <div className={cardFrame} style={{ height: CARD_HEIGHT }}>
        <img
          alt={project.title}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={project.imageSrc}
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">{project.title}</h1>
      <h2 className="text-xl opacity-50">{project.description}</h2>
    </div>
  );
};

export default WorkCard;
