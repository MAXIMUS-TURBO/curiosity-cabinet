
import { useState } from "react";
import posts from "../data/instagramPosts.json";
import "./InstagramGallery.css";
import { assetPath } from "../utils/assetPath";

export default function InstagramGallery() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);

  const validPosts = posts.filter(
    (post) => post.images && post.images.length > 0
  );

  function openPost(post) {
    setSelectedPost(post);
    setSlideIndex(0);
  }

  function closePost() {
    setSelectedPost(null);
    setSlideIndex(0);
  }

  function changeSlide(direction) {
    if (!selectedPost) return;

    setSlideIndex((current) => {
      const total = selectedPost.images.length;
      return (current + direction + total) % total;
    });
  }

  return (
    <section className="instagram-archive">
      <div className="instagram-archive-heading">
        <span className="instagram-eyebrow">
          MARKETING & COMMUNICATIONS
        </span>

        <h2>Social Media Archive</h2>

        <p>
          A collection of Instagram content published by
          UHCL Education Abroad, featuring study abroad
          experiences, student stories, and campus engagement.
        </p>

        <a
          href="https://www.instagram.com/uhcleducationabroad/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-profile-link"
        >
          View original Instagram account ↗
        </a>
      </div>

      <div className="instagram-post-grid">
        {validPosts.slice(0, visibleCount).map((post) => (
          <button
            key={post.id}
            type="button"
            className="instagram-post-card"
            onClick={() => openPost(post)}
            aria-label={`View Instagram post from ${post.date}`}
          >
            <img
              src={assetPath(post.image)}
              alt={post.caption?.slice(0, 100) || "Instagram post"}
              loading="lazy"
            />

            {post.images.length > 1 && (
              <span className="instagram-carousel-icon">
                ▣ {post.images.length}
              </span>
            )}

            <div className="instagram-post-overlay">
              <span>
                {new Date(`${post.date}T12:00:00`).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </span>
            </div>
          </button>
        ))}
      </div>

      {visibleCount < validPosts.length && (
        <button
          type="button"
          className="instagram-load-more"
          onClick={() => setVisibleCount((count) => count + 12)}
        >
          Load More Posts
        </button>
      )}

      {selectedPost && (
        <div
          className="instagram-modal-backdrop"
          onClick={closePost}
          role="presentation"
        >
          <div
            className="instagram-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Instagram post details"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="instagram-close"
              onClick={closePost}
              aria-label="Close"
            >
              ×
            </button>

            <div className="instagram-modal-media">
              <img
                src={assetPath(selectedPost.images[slideIndex])}
                alt={`Slide ${slideIndex + 1}`}
              />

              {selectedPost.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="instagram-slide-prev"
                    onClick={() => changeSlide(-1)}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="instagram-slide-next"
                    onClick={() => changeSlide(1)}
                    aria-label="Next image"
                  >
                    ›
                  </button>

                  <span className="instagram-slide-counter">
                    {slideIndex + 1} / {selectedPost.images.length}
                  </span>
                </>
              )}
            </div>

            <div className="instagram-modal-details">
              <div className="instagram-account">
                <strong>@uhcleducationabroad</strong>
                <span>{selectedPost.date}</span>
              </div>

              <p className="instagram-caption">
                {selectedPost.caption}
              </p>

              <a
                href={selectedPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-original-link"
              >
                View original post ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
