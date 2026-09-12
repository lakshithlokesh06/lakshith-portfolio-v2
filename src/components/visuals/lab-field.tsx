export function LabField() {
  return (
    <div className="lab-field" aria-hidden="true">
      <div className="field-top">
        <span>FIELD NOTES / 001</span>
        <span className="field-cross">+</span>
      </div>
      <svg viewBox="0 0 480 340" fill="none">
        <defs>
          <pattern
            id="field-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              stroke="currentColor"
              strokeOpacity=".12"
            />
          </pattern>
        </defs>
        <rect width="480" height="340" fill="url(#field-grid)" />
        <path
          d="M40 280H440M80 300V40"
          stroke="currentColor"
          strokeOpacity=".3"
        />
        <path
          d="M80 251L139 238L199 208L259 170L319 123L399 72"
          stroke="var(--accent)"
          strokeOpacity=".55"
          strokeDasharray="3 6"
        />
        {[
          [101, 245],
          [125, 221],
          [148, 237],
          [174, 201],
          [188, 218],
          [214, 176],
          [238, 194],
          [255, 153],
          [281, 167],
          [294, 121],
          [319, 140],
          [343, 100],
          [366, 110],
          [390, 68],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 8 ? 5 : 3}
            fill={i === 8 ? "var(--accent)" : "currentColor"}
            opacity={i === 8 ? 1 : 0.35}
          />
        ))}
        <circle
          cx="281"
          cy="167"
          r="17"
          stroke="var(--accent)"
          strokeOpacity=".35"
        />
        <path d="M299 167H355" stroke="var(--accent)" strokeOpacity=".3" />
        <text
          x="362"
          y="171"
          fill="var(--accent)"
          fontSize="10"
          fontFamily="monospace"
        >
          a possibility
        </text>
        <text
          x="40"
          y="318"
          fill="currentColor"
          fontSize="9"
          fontFamily="monospace"
        >
          OBSERVE
        </text>
        <text
          x="375"
          y="318"
          fill="currentColor"
          fontSize="9"
          fontFamily="monospace"
        >
          CONNECT
        </text>
      </svg>
      <div className="field-bottom">
        <span>
          Finding structure.
          <br />
          <b>Making it useful.</b>
        </span>
        <span className="field-cross">↗</span>
      </div>
    </div>
  );
}
