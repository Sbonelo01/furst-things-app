const PodcastEmbed = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Latest Episode
          </h2>
          <p className="text-lg text-muted-foreground">
            Listen to the newest episode of Furst Things Furst
          </p>
        </div>
        
        <div className="bg-card rounded-3xl overflow-hidden shadow-card p-8">
          <div className="aspect-video bg-gradient-primary rounded-2xl flex items-center justify-center">
            {/* <div className="text-center text-primary-foreground">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Furst Things Furst</h3>
              <p className="text-sm opacity-90">
                Click to listen on your favorite platform
              </p>
            </div> */}
            <iframe width="738" height="415" src="https://www.youtube.com/embed/3xvKS9L5Xbs?list=LL" title="Episode 7 - Part 1 | The Fundamentals of Pet Nutrition with Romain – Pet Nutritionist &amp; Brand Owner" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastEmbed;