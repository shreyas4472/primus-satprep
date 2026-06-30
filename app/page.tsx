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
            <a href="#program">Program</a>
            <a href="#checkins">Coaching</a>
            <a href="#instructor">Instructor</a>
            <a href="#difference">Why It's Different</a>
          </div>
          <a href="#book" className="nav-cta">
            Book a Free Consultation
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Flexible SAT Coaching</div>
            <h1>
              SAT prep built around what each student actually needs.
            </h1>
            <p className="hero-sub">
              We help students gain confidence, sharpen strategy, and keep progress
              moving forward with tutoring hours that expand or contract based on
              readiness.
            </p>
            <div className="hero-ctas">
              <a href="#book" className="btn-primary">
                Book a Free Consultation →
              </a>
              <a href="#program" className="btn-secondary">
                See the Program
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="num">Flexible</div>
                <div className="label">Tutoring hours tailored to need</div>
              </div>
              <div className="stat">
                <div className="num">Modern</div>
                <div className="label">Digital SAT strategy and support</div>
              </div>
              <div className="stat">
                <div className="num">Ongoing</div>
                <div className="label">Progress checks with every step</div>
              </div>
            </div>
          </div>

          <div className="hero-card reveal">
            <img src="/tutoring.svg" alt="Student and coach illustration" className="hero-card-image" />
            <div className="hero-card-tag">Coaching designed for modern SAT success</div>
            <h3 className="hero-card-heading">
              Build confidence, strategy, and consistency before test day.
            </h3>
            <p className="hero-card-text">
              Every student receives a custom plan based on their performance and
              pacing, not a fixed timeline.
            </p>
            <div className="hero-card-list">
              <span className="card-pill">Personalized roadmap</span>
              <span className="card-pill">Progress-based pacing</span>
              <span className="card-pill">Digital SAT practice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="wrap philosophy-grid">
          <div className="reveal">
            <div className="eyebrow">Philosophy</div>
            <h2 className="section-title">
              Why this isn't hourly tutoring
            </h2>
            <p>
              Traditional SAT tutoring often revolves around individual hourly
              sessions. While effective, that model naturally emphasizes making the
              most of each scheduled hour — and important things like accountability,
              relationship building, and personalized planning can get less attention.
            </p>
            <p>
              This Bootcamp is built differently. Instead of selling tutoring hours,
              it provides a complete coaching experience that supports students from
              their initial diagnostic through test day.
            </p>
          </div>
          <div className="reveal">
            <p className="pull-quote">
              "The goal isn't simply to explain SAT questions — it's to build the
              habits, confidence, and strategy a student needs to maximize their score."
            </p>
          </div>
        </div>
      </section>

      <section id="program">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Program Structure</div>
            <h2>Flexible sessions built around student progress</h2>
            <p>
              We build the right number of tutoring hours around each student’s goals,
              strengths, and pace — not a preset package.
            </p>
          </div>
          <div className="roadmap-wrap reveal">
            <div className="roadmap">
              <div className="road-step">
                <div className="road-dot" />
                <div className="road-week">Start</div>
                <div className="road-title">Diagnostic & Plan</div>
                <div className="road-desc">
                  Baseline diagnostics set a personalized preparation roadmap.
                </div>
              </div>
              <div className="road-step">
                <div className="road-dot" />
                <div className="road-week">Build</div>
                <div className="road-title">Flexible Coaching</div>
                <div className="road-desc">
                  Sessions adapt to the student’s progress and study rhythm.
                </div>
              </div>
              <div className="road-step">
                <div className="road-dot" />
                <div className="road-week">Track</div>
                <div className="road-title">Check-ins</div>
                <div className="road-desc">
                  Regular progress reviews keep the plan aligned with growth.
                </div>
              </div>
              <div className="road-step">
                <div className="road-dot" />
                <div className="road-week">Ready</div>
                <div className="road-title">Test-Day Strategy</div>
                <div className="road-desc">
                  Final sessions focus on timing, confidence, and digital SAT format.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="divider" />
      </div>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Personalized Learning</div>
            <h2>No two students follow the same path</h2>
            <p>
              Every student receives an individualized study plan based on their specific
              strengths and weaknesses, adjusted continuously as they progress.
            </p>
          </div>
          <div className="feature-grid reveal">
            <div className="feature">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div>
                <h3>Personalized Homework</h3>
                <p>Assignments tailored to each student's gaps, not a generic problem set.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div>
                <h3>Targeted Practice</h3>
                <p>Focused work on weak concepts and question types that matter most.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 4 5-6" />
                </svg>
              </div>
              <div>
                <h3>Evolving Study Plan</h3>
                <p>The plan adjusts continuously as the student makes progress.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
              </div>
              <div>
                <h3>Mistake Review</h3>
                <p>Recurring patterns in errors are identified and corrected early.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="checkins" className="checkins">
        <div className="wrap split">
          <div className="reveal">
            <div className="eyebrow">Flexible Support</div>
            <h2 className="section-title">Tutoring hours expand and contract with each student’s pace</h2>
            <p className="highlight-text">
              The program adapts to the student instead of forcing a preset duration.
            </p>
            <ul className="checklist">
              <li>
                <span className="mark">＋</span>
                Flexible tutoring hours
              </li>
              <li>
                <span className="mark">＋</span>
                Progress-based planning
              </li>
              <li>
                <span className="mark">＋</span>
                Test-day timing practice
              </li>
              <li>
                <span className="mark">＋</span>
                Clear goals for every session
              </li>
              <li>
                <span className="mark">＋</span>
                Support between lessons when needed
              </li>
            </ul>
          </div>
          <div className="reveal">
            <img src="/progress.svg" alt="Progress illustration" className="section-image" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <ul className="checklist reveal">
            <li>
              <span className="mark">＋</span>
              Questions answered between sessions
            </li>
            <li>
              <span className="mark">＋</span>
              Homework guidance on demand
            </li>
            <li>
              <span className="mark">＋</span>
              Study reminders
            </li>
            <li>
              <span className="mark">＋</span>
              Encouragement and accountability
            </li>
            <li>
              <span className="mark">＋</span>
              Study plan adjustments when necessary
            </li>
          </ul>
          <div className="reveal">
            <div className="eyebrow">Continuous Support</div>
            <h2 className="section-title">Learning doesn't stop when a session ends</h2>
            <p className="section-copy">
              Students stay engaged even on days without formal instruction, with ongoing communication built directly into the program.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="divider" />
      </div>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Instruction Focus</div>
            <h2>Strategy built for the digital SAT</h2>
            <p>The emphasis is on understanding why strategies work, not memorizing shortcuts.</p>
          </div>
          <div className="tag-cloud reveal">
            <span className="tag-pill">SAT Reading Strategies</span>
            <span className="tag-pill">SAT Math Strategies</span>
            <span className="tag-pill">Digital SAT Techniques</span>
            <span className="tag-pill">Time Management</span>
            <span className="tag-pill">Question-Type Approaches</span>
            <span className="tag-pill">Common Traps & How to Avoid Them</span>
            <span className="tag-pill">Efficient Problem-Solving</span>
            <span className="tag-pill">Test-Day Preparation</span>
          </div>
        </div>
      </section>

      <section id="instructor" className="instructor">
        <div className="wrap instructor-grid">
          <div className="instructor-card reveal">
            <div className="credential">
              <span className="k">Recent digital SAT scorer</span>
              <span className="v">Current student mentor</span>
            </div>
            <div className="credential">
              <span className="k">Coaching style</span>
              <span className="v">Process-oriented, supportive, data-driven</span>
            </div>
            <div className="credential">
              <span className="k">Student focus</span>
              <span className="v">Skills, strategy, confidence</span>
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">Instructor</div>
            <h2 className="section-title">Taught by someone who just took the exam</h2>
            <p className="section-copy">
              The program is led by a recent SAT scorer with extensive experience working with students. Because the instructor completed the digital SAT recently, students receive current, practical advice that reflects today's exam — not strategies from years ago.
            </p>
          </div>
        </div>
      </section>

      <section id="difference">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">What Makes This Different</div>
            <h2>A roadmap, not a set of hours</h2>
            <p>Families enroll in a structured coaching program — not a stack of individual tutoring hours.</p>
          </div>
          <div className="compare reveal">
            <div className="compare-col old">
              <h3>Typical Tutoring</h3>
              <ul>
                <li>Isolated, hourly sessions</li>
                <li>Support ends when the clock runs out</li>
                <li>Little contact between sessions</li>
                <li>Fixed, one-size-fits-all lesson plan</li>
                <li>Focus on maximizing a single hour</li>
              </ul>
            </div>
            <div className="compare-col new">
              <h3>SAT Bootcamp</h3>
              <ul>
                <li>A complete 2-month roadmap</li>
                <li>Weekly accountability check-ins</li>
                <li>Continuous communication between sessions</li>
                <li>Personalized plan that evolves over time</li>
                <li>Focus on long-term improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final" id="book">
        <div className="wrap">
          <div className="eyebrow cta-eyebrow">Get Started</div>
          <h2>Let's build your roadmap to test day.</h2>
          <p>Book a free consultation call to discuss your goals, take a baseline diagnostic, and see if the Bootcamp is the right fit.</p>
          <a href="#" className="btn-primary">Book a Free Consultation →</a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>© 2026 SAT Bootcamp. All rights reserved.</div>
          <div>Personalized one-on-one SAT coaching.</div>
        </div>
      </footer>
    </>
  );
}
