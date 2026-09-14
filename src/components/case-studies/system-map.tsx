import type { CaseStudy } from "@/types/case-study";
export function SystemMap({
  architecture,
}: {
  architecture: NonNullable<CaseStudy["architecture"]>;
}) {
  return (
    <div className="study-system">
      <p className="system-caption">{architecture.description}</p>
      <div className="system-layers">
        {architecture.layers.map((layer, index) => (
          <div className="system-layer" key={layer.id} data-layer={layer.id}>
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")} / Responsibility
            </span>
            <h3>{layer.label}</h3>
            <p>{layer.description}</p>
            {layer.technologies.length > 0 && (
              <p className="system-technologies">
                {layer.technologies.join(" / ")}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="system-relationships">
        <h3>Connections</h3>
        <ul>
          {architecture.relationships.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
