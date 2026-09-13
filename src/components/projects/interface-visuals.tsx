import type { ProjectVisualKind } from "@/types/project";

// Shapes use synthetic, unitless coordinates. No chart encodes project metrics.
export function InterfaceVisual({ kind }: { kind: ProjectVisualKind }) {
  switch (kind) {
    case "travel":
      return (
        <>
          <div className="visual-topline">
            <span>ITINERARY / COMPOSITION</span>
            <span>PLAN → SAVE</span>
          </div>
          <div className="travel-layout">
            <svg viewBox="0 0 260 195" fill="none" focusable="false">
              <path
                className="preview-grid"
                d="M20 40H240M20 90H240M20 140H240M60 15V180M130 15V180M200 15V180"
              />
              <path
                className="preview-path"
                d="M35 140C35 70 110 135 115 75S190 25 220 58"
              />
              {[
                [35, 140],
                [115, 75],
                [220, 58],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="7" className="preview-point" />
                  <text x={x - 14} y={y + 29}>
                    DAY {i + 1}
                  </text>
                </g>
              ))}
            </svg>
            <div className="itinerary-notes">
              <p>
                <span>01</span>Preferences
              </p>
              <i />
              <p>
                <span>02</span>Agent planning
              </p>
              <i />
              <p>
                <span>03</span>Saved itinerary
              </p>
            </div>
          </div>
          <div className="visual-bottomline">
            <span>PERSONALIZE</span>
            <span>GENERATE</span>
            <span>EXPORT PDF ↗</span>
          </div>
        </>
      );
    case "dataset":
      return (
        <>
          <div className="visual-topline">
            <span>DATASET / PROFILE</span>
            <span>INSPECT</span>
          </div>
          <div className="dataset-layout">
            <div className="profile-matrix">
              {Array.from({ length: 36 }, (_, i) => (
                <i
                  key={i}
                  className={[5, 14, 26].includes(i) ? "missing" : ""}
                />
              ))}
              <span>FIELD COMPLETENESS</span>
            </div>
            <svg viewBox="0 0 210 145" fill="none" focusable="false">
              <path
                className="preview-grid"
                d="M10 40H200M10 80H200M10 120H200"
              />
              {[20, 40, 69, 93, 73, 51, 28].map((height, i) => (
                <rect
                  key={i}
                  x={17 + i * 25}
                  y={120 - height}
                  width="16"
                  height={height}
                  className="preview-bar"
                />
              ))}
              <text x="12" y="141">
                DISTRIBUTION / SHAPE
              </text>
            </svg>
          </div>
          <div className="visual-bottomline">
            <span>PROFILE</span>
            <span>VISUALIZE</span>
            <span>REPORT ↗</span>
          </div>
        </>
      );
    case "market":
      return (
        <>
          <div className="visual-topline">
            <span>MARKET / SIGNALS</span>
            <span>EXPLORE</span>
          </div>
          <div className="market-layout">
            <div className="role-lines">
              <span>ROLE DISTRIBUTION</span>
              {["Role A", "Role B", "Role C"].map((label, i) => (
                <div key={label}>
                  <small>{label}</small>
                  <i style={{ width: `${82 - i * 19}%` }} />
                </div>
              ))}
            </div>
            <div className="skill-matrix">
              <span>SKILL RELATIONSHIPS</span>
              <div>
                {Array.from({ length: 16 }, (_, i) => (
                  <i key={i} style={{ opacity: 0.18 + ((i * 7) % 9) / 12 }} />
                ))}
              </div>
            </div>
          </div>
          <div className="visual-bottomline">
            <span>EMPLOYMENT</span>
            <span>ROLES</span>
            <span>SKILLS</span>
          </div>
        </>
      );
    case "career":
      return (
        <>
          <div className="visual-topline">
            <span>CAREER / DIRECTIONS</span>
            <span>RECOMMEND</span>
          </div>
          <svg
            className="career-graph"
            viewBox="0 0 440 170"
            fill="none"
            focusable="false"
          >
            <path
              className="preview-path"
              d="M78 50L207 85M78 125L207 85M207 85L335 30M207 85H335M207 85L335 140"
            />
            <circle cx="207" cy="85" r="22" className="preview-point" />
            {[
              [78, 50],
              [78, 125],
              [335, 30],
              [335, 85],
              [335, 140],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" className="preview-point" />
            ))}
            <text x="30" y="34">
              SKILLS
            </text>
            <text x="30" y="151">
              INTERESTS
            </text>
            <text x="190" y="89">
              MODEL
            </text>
            <text x="350" y="34">
              PATH A
            </text>
            <text x="350" y="89">
              PATH B
            </text>
            <text x="350" y="144">
              PATH C
            </text>
          </svg>
          <div className="visual-bottomline">
            <span>INPUT SIGNALS</span>
            <span>POSSIBLE PATHS ↗</span>
          </div>
        </>
      );
    case "commerce":
      return (
        <>
          <div className="visual-topline">
            <span>COMMERCE / DEMAND</span>
            <span>FORECAST</span>
          </div>
          <svg
            className="commerce-chart"
            viewBox="0 0 440 170"
            fill="none"
            focusable="false"
          >
            <path
              className="preview-grid"
              d="M20 40H420M20 85H420M20 130H420"
            />
            <path
              d="M270 50L320 30L370 42L420 13V77L370 86L320 70L270 80Z"
              className="forecast-area"
            />
            <path
              className="preview-path"
              d="M20 126L65 113L110 125L155 81L200 91L240 58L270 65"
            />
            <path
              className="preview-path forecast-line"
              d="M270 65L320 50L370 64L420 45"
            />
            <path className="preview-grid" d="M270 15V145" />
            <text x="20" y="163">
              OBSERVED PATTERN
            </text>
            <text x="288" y="163">
              DEMAND SIGNAL
            </text>
          </svg>
          <div className="visual-bottomline">
            <span>EXPLORE</span>
            <span>ANALYZE</span>
            <span>ESTIMATE</span>
          </div>
        </>
      );
    case "score":
      return (
        <>
          <div className="visual-topline">
            <span>ACADEMIC / PREDICTION</span>
            <span>ESTIMATE</span>
          </div>
          <div className="score-layout">
            <div className="feature-lines">
              <span>STUDENT FEATURES</span>
              {[60, 80, 45].map((w, i) => (
                <div key={i}>
                  <i style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
            <span className="score-connector">→</span>
            <div className="score-output">
              <span>MODEL OUTPUT</span>
              <svg viewBox="0 0 160 100" fill="none" focusable="false">
                <path className="preview-grid" d="M10 70H150" />
                <path
                  className="preview-path"
                  d="M20 68C52 68 45 22 80 22S111 68 140 68"
                />
                <path className="preview-grid" d="M80 14V78" />
                <circle cx="80" cy="22" r="4" className="preview-point" />
              </svg>
              <span>ESTIMATED PERFORMANCE</span>
            </div>
          </div>
          <div className="visual-bottomline">
            <span>FEATURES → MODEL → OUTCOME</span>
          </div>
        </>
      );
  }
}
