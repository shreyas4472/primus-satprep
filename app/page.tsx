"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <nav className="wrap">
          <div className="logo">
            <span className="logo-mark" />
            SAT Bootcamp
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#book">Book</a>
          </div>
          <a href="#book" className="nav-cta">
            Book a Free Consultation
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">SAT Prep</div>
              <h1>Score higher with flexible, student-first coaching.</h1>
              <p className="hero-sub">
                Customized SAT support that adapts to each student’s pace and goals.
              </p>
              <div className="hero-ctas">
                <a href="#book" className="btn-primary">
                  Book a Free Consultation →
                </a>
                <a href="#features" className="btn-secondary">
                  See how it works
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="num">Flexible</div>
                  <div className="label">Hours based on need</div>
                </div>
                <div className="stat">
                  <div className="num">Digital</div>
                  <div className="label">SAT-ready strategy</div>
                </div>
                <div className="stat">
                  <div className="num">Support</div>
                  <div className="label">Between sessions too</div>
                </div>
              </div>
            </div>

            <div className="hero-card reveal">
              <img src="/tutoring.svg" alt="Student and tutor illustration" className="hero-card-image" />
              <div className="hero-card-tag">Personalized SAT coaching</div>
              <h3 className="hero-card-heading">A simple path from assessment to test day.</h3>
              <p className="hero-card-text">
                Start with a diagnostic, then build a plan that fits your student’s schedule, strengths, and confidence.
              </p>
              <div className="hero-card-list">
                <span className="card-pill">Flexible pace</span>
                <span className="card-pill">Real SAT practice</span>
                <span className="card-pill">Ongoing guidance</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow">How it works</div>
              <h2>Three simple steps to stronger SAT prep.</h2>
            </div>
            <div className="feature-grid reveal">
              <div className="feature">
                <div className="feature-icon">1</div>
                <div>
                  <h3>Assess</h3>
                  <p>Quick diagnostics identify the most useful focus areas.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">2</div>
                <div>
                  <h3>Coach</h3>
                  <p>Custom sessions and SAT strategy tailored to each student.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">3</div>
                <div>
                  <h3>Track</h3>
                  <p>Progress checks keep the plan aligned with improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="checkins">
          <div className="wrap split">
            <div className="reveal">
              <div className="eyebrow">Why students choose this</div>
              <h2 className="section-title">Flexible prep without the fluff.</h2>
              <p className="highlight-text">
                Clear, short messaging that explains the value quickly and keeps the page easy to scan.
              </p>
            </div>
            <div className="reveal">
              <img src="/progress.svg" alt="Progress illustration" className="section-image" />
            </div>
          </div>
        </section>

        <section className="cta-final" id="book">
          <div className="wrap">
            <div className="eyebrow cta-eyebrow">Ready to begin?</div>
            <h2>Book a free consultation and see the custom plan.</h2>
            <p>
              One simple call to review goals, baseline performance, and the right next steps.
            </p>
            <a href="#" className="btn-primary">Book a Free Consultation →</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>© 2026 SAT Bootcamp. All rights reserved.</div>
          <div>Flexible SAT coaching for students who want more than just tutoring.</div>
        </div>
      </footer>
    </>
  );
}
