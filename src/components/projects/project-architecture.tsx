export function ProjectArchitecture() {
  return (
    <div className="project-architecture" aria-labelledby="architecture-title">
      <div className="detail-label" id="architecture-title">
        Conceptual architecture
      </div>
      <p className="architecture-intro">
        The API connects the interface to planning and persistence. Storage is a
        separate branch, not the final step of an agent chain.
      </p>
      <ol className="architecture-spine">
        <li>
          <span>User interface</span>
          <strong>Next.js / React</strong>
        </li>
        <li>
          <span>Application API</span>
          <strong>FastAPI / Python</strong>
        </li>
      </ol>
      <div className="architecture-branches">
        <div>
          <span className="branch-label">Planning orchestration</span>
          <h5>LangGraph / LangChain</h5>
          <p>Multi-agent itinerary generation</p>
          <div className="architecture-leaf">
            OpenAI<span>Model integration</span>
          </div>
        </div>
        <div>
          <span className="branch-label">Persistence</span>
          <h5>SQLAlchemy</h5>
          <p>Application data access</p>
          <div className="architecture-leaf">
            PostgreSQL<span>Saved trips</span>
          </div>
        </div>
      </div>
    </div>
  );
}
